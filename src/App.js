import './App.css';
import picture from './assets/images/illustration-sign-up-desktop.svg'
import mobilePicture from './assets/images/illustration-sign-up-mobile.svg';
import icon from './assets/images/icon-list.svg'
import successIcon from './assets/images/icon-success.svg'
import { useState } from 'react';

function App() {

      const [email, setEmail] = useState('');
      const [isValid, setIsValid] = useState(null);

      const onClick = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regex.test(email)) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
      };
      
   
  return (
    <div className="App">
      {!isValid?(
      <div className='page'>
        <div className='info'>
          <div className='PMinfo'>
          <h1> Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        
            <div  className='List'>
              <ul>
                <li> <img  className = "image" src = {icon} alt = "icon" /> <p className='be'>Product discovery and building what matters</p></li>
                <li> <img src = {icon} alt = "icon" /> <p className='be'>Measuring to ensure updates are a success</p></li>
                <li> <img src = {icon} alt = "icon" /> <p className='be'>And much more!</p></li>
              </ul>
            </div>
          </div>
          
          <div className='email'>
            <div className='headings'>
              <h6 > E-mail address</h6>
              
          
            {isValid === false && (
              <h6 style={{ color: 'red' }} className='errorMessage'>Valid email required.</h6>
            )}
            </div>
            <input className='E-mail' type='text'  value={email} onChange = {(e) => setEmail(e.target.value)} placeholder='email@company.com' />
            <button onClick = {onClick}>Subscribe to Monthly newsletter</button>
          </div>
        </div>

        <div className='block' >
          <img className = "picture" src = {picture} alt = "illustration"/>
          <img className = "picturetwo" src = {mobilePicture} alt = "illustration-mobile"/>
        </div>

      </div>
      ) : ( 
        <div className='message'>
          <div className='success'>
            <div className='text'>
              <img src = {successIcon} alt="success"/>
              <h1 className='thanks' >Thanks for subscribing!</h1>  
              <p  className='thanks'>A confirmation email has been sent to <strong>ash@loremcompany.com </strong>.Please open it and click the button inside to confirm your subscription.</p>
            </div>
            
            <div>
              <button className = "button">Dismiss message</button> 
            </div>
          </div>  
        </div>  
       )}
    </div>
  );
}

export default App;
