import React from 'react'
import { useEffect, useState } from 'react'
declare global {
  interface Window {
    kakao: any;
  }
}
//현재 위,경도 담을 타입
type LocPosition ={
    La: number,
    Ma: number ;
}
 

function pageMap() {
    //현재위치스테이트
    const [currentPosition, setCurrentPosition] = useState<LocPosition>({
        La: 0,
        Ma: 0
    });
    
useEffect(() => {
     //받은 위치와 메세지로 지도와 마커(메세지포함)띄움       
function displayMarker(locPosition: LocPosition, message: string) {
  
const container = document.getElementById('map')
const options : object = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
    }

let map = new window.kakao.maps.Map(container, options); 
    

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
map.setCenter(locPosition);   
        }    
        
    
//현재위치 api사용가능하면    
    if (navigator.geolocation) { 
    
    const options = {
    enableHighAccuracy: true,//배터리를 많이소모하더라도 정확한 위치를 알기위해서
    timeout: 5000,  
    maximumAge: 0
        };

    function error() {
    console.log("error");
            };
        
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)
    const { latitude, longitude } = position.coords;
    const lat = latitude; // 위도
    const lon = longitude; // 경도
    //왜 안담아지는걸까?    
    setCurrentPosition({
        ...currentPosition,
        La: lat,
        Ma: lon
    })
    console.log(currentPosition)

    let locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        message = '<div style="padding:5px;">현재내위치</div>'; // 인포윈도우에 표시될 내용입니다
        
    // 위치정보와 성공메세지를 디스플레이하는 함수에 떨굼
    displayMarker(locPosition, message);
        
  },error,options);
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
    message = '위치정보추적불가';
    
displayMarker(locPosition, message);
}
  }, [])
  
  return (
    <div id="map" style={{width: '1100px', height: '1000px'}} />
    )

}

export default pageMap