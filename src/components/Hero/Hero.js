import React from 'react'
import styles from './Hero.module.css'


const hero =(props)=>{
	return(
		<section className={`hero section ${styles.Bck} `}>
        	<div className="hero-body section">
          		<div className= {`container ${styles.Container} `}>
          			{props.children}
          		</div>
        	</div>
      </section>
	)
}


export default hero

