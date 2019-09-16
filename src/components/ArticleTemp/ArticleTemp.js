import React from 'react'
import styles from './ArticleTemp.module.css'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import Text from '../Text/Text'


const articleTemp =(props)=>{
	return(
		<div class={` ${styles.ArticleTemp} `}>
			<div className="">
				<section class={`hero is-medium ${styles.ArticleBck} `}>
					<div class={` section hero-body ${styles.ArticleHeader} `}>
						<Header
							headerMain={props.headerMain} 
							headerSub={props.headerSub} 
						/>
					</div>
				</section>
				<section className="section">
					<div className="container">
					 	<div class={` ${styles.ArticleContainer} `}>
							<div class={` ${styles.ArticleContainerLeft} `}>
								<Text
									text={props.text1}
								/>
								<SubHeader
									subHeader={props.subHeader1} 
								/>
								<Text
									text={props.text2} 
								/>
								<SubHeader
									subHeader={props.subHeader2} 
								/>
								<Text
									text={props.text3} 
								/>

								<SubHeader
									subHeader={props.subHeader3} 
								/>
								<Text
									text={props.text4} 
								/>
							</div>
							<div class={` ${styles.ArticleContainerRight} `}>
								
							</div>
					 	</div>
						
					</div>
				</section>
			</div>
		</div>
	)
}


export default articleTemp