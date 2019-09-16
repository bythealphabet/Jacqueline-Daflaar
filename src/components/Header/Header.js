import React from 'react'
import Aux from '../../hoc/_Aux'
import styles from './Header.module.css'

const header =(props)=>{
	return(
		<Aux>
			<h1 className={`title ${styles.Header}`}>{props.headerMain}</h1>
			<h3 className={`subtitle ${styles.SubHeader}`}>{props.headerSub}</h3>
		</Aux>
		
	)
}


export default header