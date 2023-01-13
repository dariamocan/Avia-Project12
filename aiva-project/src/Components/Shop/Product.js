import React from 'react'
import img from '../../images/bec.png'
export default function Product(props) {
  
  return (
   //"fa-solid fa-star-half-stroke"
    
    <section className='shop--product'>
        <img src = {props.img}/>
        <h2 className='product-name'>{props.name}</h2>
        {/* <div className='rating'>
          <div className='stars'>
            <i className={Math.round(props.rating) >= 1 ? 'fa-solid fa-star' : props.rating > 0 ? "fa-solid fa-star-half-stroke" : 'fa-regular fa-star'}></i>
            <i className={Math.round(props.rating) >= 2 ? 'fa-solid fa-star' : props.rating > 1 ? "fa-solid fa-star-half-stroke" : 'fa-regular fa-star'}></i>
            <i className={Math.round(props.rating) >= 3 ? 'fa-solid fa-star' : props.rating > 2 ? "fa-solid fa-star-half-stroke" : 'fa-regular fa-star'}></i>
            <i className={Math.round(props.rating) >= 4 ? 'fa-solid fa-star' : props.rating > 3 ? "fa-solid fa-star-half-stroke" : 'fa-regular fa-star'}></i>
            <i className={Math.round(props.rating) >= 5 ? 'fa-solid fa-star' : props.rating > 4 ? "fa-solid fa-star-half-stroke" : 'fa-regular fa-star'}></i>
          </div>
          <p className='rating-text'>{props.rating}<span>({props.reviewNumber})</span></p>
        </div> */}
        <div className='bottom-part'>
          <h3>{props.price} $</h3>
          <h5 className='status'>{props.status ? 'In stock' : 'Sold out'}</h5>
        </div>
        <a href={props.link} target = '_blank'><button>See on website</button></a>
    </section>
  )
}
