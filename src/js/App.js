import { useState } from 'react';
import '../scss/App.scss';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import database from '../config/database'

export default function App() {
  const [data, setData] = useState(database);
  return (
    <div className="App">
      <Sidebar data={data} setData={setData} />
      <Main data={data} setData={setData} />
    </div>
  );
};