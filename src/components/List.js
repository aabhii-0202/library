import React from 'react'
import './List.css'

export default function List({books}) {

  const Tag = ({lable,value}) => {
    return (
      <div className='details'>
        <text className='lable'>{lable}</text>
        <text className='value'>{value}</text>
      </div>
    );
  }

  return (
    <div className='list'>
        {
          books.map(item => {
            return (
              <div className='div'>
                <img className='image' src={item.image} alt="img" />
                <div className='div3'>
                  <Tag lable='Name:' value={item.name}/>
                  <Tag lable="Author's name:" value={item.author}/>
                  <Tag lable='Subject:' value={item.subject}/>
                  <Tag lable='Date Of Publish:' value={item.date}/>
                </div>
              </div>
            );
          })
        }
    </div>
  )
}
