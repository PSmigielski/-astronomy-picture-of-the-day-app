import React, {useState, useEffect} from 'react';
// import views
import Home from './views/Home'
function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    if(data.headers) console.log(data);
  }, [data])
  return (
    <div className="App">
      <Home setData={setData}/>
    </div>
  );
}
export default App;
