import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import Filters from './components/Filters';
import {Books} from './DummyData/Data/bookList';

function App() {

  const [list, setList] = useState(Books);
  const [filteredList, setfilteredList] = useState(list);
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [subject,setSubject] = useState('');
  const [Publishdate,setPublishdate] = useState('');
  let numBooks = filteredList.length;

  const onHandleChange = (text) => {
    const lower =  text.toLowerCase().trim();
    if(!lower){
      setfilteredList(list);
    }
    else{
      const filteredarray = [];

      setfilteredList(filteredarray);
    }
  }

  return (
    <div className="App">
      <NavBar/>
      <Filters 
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        subject={subject}
        setSubject={setSubject}
        Publishdate={Publishdate}
        setPublishdate={setPublishdate}
        onHandleChange={onHandleChange}
      />
      <h2>Total Books: {numBooks}</h2>
      <List books={filteredList}/>
      <Footer/>
    </div>
  );
}

export default App;
