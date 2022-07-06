import React, { useEffect } from 'react';


// head에 작성한 Kakao API 불러오기
const { kakao } = window as any;

const Map = () => {
  // 마커를 담는 배열
  let markers: any[] = [];

  // 검색어가 바뀔 때마다 재렌더링되도록 useEffect 사용
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

    // 지도를 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);    

//실시간 위치


    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function(position) {
      
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      
      const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      const message = '<div>동글!</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
          
    });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
  var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
      message = 'geolocation을 사용할수 없어요..'
      
  displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition:any, message:string) {

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({  
      map: map, 
      position: locPosition
  }); 
  
  var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });
  
  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(map, marker);
  
  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition); 
  
  const circle = new kakao.maps.Circle({
    center : locPosition,  // 원의 중심좌표 입니다 
    radius: 50, // 미터 단위의 원의 반지름입니다 
    strokeWeight: 5, // 선의 두께입니다 
    strokeColor: '#5F0080', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'dashed', // 선의 스타일 입니다
    fillColor: '#FFB800', // 채우기 색깔입니다
    fillOpacity: 0.5  // 채우기 불투명도 입니다   
  }); 
  
  circle.setMap(map); 
}    

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position: any, idx: number, title: undefined) {
      var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지
          imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
          imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          },
          markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
          marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
          });

      marker.setMap(map); // 지도 위에 마커를 표출
      markers.push(marker);  // 배열에 생성된 마커를 추가

      return marker;
    }

  }, [])

  return (
    <div className="map-container">
      <div id="map" className="map" style={{width: "100%", height: "400px"}}></div>
    </div>
  )
}

export default Map