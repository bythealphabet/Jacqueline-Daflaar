import React from 'react'
import Aux from '../../hoc/_Aux'
import Header from './Header/Header'
import Footer from './Footer/Footer'


const Layout =(props)=>{
	return(
		<Aux>
			<Header />
				{props.children}
			<Footer />
		</Aux>
	)
}


export default Layout