import React from 'react'


export default function HotelsList(props) {
  return (
    <div>
      {props.hotelArray.map(hotel =>
      <div className="info-container">
        
          <div className="hotel-picture">
            <img src={`https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_1/160.jpg`}/>
          </div>
        
          <div className="hotel-info">
            <h3>{hotel.hotelName}</h3>
          </div>
      </div>
      )}
    </div>
  )
}
