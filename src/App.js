import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import {Books} from './DummyData/bookList';
import {BottomScrollListener} from 'react-bottom-scroll-listener';

function App() {

  const [list, setList] = useState(Books);
  const [filteredList, setfilteredList] = useState(list);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  

  useEffect(()=>{
    setList(Books);
  },[])
 
  const excludeColumns = ['image'];
  let numBooks = filteredList.length;

  const startLoading = () => {

    if (!search){
      setloading(true);
      setTimeout(()=>{
      setfilteredList([...list,...filteredList]);
      setList([...list,...filteredList]);
      setloading(false);
    },1000);}
  }

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
    <div className="screen">
      <NavBar/>
      <text>You can search for Name, Author, Subject and Date(dd-mm-yyyy)</text><br/>
            <input
                type="text"
                value={search}
                onChange={(text) => {
                    setsearch(text.target.value);
                    onHandleChange(text.target.value);
                }}
            />
      <h2>Total Books: {numBooks}</h2>
      <BottomScrollListener onBottom={startLoading}>
          <div />
        </BottomScrollListener>
      <List books={filteredList}/>
      <Footer/>
      {
        loading ? <text>Loading</text> : null
      }
    </div>
  );
}

export default App;
