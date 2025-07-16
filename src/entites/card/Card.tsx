import React, { FC, PropsWithChildren } from 'react'
import { IcardProps } from './card.interface'
import styles from './Card.module.scss'
import { AiTwotoneDelete } from 'react-icons/ai'

const Card: FC<IcardProps> = ({ card, deleteCard }) => {
	return (
		<div className={styles.card} key={card.id}>
			<div className={styles.block}>
				<p className={styles.city}>City:</p>
				<span>{card.city}</span>
			</div>
			<div className={styles.block}>
				<p>Temperature:</p>
				<span>{card.temperature} °C</span>
			</div>
			<div className={styles.info}>
				<div className={styles.block}>
					<p>Weather:</p> <span>{card.weather}</span>
				</div>
				<div className={styles.block}>
					<p>Wind:</p>
					<span>{card.wind} Km/h</span>
				</div>
			</div>
			<div className={styles.btnBlock}>
				<img className={styles.pic} src={card.iconUrl} alt='icon pic' />
				<button className={styles.btnDelete} onClick={deleteCard}>
					<AiTwotoneDelete />
				</button>
			</div>
		</div>
	)
}

export default Card
