import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Timer } from './Timer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { EditorComponent } from './App';
import MyCalendar from './calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Timer />
    <EditorComponent />
    <MyCalendar />
  </>
);

