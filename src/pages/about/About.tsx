import React, { FC } from 'react'
import CustomButton from '../../shared/button/CustomButton'
import LinkHome from '../../shared/link/LinkHome'
import styles from './About.module.scss'

const About: FC = () => {
	return (
		<div className={styles.about}>
			<h1 className={styles.title}>About Page</h1>
			<p className={styles.desc}>
				Here you can see the weather<br />
				all over the world! Enjoy <br /> 
				our service
			</p>
			<LinkHome />
		</div>
	)
}

export default About
