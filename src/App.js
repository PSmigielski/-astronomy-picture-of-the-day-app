import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import views
import Home from './views/Home';
import PhotoView from './views/PhotoView';
// import main style
import './style/main.css'
function App() {
  const [data, setData] = useState({})
  const [recived, setRecived] = useState(false);
  useEffect(()=>{
    if(data.date) console.log(data);
  }, [data])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/picture">
            <PhotoView data={data} recived={recived} setRecived={setRecived}/> 
          </Route>
          <Route path="/">
              <Home setData={setData} setRecived={setRecived}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
