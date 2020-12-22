import React, { useState } from 'react'
import deleteImage from '../../images/delete.svg'
import styles from './item.css'

function Item({ item, deleteCallback }) {
    const [checked, setChecked] = useState(false)
    const changeChecked = e => {
        setChecked(!checked)
        //console.log('productId', e.target, checked)
    }

    return (
        <li>
            <input id="productId" type="checkbox" onChange={changeChecked} />
            <label for="productId" className={checked === true && 'done'}>{item}</label>
            <img src={deleteImage} alt="delete" onClick={ () => deleteCallback(item) } />
        </li>
    )
}

export default Item