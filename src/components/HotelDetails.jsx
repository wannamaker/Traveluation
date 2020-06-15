import React from 'react';
import { withRouter } from 'react-router-dom';
import HotelsMap from './HotelsMap';
import '../css/HotelDetails.css';

function HotelDetails(props) {
  let thisHotelId = props.match.params.hotel
  let thisHotel = props.hotelArrayInfo.find(ele => ele.hotel_id == thisHotelId)
  return (
    <>
      {thisHotel &&
        
     

      <div className="container-details">
        <div className="left">
          <div><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_1/761.jpg`} /></div>
                 <div className="thumbnail-container">
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_1/231.jpg`} /></div>
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_2/231.jpg`} /></div>
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_3/231.jpg`} /></div>
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_4/231.jpg`} /></div>
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_5/231.jpg`} /></div>
                   <div className="thumbnail"><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_6/231.jpg`} /></div>
          </div>
        </div>
        
        <div className="right">
                   <div className="text-details">
                       <h4>{thisHotel.name}</h4>
                    <p className="small-text">{thisHotel.stars} stars</p>
                    
                    <p className="summary-text">{thisHotel.ty_summary}</p>
                     
                    <div className="location">
                      <br />
                      <br />
                      <br />
                      {thisHotel.hotel_type.map(type => <p className="small-text">{type}</p>)}
                    </div>
             
                    <div className="price-display">
                      <br />
                      <br />
                      <br />
                      <p className="p-price" className="small-text">Total for {thisHotel.last_price_info.nights} nights:</p>
                      <p>{thisHotel.last_price_info.price}</p>
                      <br />
                      <p className="small-text">Price per night:</p>
                      <p className="small-text">{thisHotel.last_price_info.price_pn}</p>
                      <br />
                      <br />
                      <p className="small-text">wifi: {thisHotel.has_wifi ? "yes" : "no"}</p>
                    </div>
                   
                    <div className="map-det">
              <HotelsMap hotelName={thisHotel.name} city={props.city} /> 
              </div>
                    
                  </div>
             <div className="map-details" className=".map-det">
             {/* <HotelsMap hotelName={thisHotel.name} city={props.city} /> */}
          </div>
          
        </div>
      </div>
    }
    </>
  )
}

export default withRouter(HotelDetails)
