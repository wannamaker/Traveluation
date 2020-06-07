import React from 'react'
import { withRouter } from 'react-router-dom'

function HotelDetails(props) {
  let thisHotelId = props.match.params.hotel
  let thisHotel = props.hotelArrayInfo.find(ele => ele.hotel_id == thisHotelId)
  return (
    <>
      {thisHotel &&
      <div>
        <div><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotel_id}_1/160.jpg`} /></div>
        <div><h4>{thisHotel.name}</h4></div>
      </div>
    }
    </>
  )
}

export default withRouter(HotelDetails)
