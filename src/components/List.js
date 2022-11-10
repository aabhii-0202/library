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
                    <div>
                    <text className='name'>{item.name}</text>
                    <text className='author'>{item.author}</text>
                    <text className='subject'>{item.subject}</text>
                    <text className='date'>{item.date}</text>
                    </div>
                  </div>
              );
          })
        }
    </div>
  )
}
