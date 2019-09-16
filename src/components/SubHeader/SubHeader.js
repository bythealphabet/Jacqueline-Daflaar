import React from 'react'
import styles from './SubHeader.module.css'


const subHeader =(props)=>{
	return(
		<h3 class={`${styles.SubHeader} `}>
			{props.subHeader}
		</h3>
	)
}


export default subHeader