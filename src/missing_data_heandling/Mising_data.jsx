import React from 'react'
import { data } from './data'
import Item from './Item'

const Mising_data = () => {
  return (
    <>
        <div className="">
            <h1>Missing Data Component</h1>

            {data.map(item => {
                return <Item {...item} key={item.id}/>
            })}
        </div>
    </>
  )
}

export default Mising_data