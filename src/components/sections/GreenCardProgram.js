import React from 'react'
import Product from '../blocks/Product'
import Chance from '../blocks/Chance'

const GreenCardProgram = ({ chance, saveProducts, changeSelectedProduct }) => {
  return (
    <div className="program">
      <div className="program__header">
        <h2 className="program__title-header">
          The Official Green Card Program
        </h2>
        <h3 className="program__title-header program__title-header--italic">
          Come Live and Work In the US
        </h3>
      </div>
      <div className="program__container">
        <Chance {...{ chance }} />
        <div className="program__products">
          {saveProducts &&
            saveProducts.map((props, i) => (
              <Product
                key={props.title}
                {...props}
                index={i}
                changeSelectedProduct={changeSelectedProduct}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default GreenCardProgram
