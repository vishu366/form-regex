import React, { useState } from "react";


function Child() {
  const[email, setemail]= useState('')
  const[emailError, setEmailerror]= useState('')
  const [phone , setphone]= useState('')
  const [phoneError, setPhoneError]= useState('')

  const EmailRegex= /.+@.+\..+/;
  const PhoneRegex= /^\+91\d{10}$/

  function handlebutton(e){
    e.preventDefault()

    if(!validateEmail(email)){
      setEmailerror('plese enter correct email adress')
      console.log('invalid email')
    }
    else{
      setEmailerror('')
      console.log('valid email', email)
    }

    if(!validatephone(phone)){
      setPhoneError('please enter correct phone number');
      console.log('invalid phone number')
    }
    else{
      setPhoneError('')
      console.log('valid phone number', phone)
    }

  }



  const validateEmail=(email)=> EmailRegex.test(email)
  const validatephone=(phone)=>PhoneRegex.test(phone) 
 


  return(
    <>
    <div className="cointaner">
      <form onSubmit={handlebutton}>
        <label>Phone number: </label>
        <input type="text"
        placeholder="enter your number"
        value={phone}
        onChange={(e)=> setphone(e.target.value)}
       
         />
         <div>{phoneError}</div>
        
         <br />
         <label htmlFor="">Email : </label>
         <input type="text"
         placeholder="enter your email"
         value={email}
         onChange={(e)=> setemail(e.target.value)}
          />
          <br />
          <div>{emailError}</div>
          <br />
          <label htmlFor="">Date of birth</label>
          <input type="date"
          id="dob"
          name="dob"
          required
           />
         
         <button>click me </button>
      </form>
    </div>
    </>
  )
}

export default Child;