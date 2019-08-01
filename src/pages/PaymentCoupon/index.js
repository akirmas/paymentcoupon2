import React, { useState, useEffect } from 'react'

import GreenCardProgram from '../../components/sections/GreenCardProgram'
import Payment from '../../components/sections/Payment'
import Footer from '../../components/sections/Footer'

const PaymentCoupon = ({ data: { chance, products, payment, footer } }) => {
  const [saveProducts, setSaveProducts] = useState(products)
  const [inputs, setInputs] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/form.json`)
      .then(response => response.json())
      .then(data => {
        setInputs(data.inputs)
        setLoaded(true)
      })
      .catch(console.error)
  }, [])

  const changeSelectedProduct = index => {
    setSaveProducts(
      saveProducts.map((elem, i) => {
        const selected = (elem.selected = i === index ? true : false)

        return { ...elem, selected }
      })
    )
  }

  return (
    <>
      <main>
        <GreenCardProgram
          {...{ saveProducts, chance, changeSelectedProduct }}
        />
        {loaded && (
          <Payment {...payment} saveProducts={saveProducts} inputs={inputs} />
        )}
        <Footer footer={footer} />
      </main>
    </>
  )
}

export default PaymentCoupon
