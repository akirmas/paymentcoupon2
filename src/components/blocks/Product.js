import React from 'react'
import Image from '../shared/Image'

const Product = ({
  title,
  price,
  titletip,
  programinclude,
  selected,
  index,
  changeSelectedProduct,
  discount,
  img,
}) => {
  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <h4 className="product__tip">{titletip}</h4>
      {discount && (
        <h3 className="product__price">{(+price / 100) * (100 - +discount)}</h3>
      )}
      <h3
        className={`product__price ${
          discount ? 'product__price--crossed' : ''
        }`}
      >
        {price}
      </h3>
      <ul className="product__description">
        {programinclude.map(include => (
          <li key={include} className="product__include">
            {include}
          </li>
        ))}
      </ul>
      <button
        className={`product__btn  ${selected ? 'product__btn--selected' : ''}`}
        onClick={() => changeSelectedProduct(index)}
      >
        {selected ? 'Selected' : 'Buy Now'}
      </button>
      {discount && (
        <div className="product__discount-banner">
          <Image
            className="product__discount-img"
            src={img.src}
            alt={img.alt}
          />
          <div className="product__discount-off">
            <span className="product__discount-num">{discount}%</span>
            <span>OFF</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
