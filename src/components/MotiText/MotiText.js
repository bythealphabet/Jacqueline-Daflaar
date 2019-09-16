import React from 'react'
import styles from './MotiText.module.css'


const motiText =(props)=>{
	return(
		<section className={`  ${styles.MotiBox} `}>
        	<div className=''>
        	<h3 className= {` section ${styles.MotiMission} `}>{props.missionHeader}</h3>
        		
				<p>
					 {props.mission}	
				</p>
				<p>
					{props.mission2}
				</p>
			</div>
			<div className= {`  ${styles.ReadMore} `}>
				{props.seeMore ? <p > Read more ... </p> : null}
			</div>
		</section>
	)
}


export default motiText