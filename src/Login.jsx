import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', padding: '20px' }}>
      <form
        style={{
          maxWidth: '300px',
          Height: '500vh',
          margin: '0 auto',
          padding: '50px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          display:'',
          backgroundColor: '',
        }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={''}
            onChange={''}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          />
        </div>


        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='Password' style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px ' }}>
            Password
          </label>
          <input type="Password"
            name="password"
            id="Password"
            value={''}
            onChange={''}
            placeholder='Enter your Password'
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{
          padding: '5px 0 20px 0'
        }}>
          <a href="">Forget Password</a>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type='submit'
            style={{
              padding: '5px 0 15px 0',
              background: 'blue',
              color: 'white',
              padding: '8px 16px 8px 16px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>Don't have an account? <a href="">Sign up</a></span>
        </div>

      </form>


      

      
    </div>



  );
};

export default Login;
