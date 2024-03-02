
import React from 'react';
import '../styles/rcard.scss';
import { BsImageFill } from "react-icons/bs";
const Card = ({ builder }) => {
    const { name, price,discount } = builder;
    
    const sellingPrice=(originalP, discountGiven)=>{
        const d = (discountGiven/100)*originalP;
        const mrp =originalP - d;
        return mrp.toFixed(2);
    }
    return (
        <div className="rcard">
            <div className='img'>
                <BsImageFill size={120} color='grey' />
                <div className='tag'>{name}</div>
            </div>
            <div className='div1'>
            <span className='discount'>{discount}% Off</span>
                <span className='discount'>Limited time</span>
            </div>
            <div className='div2'>
            <h1>${sellingPrice(price, discount)}</h1>
                <h2>${price}</h2>
                <h3>({discount}% Off)</h3>
            </div>
                <button className='viewbtn2'>View</button>
        </div>
    );
};

export default Card;
