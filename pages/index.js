import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <img className='img-fluid' src='/icon-512x512.png'/>
        <h1 className={styles.title}>Landmarks Around the World</h1>
        <h2 className={styles.description}>Famous landmarks and tourist attractions around the world</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/icon-192x192.png" alt="Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
}
