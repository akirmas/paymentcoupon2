import React, {useState, useEffect} from 'react';
import Form from "../../react-components/elements/Form";

const Payment = ({title, titletip, titleinfo, info, saveProducts, inputs}) => {
  const getSelected = ({selected}) => selected
  const [saveData, setSaveData] = useState({...inputs, product: {...inputs.product, value: saveProducts.find(getSelected).title}});

  useEffect(() => 
    setSaveData({...inputs, product: {...inputs.product, value: saveProducts.find(getSelected).title}}), [saveProducts])
  
  return (
  <div className="payment">
    <div className="payment__title-container">
      <h2 className="payment__title">{`You Have Selected the ${saveProducts.find(getSelected).title} program`}</h2>
      <h3 className="payment__title payment__title--tip">
        For a Total Amount of  {' '}
        <span className="payment__title payment__title--tip currency">
         {saveProducts.find(getSelected).price}
        </span>
      </h3>      
    </div>
    <div>
    <div className="payment__form">
      <div className="payment__form-container">
        <form>
          <Form inputs={saveData}/>
        </form>
      </div>
      <div className="payment__form-footer">
        <h2 className="payment__titleinfo">{titleinfo}</h2>
        <h3 className="payment__info-text">{info}</h3>
      </div>
    </div>
    </div>
  </div>)
}

export default Payment