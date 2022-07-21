import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { Map, MapMarker,Circle, MarkerClusterer } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
interface currentPosition { 
    center: {
        lat: number,
        lng: number,
    }
    errMsg: string | null,
    isLoading: boolean,
}

function PageMap2() {
    const [state, setState] = useState<currentPosition>({
        center: {
            lat: 33.450701, //지도의
            lng: 126.570667,//중심좌표 ^오^
        },
        errMsg: null,
        isLoading: false,
    });
    const mapRef = useRef(
        null
    );
    
    useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])
  return (
      <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "1100px",
          height: "450px",
        }}
        level={6} // 지도의 확대 레벨
        ref={mapRef}   
      >
              {!state.isLoading && (
                  <MapMarker position={state.center}  draggable={true} onDragEnd={(marker) => { 
                      console.log(marker.getPosition())
                      let lat = marker.getPosition().getLat()
                      let lng = marker.getPosition().getLng()
                      setState((prev) => ({
                          ...prev,
                          center: {
                              lat: lat,
                              lng: lng,
                          },
                        }))
                  } }>
            <div style={{ padding: "5px", color: "#000" }}>
            {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
            </div>
            <Circle
            center={state.center}
            radius={1000}//meter단위 반경 게시글가져오는범위 프롭스로받아서 범위표시
            strokeWeight={3} // 선의 두께입니다
            strokeColor={"#5f0080"} // 선의 색깔입니다
            strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={"solid"} // 선의 스타일 입니다
            fillColor={"#c9abd3"} // 채우기 색깔입니다
            fillOpacity={0.5} // 채우기 불투명도 입니다
            />
            </MapMarker>
        )}
          </Map>
    </>
  )
}


export default PageMap2