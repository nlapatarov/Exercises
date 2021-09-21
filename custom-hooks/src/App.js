import React from 'react'
import './App.css';
import CounterOne from './components/CounterOne';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
