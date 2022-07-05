import React from 'react'
import { useEffect, useState } from 'react'
declare global {
  interface Window {
    kakao: any;
  }
}
function pageMap() {
   const [map, setMap] = useState({})

  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }

    setMap(new window.kakao.maps.Map(container, options))
  }, [])
  
  return (
    <div id="map" style={{width: '500px', height: '400px'}} />
    )

}

export default pageMap