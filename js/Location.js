let watchId = "";
let total = "";

let options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge:0
};

function getLocation(){

}


watchId=navigator.geolocation.getCurrentPosition(getLocation,failedLocation,option);

