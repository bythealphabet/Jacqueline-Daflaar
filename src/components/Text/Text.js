import React from 'react'
import Aux from '../../hoc/_Aux'
import styles from './Text.module.css'


const text =(props)=>{
	return(
		<Aux>
			<section class={` section ${styles.TextContainer} `}>
				<p>{props.text}</p>
			</section>
		</Aux>
		
	)
}


export default text