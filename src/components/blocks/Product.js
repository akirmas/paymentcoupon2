import React from 'react'

const Product = ({
  title,
  price,
  titletip,
  programinclude,
  selected,
  index,
  changeSelectedProduct,
}) => {
  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <h4 className="product__tip">{titletip}</h4>
      <h3 className="product__price">{price}</h3>
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
    </div>
  )
}

export default Product
