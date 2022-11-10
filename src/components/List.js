import React from 'react'
import './List.css'

export default function List({books}) {
  return (
    <div className='list'>
        {
          books.map(item => {
            return (
              <div className='div'>
                <img className='image' src={item.image} alt="img" />
                <div className='div3'>
                  <div className='div2'>
                    <text className='lable'>Name:</text>
                    <text className='value'>{item.name}</text>
                  </div>
                  <div className='div2'>
                    <text className='lable'>Author's name:</text>
                    <text className='value'>{item.author}</text>
                  </div>
                  <div className='div2'>
                    <text className='lable'>Subject:</text>
                    <text className='value'>{item.subject}</text>
                  </div>
                  <div className='div2'>
                    <text className='lable'>Date Of Publish:</text>
                    <text className='value'>{item.date}</text>
                  </div>
                </div>
              </div>
            );
          })
        }
    </div>
  )
}
