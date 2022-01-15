import { useState } from 'react';
import '../scss/App.scss';
import Sidebar from './components/Sidebar';
import database from '../config/database'

function App() {
  const [data, setData] = useState(database);
  return (
    <div className="App">
      <Sidebar data={data} />
    </div>
  );
}

export default App;
