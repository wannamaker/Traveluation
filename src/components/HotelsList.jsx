import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HotelsList.css';

export default function HotelsList(props) {
  return (
    <div>
      {props.hotelArray.map(hotel =>
        <Link to={`/${hotel.hotelId}`}>
            <div className="info-container">
        
                 <div className="hotel-picture">
                       <img src={`https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_1/160.jpg`}/>
                </div>
        
            <div className="hotel-info">
                              <div>
                               <h3>{hotel.hotelName}</h3>
                               <p>{hotel.stars} stars</p>
                              </div>
                               <div className="detail-container">
                <div className="price-display">
                <br />
                  <p className="p-price">Total for N days:</p> <br />
                  <p></p>
                  <br />
                  <p>Price per night:</p> <br />
                  <p></p>
                </div>
                                     <div className="detail-info"></div>
                <div className="location">
                  <br />
                  <p>Country: {hotel.location.country}</p>
                  <br />
                  <p>State: {hotel.location.state}</p>
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
