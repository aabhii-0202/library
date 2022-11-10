import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import Filters from './components/Filters';
import {Books} from './DummyData/Data/bookList';

function App() {

  const [list, setList] = useState(Books);
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [subject,setSubject] = useState('');
  const [Publishdate,setPublishdate] = useState('');


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
      />
      <List names={list}/>
      <Footer/>
    </div>
  );
}

export default App;
