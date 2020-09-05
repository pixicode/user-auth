import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import UserAuth from './UserAuth/UserAuth';


function App() {
  return (
    <div className="App container" style={{padding: "3rem"}}>
      <UserAuth />
    </div>
  );
}

export default App;
