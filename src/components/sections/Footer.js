import React from 'react'

import Image from '../shared/Image'

const Footer = ({
  footer: { caution, images, reachus, terms, policy, description },
}) => {
  // const Image = ({ src, alt= '', ...restProps }) => (
  //   <img src={process.env.PUBLIC_URL+ "/" + src} alt={alt} {...restProps} />
  // );
  return (
    <footer className="footer">
      <p className="footer__caution">Caution: {caution}</p>
      <div className="footer__icon-gallery">
        {images.map(({ alt, src }) => (
          <Image key={src} {...{ src, alt }} className="footer__img" />
        ))}
      </div>
      <p className="footer__reachus">{reachus}</p>
      <div className="footer__policy">
        <a href={terms}>Terms and conditions</a> |{' '}
        <a href={policy}>Privacy Policy</a>
      </div>
      <p className="footer__description">{description}</p>
    </footer>
  )
}

export default Footer
