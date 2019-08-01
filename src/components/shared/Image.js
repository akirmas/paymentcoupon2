import React from 'react'

const Image = ({ src, alt = '', ...restProps }) => (
  <img src={process.env.PUBLIC_URL + '/' + src} alt={alt} {...restProps} />
)

export default Image
