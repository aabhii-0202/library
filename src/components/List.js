import React from 'react'

export default function List({books}) {
  return (
    <div>
        {
            books.map(item => {
                return (
                    <div>
                      <img src={item.image}/>
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
