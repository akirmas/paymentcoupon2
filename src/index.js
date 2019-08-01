import React from 'react'
import { render } from 'react-dom'

import PaymentCoupon from './pages/PaymentCoupon'

fetch(`${process.env.PUBLIC_URL}/index.json`)
  .then(response => response.json())
  .then(data =>
    render(<PaymentCoupon data={data} />, document.getElementById('root'))
  )
  .catch(console.error)
