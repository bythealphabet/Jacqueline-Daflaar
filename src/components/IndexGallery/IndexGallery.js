import React from 'react'
import styles from './IndexGallery.module.css'
import imgBob from '../../assests/img/Bob.jpg'
import img1 from '../../assests/img/img1.jpg'
import img2 from '../../assests/img/img2.jpg'
import img3 from '../../assests/img/img3.jpg'
import img4 from '../../assests/img/img4.jpg'
import img5 from '../../assests/img/img5.jpg'


const indexGallery =(props)=>{
	return(
		
				<section className={` ${''}`}>
							<div className={` ${styles.Container}`}>
								<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
				      			<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
				      			<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
				      			<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
				      			<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
				      			<figure className="image ">
							        <img src={img5} alt=""/>
				      			</figure>
							</div>
						</section>
		
		
	)
}


export default indexGallery