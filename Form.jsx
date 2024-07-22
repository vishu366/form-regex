import React, { useState } from "react";



function Form() {
    const [email, setemail] = useState('');
    const [emailerror, setemailerror] = useState('')
    const [password, setpassword] = useState('')
    const [phone, setphone] = useState('')
    const [phoneError, setphoneError] = useState('')



    const emailRegex = /.+@.+\..+/;
    const PhoneRegex = /^\+91\d{10}$/;


    function handlebutton(e) {
        e.preventDefault()

        if (!validateEmail(email)) {
            setemailerror('please enter correct email adress !')
            console.log('invalid email')
        }
        else {
            setemailerror('')
            console.log('valid emai', email)
        }

        if (!validatephone(phone)) {
            setphoneError('please enter correct phone number')
            console.log('invalid phone number')
        }
        else {
            setphoneError('')
            console.log('valid phone number', phone)
        }


        const validateEmail = (email) => emailRegex.test(email)
        const validatephone = (phone) => PhoneRegex.test(phone)


        return (
            <>
                <div>
                    <form className="on-text" onSubmit={handlebutton}>
                        <label htmlFor="">Name : </label>
                        <input type="text"
                            placeholder="enter your name"


                        />

                        <br /> <br />
                        <label htmlFor="">Email:  </label>
                        <input type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <div>{emailerror}</div>
                        <br /> <br />
                        <label htmlFor="">Phone number : </label>
                        <input type="text"
                            placeholder="Enter your phone number"
                            onChange={(e) => setphone(e.target.value)}
                        />
                        <p>{phoneError}</p>

                        <br /> <br />
                        <label htmlFor="">Password : </label>
                        <input type="text"
                            value={password}
                            placeholder="Enter password here"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <br />
                        <br /><br />
                        <button className="button">Click me </button>

                    </form>
                </div>

            </>
        )
    }
}

export default Form