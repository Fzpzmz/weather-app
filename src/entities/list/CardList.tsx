import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { removeCard } from '../../features/store/cities/slice';
import { RootState } from '../../features/store/store';
import { ICard } from '../card/card.interface';
import styles from './CardList.module.scss';

const CardList: FC = () => {
  const { cards } = useSelector((state: RootState) => state.cities);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('cities', JSON.stringify(cards));
    }
    isMounted.current = true;
  }, [cards]);

  const handleRemoveCard = useCallback((id: number) => {
    if (window.confirm('Удалить этот город?')) {
      dispatch(removeCard(id));
    }
  }, [dispatch]);

  if (cards.length === 0) {
    return (
      <section className={styles.empty}>
        <div className={styles.emptyIcon}>🌍</div>
        <h2 className={styles.emptyTitle}>Cities are not added</h2>
        <p className={styles.emptyDescription}>
          Add first city to track
        </p>
      </section>
    );
  }

  return (
    <div className={styles.list}>
      {cards.map((card: ICard) => (
        <Card
          key={card.id}
          card={card}
          deleteCard={() => handleRemoveCard(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;