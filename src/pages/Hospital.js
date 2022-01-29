import React, { useState } from 'react';
import kelly from "../assets/Login_Image.png"
import governmebticon from "../assets/govlogo.png"
import cowinicon from "../assets/cowiniconsmall.png"
import InputField from '../components/InputField';


function Hospital() {

    const [showOtp, toggleOtp] = useState(false)
    const [loader, showLoader] = useState(false)
    const [OTP, setOTP] = useState("");
    const [phone, setPhone] = useState('')

    //  const handleOtp = otp => setOTP(otp);

    // const clear = () => {
    //         setOTP("")
    // }

    //login request
    const handleLogin = () => {
            // if (phone.length > 9 && phone.length < 11) {
            //     dispatch(logins({ mobile: phone }));
            //     toggleOtp(true)
            //     //history.push(`/session/${phone}`)
            // }
            // console.log(phone,'phone');
    }
    
  return (
            <>
                   <div className="container-fluid kar-bw-white">
                        <div className="row">
                              <div className="col-md-6 p-0 ">
                                    <img className="img-fluid image-left-hospital" src={kelly} alt=""/>
                              </div>

                              <div className="col-md-6 login-form-container">
                                                <div className="container align-items-center">
                                                        <div className="row justify-content-center my-3">
                                                                <img className="img-fluid government-emblem" src={governmebticon} alt="" />
                                                        </div>
                                                        <div className="row justify-content-center my-3">
                                                                <img src={cowinicon} alt="" className="img-fluid cowin-icon" />
                                                        </div>
                                                        <div className="row my-3 justify-content-center mx-5">
                                                                <div className="col-12 px-10 my-2 input-field-container">
                                                                    {/* <input
                                                                            type="tel"
                                                                            placeholder='Phone no'
                                                                            required
                                                                            className='form-control hospital-id'
                                                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                            value={phone}
                                                                            onChange={handleChange}
                                                                    /> */}
                                                                    <InputField
                                                                             type="tel"
                                                                             value={phone}
                                                                             placeholder='Phone no'
                                                                             label="Categories"
                                                                             required
                                                                            //  className='form-control hospital-id'
                                                                             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                            // onChange={handleChange}
                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                     />
                                                                </div>
                                                        </div>
                                                        <div className="row mx-5">
                                                                <div className="col-12 text-center">
                                                                    <button className='login-btn' onClick={handleLogin}>{loader ? 'LOGIN...' : 'LOGIN'}</button>
                                                                </div>
                                                        </div>
                                                </div>
                                </div>
                        </div>
                   </div>
            </>
     );
}
export default Hospital;
