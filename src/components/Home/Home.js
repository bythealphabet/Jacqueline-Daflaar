import React from 'react'
import muscleImg from '../../assests/img/jacqDafTrainer.png'
import styles from './Home.module.css'




const home =(props)=>{
	return(
		<div>
			<h1 className= {`has-text-centered is-hidden-desktop ${styles.Header} `}>
				Jacqueline Daflaar
			</h1>
			<h2 className= {` ${styles.ContainerText} `}>
				<span className={` ${styles.HeaderMain} `}>Nutrition & Fitness</span>
				<span className={` ${styles.HeaderSub} `}> Joyfull and Healing </span>
			</h2>
			<h2 className= {` is-hidden-touch ${styles.ContainerText} `}>
				<span className={` ${styles.TextMain} `}>Personal Trainer</span>
				<span className={` ${styles.TextSub} `}>Coach</span>
			</h2>
			<div className = {` ${styles.ImgAndText} `}>
				<figure className={`image ${styles.HomeImage} `}>
					<img src={muscleImg} alt="Jacqueline Daflaar flexing her back and arm muscles"/>
				</figure>
				<p className = {` is-hidden-touch ${styles.SuccessText} `}>
					be strong be beautiful be healthy be successful motivation sacrifice hard work bodybuilding lean muscles love confidence gratefull
				</p>
			</div>
			<h2 className= {` is-hidden-desktop ${styles.ContainerText} `}>
				<span className={` ${styles.TextMain} `}>Personal Trainer</span>
				<span className={` ${styles.TextSub} `}>Coach</span>
			</h2>
		</div>
		
	)
}


export default home