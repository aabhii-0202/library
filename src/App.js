import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import Filters from './components/Filters';
import {Books} from './DummyData/Data/bookList';

function App() {

  const [list, setList] = useState(Books);
  const [filteredList, setfilteredList] = useState(list);
  const [search, setsearch] = useState('');
 
  const excludeColumns = ['image'];
  let numBooks = filteredList.length;

  const onHandleChange = (text) => {
    const lower =  text.toLowerCase().trim();
    if(!lower){
      setfilteredList(list);
    }
    else{
      const filteredarray = list.filter(item => {
        return Object.keys(item).some(key => 
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lower))
      });
      setfilteredList(filteredarray);
    }
  }
  

  return (
    <div className="App">
      <NavBar/>
      <label>You can search for Name, Author, Subject and Date(dd-mm-yyyy)</label><br/>
            <input
                type="text"
                value={search}
                onChange={(text) => {
                    setsearch(text.target.value);
                    onHandleChange(text.target.value);
                }}
            />
      <h2>Total Books: {numBooks}</h2>
      <List books={filteredList}/>
      <Footer/>
    </div>
  );
}

export default App;
