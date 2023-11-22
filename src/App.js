import './App.css';
import picture from './assets/images/illustration-sign-up-desktop.svg'
import mobilePicture from './assets/images/illustration-sign-up-mobile.svg';
import icon from './assets/images/icon-list.svg'
// import { useEffect } from 'react';

function App() {

      // const email = document.QuerySelector('E-mail')
      // const error = document.QuerySelector('error')

      // const [success, setSuccess] = useState(null)

      // const onClick()=>{
      //       if email == regex(){
      //         email.style.border = solid red 1px;
      //         error.style.display = block;
      //       } else {
      //         success = true;
      //       }
      // }
      // useEffect{(),[]}
      
  return (
    <div className="App">
      {/* {!success?( */}
      <div className='page'>
        <div className='info'>
          <h1> Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div>
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
              <h4> E-mail address</h4>
              <h4 className='error'>Valid email required</h4>
            </div>
            <input className='E-mail' placeholder='email@company.com'></input>
            <button onClick = "onClick()">Subscribe to Monthly newsletter</button>
          </div>
        </div>

        <div className='block' >
          <img className = "picture" src = {picture} alt = "illustration"/>
          <img className = "picturetwo" src = {mobilePicture} alt = "illustration-mobile"/>
        </div>

      </div>
      {/* ) : (
        <h2>Success!</h2>      
      )} */}
    </div>
    
  
  );
}

export default App;
