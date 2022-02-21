// Styles
import styles from '../styles/Card.module.css';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

// Next
import { useRouter } from 'next/router';

export default function Card({ id, imgUrl, title, city, country, description }) {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={imgUrl} className="img-fluid" />
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{title}</h1>
        {/* <p className={styles.cardDesc}>{description.slice(0, 110) + '...'}</p> */}
        <p className={styles.cardSubtitle}>{`${city}, ${country}`}</p>
        <div className={styles.cardActions}>
          <BiDotsHorizontalRounded size={30} color="#7daab0" cursor={'pointer'} onClick={() => router.push(`/locations/${id}`)}/>
        </div>
      </div>
    </div>
  );
}
