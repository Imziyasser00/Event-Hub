import React from 'react'

const eventCard = ({imageSource, title, date, time, location}) => {
  return (
    <div>
      <img src={imageSource} alt='event image'/>
      <h2>{title}</h2>
      <div>
        {date} {time}
      </div>
      <div>
        {location}
      </div>
    </div>
  )
}

export default eventCard
