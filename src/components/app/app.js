import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/EmployersAddForm';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

function App() {

  const data = [
    {name: 'John C.', salary: 800, increase: false, id:1},
    {name: 'John A.', salary: 1000, increase: false, id:2},
    {name: 'John B.', salary: 1200, increase: true, id:3},
    {name: 'John D.', salary: 750, increase: true, id:4},
  ]

  return (
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter />
      </div>
      <EmployersList 
        data={data}
        onDelete={id => console.log(id)} />
      <EmployersAddForm />
    </div>
  )
}

export default App