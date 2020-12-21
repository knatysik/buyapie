import React, { useState, useEffect } from 'react'
import styles from './input.css'
import deleteImage from '../../images/delete.svg'


function Input() {
    const [products, setProducts] = useState([])

    const deleteStyle = {
        width: '25px',
        height: '25px',
        cursor: 'pointer'
    }

    const addProduct = (e) => {
        e.preventDefault()
        //console.log('@@@ form', e.target.elements.product.value, e.target)

        if (e.target.elements.product.value) {
            setProducts([e.target.elements.product.value, ...products])
            e.target.reset()
        }
    }

    const deleteProduct = (element) => {   
        setProducts(products.filter(item => { 
            console.log('delete', products, element, item)
            return item !== element
        }))    
    }

    return (
        <form onSubmit={addProduct}>
            <label for="inputValue">Enter product</label>
            <input type="text" name="product" id="product" placeholder="milk" />
            <button type="submit">Add product</button>

            <ul className="listProduct">
                {products.map(productsItem => <li>
                    <input type="checkbox"/>
                    {productsItem}
                    <img src={deleteImage} alt="delete" style={deleteStyle} onClick={ () => deleteProduct(productsItem) } />
                </li>)}
            </ul>
        </form>
    )
}
export default Input