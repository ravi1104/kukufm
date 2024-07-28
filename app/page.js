import SongSelection from './components/SongSelection';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Infinitescroll from './components/Infinitescroll';

async function fetchCarouselData() {
  try {
    const res = await fetch('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english', { cache: 'no-store' });
    const data = await res.json();
    const banners = data.items.find(item => item.type === 'banner').banners;
    return banners.slice(0, 5);
  } catch (error) {
    console.error('Error fetching carousel data:', error);
    return [];
  }
}

async function fetchInitialData() {
  try {
    const res = await fetch(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english`, { cache: 'force-cache' });
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return [];
  }
}

export default async function Home() {
  const slides = await fetchCarouselData();
  const initialItems = await fetchInitialData();
  const filteredItems = initialItems.filter(item => Array.isArray(item.shows) && item.shows.length > 0);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Carousel slides={slides} />
        <section className="quote">
          <h1 className="quote-title">Let the music heal your soul and set you free</h1>
        </section>
        <SongSelection />
        <section className="quote">
          <h1 className="quote-title">Every song tells a story. What will yours be today?</h1>
        </section>
        <Infinitescroll initialItems={filteredItems} />
      </main>
    </div>
  );
}
