import React, {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

import './index.css'

const ArchiveGallery = ({ setRecived, setData }) => {
  const [inputDate, setInputDate] = useState("");
  const now = new Date();
  const dateInput = useRef(null);
  useEffect(() => {
    const input = dateInput.current;
    input.max = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
  })
  const getData = (fulldate) =>{
    let date = `&date=${fulldate}`;
    if(fulldate === "") date = "";
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=0ZkA7ov8qU0A0ZgQzu4vOj3cODyJiCYdXXt3sAdj${date}`)
      .then(res => {
        setData(res.data);
        setRecived(true);
      })
      .catch(err => console.log(err))
  }
  const inputDateHandler = (e) => {
    setInputDate(e.target.value);
    console.log()
  }
  const handleSubmit = () => {
    getData(inputDate);
  }
  return(
    <div className="archiveForm">
      <h1 className="archiveTitle">Archival Pictures</h1>
      <p className="archiveText">Choose date between current date and 16th june 1995 to see archival Astronomy Picture of the Day</p>
      <form className="form">
        <input ref={dateInput} min="1995-06-16" max="" className="dateInput" type="date" value={inputDate} onChange={inputDateHandler}/>
        <Link className="buttonContainer" to="/picture">
          <input className="submitButton" onClick={handleSubmit} type="submit" value="see the photo"/>
        </Link>
      </form>
    </div>
  )
}

export default ArchiveGallery;