import './App.css';
import React from 'react';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      ReactJS CRUD
      </header>
      <CreateEmployeeComponent />
    </div>
    </Provider>
  );
}

export default App;
