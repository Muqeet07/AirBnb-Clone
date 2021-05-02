import React from 'react'
import './List.css'

function List({heading, list}) {
  return (
    <div className="list">
        <h4 className="list__heading">{heading}</h4>
        {
            list.map(listvalue => {
                return(
                    <div key={listvalue} className="list__value">
                        {listvalue}
                    </div>
                )
            })
        }
    </div>
  )
}

export default List
