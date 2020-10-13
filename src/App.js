import React, {useState, useEffect} from 'react';
// import views
import Home from './views/Home';
import PhotoView from './views/PhotoView';
function App() {
  const [data, setData] = useState({})
  const [recived, setRecived] = useState(false);
  useEffect(()=>{
    if(data.date) console.log(data);
  }, [data])
  return (
    <div className="App">
      <Home setData={setData} setRecived={setRecived}/>
      {recived ? <PhotoView data={data} setRecived={setRecived}/> : ''}
    </div>
  );
}
export default App;
