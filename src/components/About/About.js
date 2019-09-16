import React from 'react'
import Aux from '../../hoc/_Aux'
import Header from '../Header/Header'
import Text from '../Text/Text'



const byTheAlphabet =(props)=>{
	return(
		<Aux>
			<section className="section">
				<div className="container">
					<Header/>
					<Text />
					
				</div>
			</section>
		</Aux>
	)
}


export default byTheAlphabet