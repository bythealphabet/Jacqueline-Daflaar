import React from 'react'
import Aux from '../hoc/_Aux'
import Hero from '../components/Hero/Hero'
import Home from '../components/Home/Home'
import IndexGallery from '../components/IndexGallery/IndexGallery'
import ContactForm from '../components/ContactForm/ContactForm'
import MotiText from '../components/MotiText/MotiText'
import VideoGallery from '../components/VideoGallery/VideoGallery'
import ImgBox from '../components/ImgBox/ImgBox'
import awardImg from '../assests/img/award.jpg'
import About from '../components/About/About'
import ArticleTemp from '../components/ArticleTemp/ArticleTemp'


const missionHeader = 'Our mission'
const mission = 'Is to improve the health of those we serve.'
const mission2 = 'Providing a fitness training program that will transform your life experience for a better you.'

const awardHeader = "Awarded"
const award = 'International Federation of Fitness & Bodybuilding Jugde. Sport & Recreation Expert'

const headerMain = 'About'
const headerSub = 'Jacdaf Fitness'
const subHeader1 = null
const subHeader2 = null
const text1 = 'We specialize in life-changing fitness, nutrition, and lifestyle programs individualized to a person’s goals and needs. We do this by creating awareness, which gives people the freedom to choose a healthier life, one full of energy and joy. This is done one step at a time, giving the client a chance to adjust to the changes, both emotionally and physically.'
const text2 = 'Our clients will be motivated and ready to make a change in their lives towards better health, whatever that means for them. They will be positive, open-minded people who want to make a difference in this world by first growing themselves, and thus, touching their families and friends as a result.'
const text3 = 'We are invested in our clients and strive to exceed expectations of what they want and need. We care about them as individuals and are thrilled to see transformation of a client’s body, belief systems, and ultimately, their lives.'


const content =(props)=>{
	return(
		<Aux>
			<Hero>
				<Home />
				<ContactForm />	
			</Hero>
			
			<Hero>
				<MotiText
					missionHeader={missionHeader}
					mission={mission} 
					mission2={mission2} 
				/>
				<VideoGallery />
			</Hero>
			<Hero>
				<ImgBox 
					img={awardImg}
				/>
				<MotiText
					missionHeader={awardHeader}
					mission={award} 
				/>
			</Hero>

			<ArticleTemp
				headerMain={headerMain}
				headerSub={headerSub}
				subHeader2={subHeader2}
				subHeader1={subHeader1}
				text1={text1}
				text2={text2}
				text3={text3}

			/>

			
		</Aux>
		
	)
}


export default content