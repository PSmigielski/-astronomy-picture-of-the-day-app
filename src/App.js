import React, {useState, useEffect} from 'react';
// import views
import Home from './views/Home';
import PhotoView from './views/PhotoView';
function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    if(data.date) console.log(data);
  }, [data])
  return (
    <div className="App">
      <Home setData={setData}/>
      <PhotoView data={data}/>
    </div>
  );
}
export default App;
