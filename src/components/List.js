import React from 'react'

export default function List({names}) {
  return (
    <div>
        {
            names.map(item => {
                return (
                    <h2>{item.name}</h2>
                );
            })
        }
    </div>
  )
}
