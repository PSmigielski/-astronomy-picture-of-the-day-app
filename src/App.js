import React, {useState} from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
// import views
import Home from './views/Home';
import PhotoView from './views/PhotoView';
import Archive from './views/Archive';
// import main style
import './style/main.css'
function App() {
  const location = useLocation();
  const [data, setData] = useState({})
  const [recived, setRecived] = useState(false);
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/picture">
            <PhotoView data={data} recived={recived} setRecived={setRecived}/> 
          </Route>
          <Route path="/archive">
            <Archive setData={setData} setRecived={setRecived}/> 
          </Route>
          <Route path="/">
            <Home setData={setData} setRecived={setRecived}/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
