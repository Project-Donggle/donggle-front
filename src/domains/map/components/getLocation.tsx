import type {Coord} from '../types/Coord';

export const getCurrentLocation = (callback: (coord: Coord) => void) => {
  const options = {
    timeout: 1000,
    maximumAge: 0,
  }

  const successCallback: PositionCallback = (position) => {
    const { latitude, longitude } = position.coords
    callback([latitude, longitude])
  }

  const failCallback: PositionErrorCallback = (error) => {
    console.warn(`Eror ${error.code}: ${error.message}`)
    callback([37.5665, 126.978])
  }

  if (navigator) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      failCallback,
      options
    )
  }
}