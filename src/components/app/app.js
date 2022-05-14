import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/EmployersAddForm';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

function App() {
  return (
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter />
      </div>
      <EmployersList />
      <EmployersAddForm />
    </div>
  )
}

export default App