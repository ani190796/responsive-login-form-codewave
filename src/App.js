import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from './AppRouter';
import "././styles/main.css";


function App() {
  return (
        <>
                <Router>
                    <AppRouter/>
                </Router>   
        </>
  );
}

export default App;





