import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import {Books, Books2} from './DummyData/bookList';
import {BottomScrollListener} from 'react-bottom-scroll-listener';
import { Dna } from 'react-loader-spinner';

function App() {

  const [list, setList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  const [b1,setb1] = useState(false);

  

  useEffect(()=>{
    setList(Books);
    setfilteredList(Books);
  },[])
 
  const excludeColumns = ['image'];
  let numBooks = filteredList.length;

  const startLoading = () => {

    if (!search && numBooks<=40){
      setloading(true);
      setTimeout(()=>{
        if(b1){
        setfilteredList([...list,...Books]);
        setList([...list,...Books]);
        }
        else {
          setfilteredList([...list,...Books2]);
          setList([...list,...Books2]);
        }
      setloading(false);
      setb1(!b1);
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
    <div className="screen" >
      <NavBar/>
      <div className='container'>
        <div className='searchcontainer'>
          <input
              placeholder='Type to search'
              className='input'
              type="text"
              value={search}
              onChange={(text) => {
                  setsearch(text.target.value);
                  onHandleChange(text.target.value);
              }}
          />
          <text className="searchlable">You can search for Name, Author, Subject and Date(dd-mm-yyyy)</text><br/>
        </div>
      <text className='numbook'>Total Books: {numBooks}</text>
      <BottomScrollListener onBottom={startLoading}>
          <div />
       </BottomScrollListener>
      {
        filteredList.length> 0 ? <List books={filteredList}/>
      : <text className='noRes'>No Results Found</text>
      }
      </div>
      <div className='loader'>
      <Dna
        visible={loading}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperClass="loaderinside"
        />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
