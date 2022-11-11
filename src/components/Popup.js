import './Popup.css';

function App(props) {
    const Tag = ({lable,value}) => {
        return (
          <div className='details'>
            <text className='lable'>{lable}</text>
            <text className='value'>{value}</text>
          </div>
        );
      }


    return (props.trigger) ? (
        <div className='popup'>
          <div className='popup-inner'>
            <button className='close-btn'
            onClick={()=> props.setButtonPopup(false)}
            >Close</button>
              <img className='image' src={props.image} alt="img" />
              <div>
              <div className='div3'>
                <Tag lable='Name:' value={props.name}/>
                <Tag lable="Author's name:" value={props.author}/>
                <Tag lable='Subject:' value={props.sub}/>
                <Tag lable='Date Of Publish:' value={props.date}/>
              </div>
                <div className='detailsdiv'>
                <text className='lable'>Description:</text><br/>
                <text className='desc'>{props.desc}</text>
                </div>
              </div>
                
          </div>
        </div>
      ) : null;
}

export default App
