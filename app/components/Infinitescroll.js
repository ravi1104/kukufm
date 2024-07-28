"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './InfiniteScroll.module.css';
import { FaPlay } from 'react-icons/fa';

export default function InfiniteScroll({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async (pageNumber) => {
    try {
      const res = await fetch(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${pageNumber}&lang=english`);
      const data = await res.json();
      const newItems = data.items;
      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length === 0 || newItems.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      if (bottomReached && hasMore) {
        console.log('Bottom reached, loading more data');
        fetchData(page);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, page]);

  return (
    <section className={styles.section}>
      {items.map((item, index) => (
        <div style={{ marginBottom: "100px" }} key={index}>
          <h2>{item.title}</h2>
          <div className={styles.scrollContainer}>
            <div key={index} className={styles.itemsContainer}>
              {item?.shows?.map((show, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={show.image}
                      alt={show.title}
                      width={250}
                      height={140}
                      className={styles.image}
                    />
                    <div className={styles.playIcon}>
                      <FaPlay />
                    </div>
                  </div>
                  <h3>{show.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {!hasMore && <p className={styles.endMessage}>No more items to load.</p>}
    </section>
  );
}