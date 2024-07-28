import React from 'react';
import styles from './SongSelection.module.css';
import axios from 'axios';

const SongSelection = async () => {
    const res = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english`);
    const categories = res.data.items[1].mixed_items;
    return (
        <section className={styles.songSelection}>
            <h2 className={styles.title}>Song Categories</h2>
            <div className={styles.grid}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.card}>
                        <img src={category.png_icon} alt={category.slug} className={styles.image} />
                        <div className={styles.overlay}>
                            <span className={styles.categoryName}>{category.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SongSelection;
