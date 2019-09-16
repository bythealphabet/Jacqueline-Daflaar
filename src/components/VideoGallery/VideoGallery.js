import React from 'react'
import video from '../../assests/video/sample.mp4'


const videoGallery =(props)=>{
	return(
		<div>
			<video width={600} height={500} controls>
		        <source src={video} type="video/mp4" />
		        
		        Your browser does not support HTML5 video.
		      </video>
		</div>
	)
}


export default videoGallery