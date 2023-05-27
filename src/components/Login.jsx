import React from 'react';
import Logo from '../assets/img/foodieWoodie.jpg'; //give path name in camelcase
import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';




const Login = () => {
    const navigate = useNavigate();
  const { logIn,googleSignIn } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrorMsg] = useState('');

  const handleSubmission = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
        await googleSignIn();
        navigate("/");
    } catch (error) {
        setErrorMsg(error.message)
    }

  }

  return (
    <div className=''>
      <div
        className='flex flex-col justify-center items-center h-screen w-[30rem] h-[33rem] mx-[35rem] my-[4rem]'
        // Adjust the height and width based on your layout requirements
      >
        <div>
            <img src={Logo} alt="" />
        </div>
        <div className='my-[1rem] '>
          <label htmlFor='email' className=' mx-[1.7rem]'>Email</label>
          <input
            type='email'
            name='email'
            className='border-2'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='my-[1rem]'>
          <label htmlFor='pass' className='mx-[1rem]'>Password</label>
          <input
            type='password'
            name='pass'
            className='border-2 '
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='text-red-500'>{errMsg}</div>
        <button onClick={handleSubmission} className='border bg-black text-white'>
          Login
        </button>

        <div>
            <GoogleButton onClick={ handleGoogleSignIn }/>
        </div>

        <div>
            Not registered with us yet? <Link to="/signup"><button className='border bg-black text-white'>Signup</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
