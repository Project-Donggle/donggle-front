import React,{useEffect, useMemo } from 'react';
import {Coord} from '../types/Coord';

const { kakao } = window as any;

interface MarkerProps{
  map: kakao.maps.Map;
  position: Coord
  image: any,
}

const Marker:React.FC<MarkerProps> = (props) => {
    const marker = useMemo(
        () =>
          new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.5665, 126.978),
          }),
        []
    );
    
    useEffect(() => {
        if (props.map) {
          const markerPosition = new kakao.maps.LatLng(props.position[0], props.position[1]);
    
          marker.setCenter(markerPosition);
          marker.setMap(props.map);
        }
    
        return () => {
          marker.setMap(null);
        };
      }, [props.map, props.position, marker]);

  return null;
}

export default Marker;