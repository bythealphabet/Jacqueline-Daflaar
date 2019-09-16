import React from 'react'
import styles from './Header.module.css'


const header =(props)=>{
	return(
		<nav className={`navbar ${styles.NavBar} `}>
        
        <div className={`navbar-brand ${styles.NavBarBrand} `} >
          <div className={`navbar-item is-hidden-touch  ${styles.NavBarLogo} `} >
            <h2 className={`title ${styles.TextLogo} `}>Jacqueline Daflaar</h2>
          </div>
          <div role="button" className= {`navbar-burger burger ${styles.NavBarBurger} `} >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div id="navbarBasicExample" className= {`navbar-menu ${styles.NavBarMenu} `} >
          <div className="navbar-end">

            <div className={`navbar-item ${''}`}>
              <div className={`${styles.NavBarItem}`}>
                Home
                <div className={` ${styles.NavBarItemLine}`}></div>
              </div>
            </div>
            <div className={`navbar-item ${''}`}>
              <div className={`${styles.NavBarItem}`}>
                Gallery
                <div className={` ${styles.NavBarItemLine}`}></div>
              </div>
            </div>
          <div className={`navbar-item ${''}`}>
              <div className={`${styles.NavBarItem}`}>
                About
                <div className={` ${styles.NavBarItemLine}`}></div>
              </div>
            </div>
           <div className={`navbar-item ${''}`}>
              <div className={`${styles.NavBarItem}`}>
                Contact
                <div className={` ${styles.NavBarItemLine}`}></div>
              </div>
            </div>
          </div>        
        </div>
      </nav>
	)
}


export default header