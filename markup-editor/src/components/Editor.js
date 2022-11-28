import React from 'react'
import {useState} from 'react'
import '../App.css';
import ReactHtmlParser from 'react-html-parser';
 

const Editor = () => {

  const [text, setText] = useState(
    'Hi i am Anudeep!'
  );

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>  
        <header className='navbar'>
            <h1 className='heading'>Mark Up</h1>
        </header>
        <div className='content'>
            <div className='right_side'>
              <textarea class="textarea1" name="textbox1" onChange={handleChange}></textarea>
            </div>
            <div className='left_side'>
              <h3>{ReactHtmlParser(text)}</h3>
            </div>
        </div>
    </>
  )
}

export default Editor