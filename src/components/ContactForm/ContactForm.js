import React from 'react'
import styles from './ContactForm.module.css'


class ContactForm extends React.Component{

  state = {
    emailValue: '',
    nameValue: '',
    phoneNumberValue: '',
  };

  onEmailChange = (event) => {
    this.setState({ emailValue: event.target.value })
  }

  onNameChange = (event) => {
    this.setState({ nameValue: event.target.value })
  }

  onPhoneNumberChange = (event) => {
    this.setState({ phoneNumberValue: event.target.value })
  }




  render(){
    return (
      <section className= {` card section ${styles.FormBox} `} >
        <div className=" ">
          <h3 className="title">Sign up now  </h3>
          <h3 className="subtitle">And get A Free Training hour at Bob's Gym</h3>
          <p className="is-hidden-mobile">
            Fill in your Name, E-mail and Phone number <br />and click the <strong>"Get Strong"</strong> button<br/> to be part of this Strong minded Team.
          </p>
          <form 
            action="" 
            method="" 
            id="" 
            name="" 
            target=""
            noValidate 
            className=""
          >

            <div className="columns center ">
              <div className="column is-7">
               
                  <div className="field">
                    <div className="control">

                      <input    
                        id="mce-LNAME"
                        className="input " 
                        type="text" 
                        placeholder="My Name"
                        value={this.state.nameValue}
                        name="LNAME"
                        onChange={this.onNameChange}
                      />

                    </div>
                  </div>
                  <div className="field">
                    <div className="control">

                      <input 
                        id="mce-EMAIL"
                        className="input required email" 
                        type="email" 
                        placeholder="my@mail.com"
                        value={this.state.emailValue}
                        name="EMAIL" 
                        onChange={ this.onEmailChange} 
                      />

                    </div>
                  </div>

                  <div className="field">
                    <div className="control">

                      <input     
                        id="mce-PHONE"
                        className="input required email"
                        type="text"
                        placeholder="737-your-number"
                        value={this.state.phoneNumberValue}
                        name="PHONE"
                        onChange={this.onPhoneNumberChange}
                      />

                    </div>
                  </div>

                  {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups
                  <div style={{ position: "absolute", left:" -5000px"}} aria-hidden="true">
                    <input type="text"
                          name="" 
                          tabIndex="" 
                          defaultValue=""
                    />*/}
              


                  <div className="field ">
                    <div className="control">
                      <button 
                        type="submit" 
                        value="Subscribe" 
                        name="subscribe" 
                        id="mc-embedded-subscribe"
                        className="button is-primary"
                      >
                        <span>"Get Strong"</span></button>
                    </div>
                  </div>
                </div>
              </div>
          </form>
        </div>

      </section>
    )
  }
	
}


export default ContactForm

