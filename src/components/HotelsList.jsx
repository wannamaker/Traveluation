import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../css/HotelsList.css';
import HotelsMap from './HotelsMap';



export default class HotelsList extends Component {
  //  console.log(props.city)
  state = {
     limit: 5
  }
  
  increase = () => {
    this.setState(prevState => ({
      limit: prevState.limit + 5
    }))
  }
  
  
  render() {
    if (this.props.hotelArrayInfo.length > 0) {
      return (
    
        <div>
        
          {this.props.hotelArrayInfo.slice(0, this.state.limit).map(hotel =>

            <Link to={`/${hotel.hotel_id}`} className="lnk">
              <div className="info-container">

                <div className="hotel-picture">
                  <img src={`https://photo.hotellook.com/image_v2/limit/h${hotel.hotel_id}_1/175.jpg`} className="hotel-image-front" />
                </div>
                
                <div className="hotel-info">
                  <div>
                    <h3>{hotel.name}</h3>
                    <p className="small-text">{hotel.stars} stars</p>
                  </div>
                  <div className="detail-container">
                    <div className="price-display">
                      <br />
                      <br />
                      <br />
                      <p className="p-price" className="small-text">Total for {hotel.last_price_info.nights} nights:</p>
                      <p>{hotel.last_price_info.price}</p>
                      <br />
                      <p className="small-text">Price per night:</p>
                      <p className="small-text">{hotel.last_price_info.price_pn}</p>
                    </div>
                    <div className="detail-info">
                      <br />
                      <br />
                      <p className="summary-text">{hotel.ty_summary}</p>
                      <span className="wifi">
                        <p className="small-text">wifi: {hotel.has_wifi ? "yes" : "no"}</p>
                        </span>
                    </div>
                    <div className="location">
                      <br />
                      <br />
                      <br />
                      {hotel.hotel_type.map(type => <p className="small-text">{type}</p>)}
                    </div>
                  </div>
                </div>


                <div className="map">
                  <HotelsMap hotelName={hotel.name} city={this.props.city} />
                </div>

              </div>
            </Link>
          )}
          {this.props.hotelArrayInfo.length > 0 && <button onClick={this.increase} className="more-button">More</button>}
        
        </div>
      )
    }
    else if (this.props.formSubmitted) {
      return (
        <div className="loading">
          <img src="https://media.giphy.com/media/3ov9k0BZQL358k458s/giphy.gif"/>
          </div>
      )
    } else
      return ''
  }


}

