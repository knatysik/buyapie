import React, { useState, useEffect } from 'react'
import Item from '../item/Item.js'
import styles from './form.css'

function Input({ productsItem }) {
    const [products, setProducts] = useState([])
    const [validateErrorMessage, setValidateErrorMessage] = useState(null)

    const validate = (value) => {
        if (!value) {
            setValidateErrorMessage('* Enter зкщвгсе please')
            return false
        }
        if (value.length < 3) {
            setValidateErrorMessage('* Enter at least 3 characters please')
            return false
        }
        setValidateErrorMessage('')
        return true
    }

    const addProduct = (e) => {
        const productInput = e.target.elements.product
        e.preventDefault()
        //console.log('@@@ form', e.target.elements.product.value, e.target)
        productInput.focus()
        if (validate(productInput.value)) {
            setProducts([productInput.value, ...products])
            e.target.reset()
        }
    }

    const deleteProduct = (element) => {
        setProducts(products.filter(item => {
            return item !== element
        }))
    }

    return (
        <form onSubmit={addProduct}>
            <label for="product">Enter product:</label>
            <div className="addProduct">
                <input type="text" name="product" id="product" placeholder="milk" autofocus />
                <button type="submit">Add product</button>
            </div>
            {validateErrorMessage && <p>{validateErrorMessage}</p>}
            <ul className="listProduct">
                {products.map(productsItem => {
                    return <Item item={productsItem} deleteCallback={deleteProduct} />
                }
                )}
            </ul>
        </form>
    )
}
export default Input