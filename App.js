import './App.css';
import { useState } from 'react';
import Header from './Header';

//JavaScript
function App() {
  
  let [title, changeTitle] = useState(['Introduction', 'Skills', 'About me', 'Archiving', 'Career', 'Projects']);
  

  //HTML 
  return (
    <div className='App'>
        <Header/>
        <div className='list'>
          <h3> { title[0] } </h3> {/* My Introduciton */}
          <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>

        <div className='list'>
          <h3> { title[1] } </h3> {/* Skills: Fullstack? Front-end? Back-end? DataScience?*/}
          <p></p>
          <hr/>
        </div>

        <div className='list'> {/* About me: name, email, contact, location, education, insta*/}
          <h3> { title[2] } </h3>
          <p></p>
          <hr/>
        </div>

        <div className='list'> {/* Archiving: blog, github, linkedin */}
          <h3> { title[3] } </h3>
          <p></p>
          <hr/>
        </div>

        <div className='list'> {/* Career */}
          <h3> { title[4] } </h3>
          <p></p>
          <hr/>
        </div>

        <div className='list'> {/* Projects */}
          <h3> { title[5] } </h3>
          <p></p>
          <hr/>
        </div>
        
    </div>
  );
}

export default App;
// useState: 
// react: 
// abstraction
// full stack