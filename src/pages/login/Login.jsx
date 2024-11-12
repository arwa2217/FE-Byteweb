import React from 'react'
import styles from './Login.module.scss';
import logo from "../../assets/images/logo.png"
import {EmailIcon, PasswordIcon } from '../../assets/svg/index';
import Button from '../../component/button/Button';
import { useForm } from 'react-hook-form';
import { loginValidators } from '../../form-validators/loginValidators';
import { EMAIL, PASSWORD } from '../../constant/formKeys';
import Divider from '../../component/divider/Divider'
const Login = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
   
  const onSubmit = (data) => {
   console.log(data)
    }
  return (
    <>
      <form className={styles.mainContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
          <img src={logo} className={styles.logoContainer} alt="error display to logo" />
          
          <p className={styles.textStyle}>Welcome back</p>
          <p className={styles.subTextStyle}>Sign in to manage your digital business cards.</p>
          
          <div className={styles.loginForm}>
            
            <span className={styles.iconLabelStyle}> <label htmlFor={EMAIL} className={styles.labelStyle}>
              Email <span className={styles.asterick}>*</span>
            </label></span>
           
        <span>
          <input type="text"
          name="userName"
            placeholder='Enter your Email'
          className={styles.inputFieldStyle}
        {...register(EMAIL, loginValidators[EMAIL])}
              />
              </span>
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}

          </div>
          
          <div className={styles.loginForm}>
            
            <span className={styles.iconLabelStyle}> <label htmlFor={EMAIL} className={styles.labelStyle}>
              Password <span className={styles.asterick}>*</span>
            </label></span>
           
        <span>
          <input type="password"
          name="password"
            placeholder='Enter your password'
          className={styles.inputFieldStyle}
        {...register(PASSWORD, loginValidators[PASSWORD])}
              />
              </span>
              {errors.password && (
                <span className={styles.errorText}>{errors.password.message}</span>
              )}

          </div>
          
          <div className={styles.loginBox}>
            <div className={styles.container}>
              <input type='checkbox'
                name="c1" />
              <p className={styles.loginTextStyle}>Keep me login</p>
            </div>

            <div className={styles.forgotPasswordStyle}>Password?</div>
          </div>
          <Button type="submit" buttonName="Sign In" customClass={styles.buttonStyle} />

          <span className={styles.signupContainer}>
            <p className={styles.textStyle}>Don't have an account yet?</p>
            <p className={styles.signupStyle}>Sign Up</p></span>
          
          <span className={styles.optionalContainer}>
          <Divider customClass={styles.dividerCustomStyle} /> OR <Divider customClass={styles.dividerCustomStyle} /> 
          </span>
        </div>
         
        </form>
    </>
  )
}

export default Login

