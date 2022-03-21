import React,{useState} from 'react'
import '../../App.css'
import Footer from '../Footer'
import Home from './Home'
import Register from '../Register'


const SignUp = () => {
  const [isSubmitted,setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (<Register submitForm={submitForm}/> ):(<Home/>)}
        <Footer/>
    
    </>
  )
}

export default SignUp
