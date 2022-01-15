import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Sidebar from './components/Sidebar';
import database from '../config/database'

function App() {
  const [data, setData] = useState(database);
  useEffect(() => {
    console.log(data);
  });
  return (
    <div className="App">
      <Sidebar data={data} setData={setData} />
    </div>
  );
}

export default App;
