import React from 'react'
import { useEffect, useState } from 'react'
declare global {
  interface Window {
    kakao: any;
  }
}
interface LocPosition{
    La: number;
    Ma: number;
 }
function pageMap() {

    const [center, setCenter] = useState({})
    const [map,setMap] =useState({})
  

    useEffect(() => {
        
        
        
        function displayMarker(locPosition: LocPosition, message: string) {
            setCenter(new window.kakao.maps.LatLng(33.450701, 126.570667))
            console.log(center)
            const container = document.getElementById('map')
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            }
            console.log(typeof new window.kakao.maps.LatLng(33.450701, 126.570667))
            console.log(new window.kakao.maps.LatLng(33.450701, 126.570667))
            setMap(new window.kakao.maps.Map(container, options))
           
            let map = new window.kakao.maps.Map(container, options); // 지도를 생성합니다
       
          // 마커를 생성합니다
          let marker = new window.kakao.maps.Marker({  
              map: map, 
              position: locPosition
          }); 
          
         
    
    let iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    let infowindow = new window.kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
   
        }    
        


      if (navigator.geolocation) { 
           navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
      } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}
  }, [])
  
  return (
    <div id="map" style={{width: '1100px', height: '1000px'}} />
    )

}

export default pageMap