import React from 'react'
import { withRouter } from 'react-router-dom'

function HotelDetails(props) {
  let thisHotelId = props.match.params.hotel
  let thisHotel = props.hotelArray.find(ele => ele.hotelId == thisHotelId)
  return (
    <>
      {thisHotel &&
      <div>
        <div><img src={`https://photo.hotellook.com/image_v2/limit/h${thisHotel.hotelId}_1/160.jpg`} /></div>
        <div><h4>{thisHotel.hotelName}</h4></div>
      </div>
    }
    </>
  )
}

export default withRouter(HotelDetails)
