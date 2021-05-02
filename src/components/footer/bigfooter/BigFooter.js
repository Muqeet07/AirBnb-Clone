import React, { useState } from 'react'
import './BigFooter.css'
import List from './list/List';
import bigFooterData from '../../data/bigfooterlist.json';

function BigFooter() {

    const [bigFooterList, setBigFooterList] = useState(bigFooterData);

  return (
    <div className="bigfooter">
        {
            bigFooterList.map(list => {
                return(
                    <List 
                        key={list.heading}
                        heading={list.heading}
                        list={list.list}
                    />
                )
            })
        }
    </div>
  )
}

export default BigFooter
