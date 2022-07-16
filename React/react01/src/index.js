import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const dialogs = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Nick' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Viktor' }
];

const messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Goodbye!' },
];

const posts = [
  { id: 1, message: 'Hi!', likesCount: 3 },
  { id: 2, message: "It's my first post", likesCount: 25 },
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
