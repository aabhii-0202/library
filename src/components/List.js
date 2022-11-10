import React from 'react'
import './List.css'

export default function List({books}) {
  return (
    <div className='list'>
        {
          books.map(item => {
              return (
                  <div>
                    <img src={item.image} />
                    <h2>{item.name}</h2>
                    <h2>{item.author}</h2>
                    <h2>{item.subject}</h2>
                    <h2>{item.date}</h2>
                  </div>
              );
          })
        }
    </div>
  )
}
