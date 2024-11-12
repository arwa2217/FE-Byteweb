import React from 'react'
import styles from "./LoginLayout.module.scss"
import bannerImage from "../../assets/images/banner_img.png"

const LoginLayout = ({children}) => {
  return (
    <>
          <div className={styles.mainContainer}>
              
              <div className={styles.logoContainer}>
                  <img src={bannerImage} alt="error"/>
              </div>
              <div className={styles.formContainer}>{children}</div>
          </div> 
    </>
  )
}

export default LoginLayout
