import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List';
import {Books, Books2} from './DummyData/bookList';
import {BottomScrollListener} from 'react-bottom-scroll-listener';
import { Dna } from 'react-loader-spinner';
import Popup from './components/Popup';

function App() {

  const [list, setList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  const [b1,setb1] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  

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
 
  const [image,setimage] = useState('');
  const [name,setName] = useState('');
  const [author,setauthor] = useState('');
  const [sub,setsub] = useState('');
  const [date,setdate] = useState('');

  const Clicked = (item) => {
    setButtonPopup(true);
    setimage(item.image);
    setName(item.name);
    setauthor(item.author);
    setsub(item.subject);
    setdate(item.date);
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
          <text className="searchlable">You can search for Name, Author, Subject and Date(dd-mm-yyyy)<br/> Click on the items to see description.</text><br/>
        </div>
      <text className='numbook'>Total Books: {numBooks}</text>
      <BottomScrollListener onBottom={startLoading}>
          <div />
       </BottomScrollListener>
       <Popup 
       trigger={buttonPopup}
       setButtonPopup={setButtonPopup}
       image={image}
       name={name}
       author={author}
       sub={sub}
       date={date}
       desc="I did little research about Dev Rev and Was amazed by the idea of DevRev. Developers and Clients are directly connecting. A manager-free environment. A very much fascinating idea. I will always want to work with people having great ideas like this. By the way congratulations on your seed funding round which you announced last year. "
       />
      {
        filteredList.length> 0 ? <List books={filteredList} pop={Clicked}/>
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
