# Project planning

## Overview
### Project Title
This project consist in an app that helps you pick an hotel, a date, and evaluate the cost of living there, in a given city around the world. If completed successfully, the cost of flight would be added in the PMVP.

## Wireframes
![Project Wireframes] (https://i.imgur.com/RKNQx9z.png)

## Component Hierarchy
src
|__ assets/
       |__ data
|__ components?
       |__ Header.jsx
       |__ Footer.jsx
       |__ Form.jsx
       |__ Hotel.jsx
       |__ AboutHotel.jsx
       |__ About.jsx
       
API
based on multiple endpoints located on https://travelpayouts.github.io/slate/#hotels-data-api
```json
{
    "status": "ok",
    "results": {
        "hotels": [
            {
                "location": {
                    "lon": -115.17341,
                    "lat": 36.10158
                },
                "locationId": 20703,
                "_score": 1732244.0,
                "fullName": "New York New York, Las Vegas, Nevada, United States",
                "id": "345838",
                "locationName": "Las Vegas, Nevada, United States",
                "label": "New York New York"
            },
            {
                "location": {
                    "lon": 19.07038,
                    "lat": 47.49848
                },
                "locationId": 1333,
                "_score": 948037.0,
                "fullName": "New York Palace, The Dedica Anthology, Autograph Collection, Budapest, Hungary",
                "id": "10678",
                "locationName": "Budapest, Hungary",
                "label": "New York Palace, The Dedica Anthology, Autograph Collection"
            },
            {
                "location": {
                    "lon": -73.98556,
                    "lat": 40.75838
                },
                "locationId": 20857,
                "_score": 680447.0,
                "fullName": "New York Marriott Marquis, New York City, New York, United States",
                "id": "296930",
                "locationName": "New York City, New York, United States",
                "label": "New York Marriott Marquis"
            },
            {
                "location": {
                    "lon": -73.97664,
                    "lat": 40.74931
                },
                "locationId": 20857,
                "_score": 637130.0,
                "fullName": "Pod 39, New York City, New York, United States",
                "id": "296977",
                "locationName": "New York City, New York, United States",
                "label": "Pod 39"
            },
            {
                "location": {
                    "lon": 4.48419,
                    "lat": 51.90402
                },
                "locationId": 1841,
                "_score": 581610.0,
                "fullName": "Hotel New York, Rotterdam, Netherlands",
                "id": "541306",
                "locationName": "Rotterdam, Netherlands",
                "label": "Hotel New York"
            },
            {
                "location": {
                    "lon": -73.96908,
                    "lat": 40.75591
                },
                "locationId": 20857,
                "_score": 516017.0,
                "fullName": "Pod 51, New York City, New York, United States",
                "id": "297009",
                "locationName": "New York City, New York, United States",
                "label": "Pod 51"
            },
            {
                "location": {
                    "lon": 7.26724,
                    "lat": 43.70275
                },
                "locationId": 15471,
                "_score": 487958.0,
                "fullName": "Best Western Hotel Lakmi Nice (Ex New York), Nice, France",
                "id": "311421",
                "locationName": "Nice, France",
                "label": "Best Western Hotel Lakmi Nice (Ex New York)"
            },
            {
                "location": {
                    "lon": -73.97903,
                    "lat": 40.76215
                },
                "locationId": 20857,
                "_score": 473810.0,
                "fullName": "New York Hilton Midtown, New York City, New York, United States",
                "id": "440982",
                "locationName": "New York City, New York, United States",
                "label": "New York Hilton Midtown"
            },
            {
                "location": {
                    "lon": 19.07217,
                    "lat": 47.4979
                },
                "locationId": 1333,
                "_score": 467524.0,
                "fullName": "New York Residence, Budapest, Hungary",
                "id": "22616",
                "locationName": "Budapest, Hungary",
                "label": "New York Residence"
            },
            {
                "location": {
                    "lon": -73.97428,
                    "lat": 40.75567
                },
                "locationId": 20857,
                "_score": 453672.0,
                "fullName": "InterContinental New York Barclay Hotel, New York City, New York, United States",
                "id": "296929",
                "locationName": "New York City, New York, United States",
                "label": "InterContinental New York Barclay Hotel"
            }
        ],
        "locations": [
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [
                    "NYC",
                    "FRG",
                    "JFK",
                    "LGA",
                    "ISP"
                ],
                "_score": 8231,
                "cityName": "New York City",
                "hotelsCount": "8231",
                "location": {
                    "lon": "-73.986956",
                    "lat": "40.75603"
                },
                "fullName": "New York City, New York, United States",
                "id": "20857"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [
                    "EWR",
                    "EWR"
                ],
                "_score": 226,
                "cityName": "Newark",
                "hotelsCount": "226",
                "location": {
                    "lon": "-74.172367",
                    "lat": "40.735657"
                },
                "fullName": "Newark, New Jersey, United States",
                "id": "20456"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [
                    "MSY",
                    "NEW",
                    "MSY"
                ],
                "_score": 3114,
                "cityName": "New Orleans",
                "hotelsCount": "3114",
                "location": {
                    "lon": "-90.075072",
                    "lat": "29.954648"
                },
                "fullName": "New Orleans, Louisiana, United States",
                "id": "18963"
            },
            {
                "countryName": "India",
                "countryCode": "IN",
                "iata": [],
                "_score": 252,
                "cityName": "Noida",
                "hotelsCount": "252",
                "location": {
                    "lon": "77.27787",
                    "lat": "28.53446"
                },
                "fullName": "Noida, India",
                "id": "25886"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [],
                "_score": 71,
                "cityName": "New Port Richey",
                "hotelsCount": "71",
                "location": {
                    "lon": "-82.719267",
                    "lat": "28.244177"
                },
                "fullName": "New Port Richey, Florida, United States",
                "id": "17895"
            },
            {
                "countryName": "Australia",
                "countryCode": "AU",
                "iata": [],
                "_score": 43,
                "cityName": "New Norfolk",
                "hotelsCount": "43",
                "location": {
                    "lon": "147.0587",
                    "lat": "-42.78261"
                },
                "fullName": "New Norfolk, Australia",
                "id": "5496"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [],
                "_score": 11,
                "cityName": "New Market",
                "hotelsCount": "11",
                "location": {
                    "lon": "-78.671406",
                    "lat": "38.647896"
                },
                "fullName": "New Market, Virginia, United States",
                "id": "22752"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [],
                "_score": 4,
                "cityName": "New Portland",
                "hotelsCount": "4",
                "location": {
                    "lon": "-70.09673",
                    "lat": "44.88422"
                },
                "fullName": "New Portland, Maine, United States",
                "id": "1522627"
            },
            {
                "countryName": "United States",
                "countryCode": "US",
                "iata": [],
                "_score": 1,
                "cityName": "New Morgan",
                "hotelsCount": "1",
                "location": {
                    "lon": "-75.89021",
                    "lat": "40.18093"
                },
                "fullName": "New Morgan, Pennsylvania, United States",
                "id": "1517413"
            }
        ]
    }
}

```
## MVP
- Create the page as it is on the wireframe 
- Render hotels from a city and display some information about each of them
- Link each hotel on the display to more information and more pictures
- Add units tests
- Add responsiveness
       
 ## Post-MVP
 - Add flight cost estimation
 - Add transportation estimation
      
### Component Breakdown
|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Hotel    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| About Hotel | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create header    |    H     |     1hrs      |     TBD     |    TBD    |
| Create footer |    H     |     1 hrs      |     TBD     |     TBD     |
| Create hotel |    H     |     13 hrs      |     TBD     |     TBD     |
| Create about hotel |    H     |     8 hrs      |     TBD     |     TBD     |
| Create about |    L    |     1 hrs      |     TBD     |     TBD     |
| Create form |    H     |     6 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     29 hrs      |     TBD    |     TBD     |

<br>












