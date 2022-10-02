import React from 'react'
import {Hivdata} from './Hivdata'

export default function Manufaturing() {
  return (
    <div className='detailbox'>
      
        {Hivdata.map((items) =>{
          return(
            <>
              <div className='detailbox2'>
                <h2>Sub classification: {items.SubCat}</h2>
                <h3>pack price: ${items.PP}</h3>
                <strong><p>Manufacturing site: {items.ManufactSite}</p></strong>
                <p>Vendor: <strong>{items.Vendor}</strong></p>
              </div>
            </>
            
          )
          
        })}
      
      
      
    </div>
  )
}
