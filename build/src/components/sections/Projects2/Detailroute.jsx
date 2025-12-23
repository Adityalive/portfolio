import React from 'react'
import { ProductsDetails } from '../../../data/Productsdetails'
import DetailProjectPage from "./DetailProjectPage"
const Detailroute = () => {
  return (
    <div>
        {ProductsDetails.map((products,index)=>(
            <DetailProjectPage key={products.id} products={products} index={index}/>
        ))}
    </div>
  )
}

export default Detailroute