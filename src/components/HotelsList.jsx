import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HotelsList.css';

export default function HotelsList(props) {
  return (
    <div>
      {props.hotelArrayInfo.map(hotel =>

        <Link to={`/${hotel.hotel_id}`}>
          <div className="info-container">

            <div className="hotel-picture">
              <img src={`https://photo.hotellook.com/image_v2/limit/h${hotel.hotel_id}_1/160.jpg`} />
            </div>

            <div className="hotel-info">
              <div>
                <h3>{hotel.name}</h3>
                <p>{hotel.stars} stars</p>
              </div>
              <div className="detail-container">
                <div className="price-display">
                  <br />
                  <p className="p-price">Total for {hotel.last_price_info.nights} nights:</p>
                  <p>{hotel.last_price_info.price}</p>
                  <br />
                  <p>Price per night:</p> 
                  <p>{hotel.last_price_info.price_pn}</p>
                </div>
                <div className="detail-info">
                  <p>{hotel.ty_summary}</p>
                  <br />
                  <p>wifi: {hotel.has_wifi ? "yes" : "no"}</p>
                </div>
                <div className="location">
                  <br />
                  {hotel.hotel_type.map(type => <p>{type}</p>)}
                </div>
              </div>
            </div>


            <div className="map">

            </div>

          </div>
        </Link>
      )}
    </div>
  )
}
