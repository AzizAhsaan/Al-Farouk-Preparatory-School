import React from 'react'
import MapIcon from "/MapIcon.svg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import osm from "./osm-providers"
const Map = () => {
  // Define latitude and longitude
  const position = [33.31130519941562, 44.31992397889183];

  return (
    <section id='Map' className='container flex flex-col items-center my-8 px-2 lg:px-1'>
        <div className='flex flex-row items-center lg:gap-4 gap-1 my-4'>
            <h1 className='lg:text-2xl text-base text-center font-medium '>موقع المدرسة : حي الجامعة - شارع المركز</h1>
            <img className='w-8 h-8' src={MapIcon} alt="" />
        </div>
        <MapContainer className='lg:w-[50%] w-full' center={position} zoom={13} scrollWheelZoom={true} style={{ height: "400px", borderRadius:"20px" }}>
          <TileLayer
            attribution={osm.maptiler.attribution}
            url={osm.maptiler.url}
          />
          {/* Add Marker with Popup */}
          <Marker position={position}>
            <Popup>
              مدرسة: حي الجامعة - شارع المركز
            </Popup>
          </Marker>
        </MapContainer>
    </section>
  )
}

export default Map
