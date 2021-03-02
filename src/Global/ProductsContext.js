import React, {createContext, useState} from 'react';

import dslr from '../assets/dslr.jpg'
import headphones from '../assets/headphones.jpg'
import iphone from '../assets/iphone.jpg'
import blueYetti from '../assets/microphone.jpg'
import perfume from '../assets/perfume.jpg'
import rings from '../assets/rings.jpg'
import shoes from '../assets/shoes.jpg'
import watch from '../assets/watch.jpg' 

export const ProductsContext = createContext();
const ProductsContextProvider=(props)=>{
    const [products]=useState([
        
        {id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
        {id: 2, name: 'Headphones', price: 30, image: headphones, status: 'new'},
        {id: 3, name: 'Iphone', price: 400, image: iphone, status: 'hot'},
        {id: 4, name: 'Blue Yetti', price: 200, image: blueYetti, status: 'hot'},
        {id: 5, name: 'Perfume', price: 40, image: perfume, status: 'new'},
        {id: 6, name: 'Rings', price: 100, image: rings, status: 'new'},
        {id: 7, name: 'Shoes', price: 80, image: shoes, status: 'hot'},
        {id: 8, name: 'Watch', price: 120, image: watch, status: 'new'},
    ])
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
          {props.children}
        </ProductsContext.Provider>

    )
}
export default ProductsContextProvider;