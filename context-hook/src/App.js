import React from 'react';
import './App.css';
import ComponentC from './components/1 ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
// по този начин се създава context

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Niki"}>
        <ChannelContext.Provider value={"Code evolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
