import React, { FC } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IcardProps } from './card.interface';
import styles from './Card.module.scss';

const Card: FC<IcardProps> = ({ card, deleteCard }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <h3 className={styles.cityName}>{card.city}</h3>
        <img 
          className={styles.weatherIcon} 
          src={card.iconUrl} 
          alt={`Weather: ${card.weather}`}
        />
      </header>
      
      <div className={styles.weatherInfo}>
        <div className={`${styles.infoRow} ${styles.temperature}`}>
          <span className={styles.label}>Temperature</span>
          <span className={styles.value}>{card.temperature}°C</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Weather</span>
          <span className={styles.value}>{card.weather}</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Wind</span>
          <span className={styles.value}>{card.wind} km/h</span>
        </div>
      </div>
      
      <footer className={styles.cardFooter}>
        <button 
          className={styles.deleteButton} 
          onClick={deleteCard}
          aria-label="Delete city"
        >
          <AiTwotoneDelete />
        </button>
      </footer>
    </article>
  );
};

export default Card;