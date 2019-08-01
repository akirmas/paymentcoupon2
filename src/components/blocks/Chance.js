import React from 'react'

import Image from '../shared/Image'
import useTimer from '../../hooks/useTimer'

const Chance = ({ chance: { title, message, img } }) => {
  const { seconds, minutes } = useTimer(10)

  return (
    <div className="program__chance">
      <div className="program__chance-box">
        <h3 className="program__chance-title">{title}</h3>
        <p className="program__chance-message">{message}</p>
      </div>
      <div className="program__chance-img-container">
        <Image {...img} className="program__chance-img" />
      </div>
      <div className="program__chance-box">
        <div className="program__win">
          <div className="program__win-cell">
            <span className="program__win-unit">HOURS</span>
            <span>00</span>
          </div>
          <div className="program__win-cell program__win-cell--divider">
            <span>:</span>
          </div>
          <div className="program__win-cell">
            <span className="program__win-unit">MINUTES</span>
            <span>{minutes}</span>
          </div>
          <div className="program__win-cell program__win-cell--divider">
            <span>:</span>
          </div>
          <div className="program__win-cell">
            <span className="program__win-unit">SECONDS</span>
            <span>{seconds}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chance
