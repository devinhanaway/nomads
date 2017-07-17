
 function clean(location){

console.log(location);
   const result = location.replace(/\W/g, ' ')

    const data = result.split("  ")
    console.log(data);

   return data

}


export function getLatLng(data) {
  return dispatch => {
  const lngLat = clean()
  console.log(lngLat);
  const city = lngLat[0]
  const state = lngLat[1]


    const key = "&key=AIzaSyALtzDfOHTgJgfG1Uz22M9AT_C57F69HFo"
    // fetch('https://nomadsapp.herokuapp.com/api/users')
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+city+'+'+state+'+'+key)
      .then(res => res.json())

  }
}
