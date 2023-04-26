import React, { useState, useEffect } from 'react';
import './ProductCard.css'
import ProductCard from './ProductCard'

function ProductCardHolder({toProdPage}) {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const sheetId = '1RPWues5yhLXPOgG6XDtCa6m6e0MtdZCN3JFRswzGB1w';
      const sheetName = 'product'; // replace with your sheet name
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
  
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const json = JSON.parse(data.substr(47).slice(0, -2)); // parse the JSON data
          const rows = json.table.rows; // extract the rows from the JSON object
  
          // loop through the rows and extract the data
          const result = rows.map(row => {
            return {
              Name: row.c[0].v,
              PosterLink: row.c[1].v,
              Price: row.c[2].v
            };
          });
          setProducts(result); // set the products state with the data
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div className='product-card-holder'>
        {products.map((product, index) => (
          <ProductCard id={index+1} key={index} price={product.Price} name={product.Name} imgLink={product.PosterLink} toProdPage={toProdPage}/>
        ))}
      </div>
    );
  }
  

export default ProductCardHolder