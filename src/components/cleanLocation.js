
 function clean(location){

  //  console.log(location);
   const result = location.replace(/\W/g, ' ')
  //  console.log(result);
    const data = result.split("  ")
    // console.log(data);
    return data

}

function handleReponse(response){
  // console.log(response);
  if(response.ok){
    return response.json();
  }else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}


export function getLatLng(lngLat) {
  // console.log("!!!!!!kjfbwejfb!!!!!!!",data);
  // const lngLat = clean(data)
  console.log(lngLat, "Is Arvada really in Germany????****************");


  const city = lngLat[0]
  const state = lngLat[1]
  const country = lngLat[2]
  // console.log(country);


    const key = "&key=AIzaSyALtzDfOHTgJgfG1Uz22M9AT_C57F69HFo"
    return dispatch =>{
      // fetch('https://nomadsapp.herokuapp.com/api/users')
      return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+lngLat+key, {
       method: 'get',
      //  mode: "no-cors"
    }).then(handleReponse).then(res => {
      console.log(res.results);
            console.log(res.results[0].geometry.location);
            return res.results[0].geometry.location
          })
    }

  }
