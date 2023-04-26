import React from 'react'

function ProductCard({price, name,imgLink,toProdPage,id}) {
  const url = `/products/${id}`
  return (
    <div className='product-card'>
      <div className='poster-container'>
      <img src={imgLink} className='poster'/>
      </div>
      <div className='prod-details'>
        <a target="_blank" href={url} className='link'><p className='prod-name'>{name}</p></a>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductCard