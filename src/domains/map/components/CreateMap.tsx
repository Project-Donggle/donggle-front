import React,{useEffect, useRef,useState } from 'react';
import type {Coord} from '../types/Coord';

const { kakao } = window as any;

interface MapProps{
  center: Coord;
  level: number;
}

const defaultProps: MapProps={
  center: [37.5665, 126.978],
  level: 3
}

const KakaoMap:React.FC<MapProps> = (props) => {
  const center=[...props.center];
  const level=props.level;

  const [ map, setMap ] = useState<kakao.maps.Map>();
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const mapOption = {
      center: new kakao.maps.LatLng(center[0], center[1]), 
      level: level 
    };

    console.log(center[0],center[1]);
    const newMap = new kakao.maps.Map(mapRef.current, mapOption)
    setMap(newMap);
      
  }, [setMap]);

  useEffect(() => {
    if (map) {
      map.setCenter(new kakao.maps.LatLng(center[0],center[1]));
    }
  }, [map, center]);
  
  useEffect(() => {
    if (map) {
      map.setLevel(level);
    }
  }, [map, level]);

  return (
    <div ref={mapRef} style={{width: "100%", height: "400px", flex: 1 }}/>
  )
}

KakaoMap.defaultProps=defaultProps;
export default KakaoMap;