
function getData()
{
   let city=document.getElementById("city").value
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfcff6fb062c996cb03dd6346635a8cf`;
   fetch(url)
.then(function(res){
  return res.json()
}) 
.then(function(res){
   append(res);

})
.catch(function(err){
    console.log("err",err);
})
}
function getDataLocation(lat, lon) {
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bfcff6fb062c996cb03dd6346635a8cf`;
 
   fetch(url)
     .then(function (res) {
       return res.json();
     })
     .then(function (res) {
       append(res);
       console.log(res);
     })
     .catch(function (err) {
       console.log(err);
     });
 }
function append(data)
{
    console.log(data);

    let container=document.getElementById("container");
    let map=document.getElementById("gmap_canvas");
    container.innerHTML=null;
    let city=document.createElement("p");
    city.innerText=`city:${data.name}`;
    let min=document.createElement("p");
    min.innerText=`Min Temp:${data.main.temp_min}`;
    let max=document.createElement("p");
    max.innerText=`Max Temp${data.main.temp_max}`;
    let current=document.createElement("p");
    current.innerText=` current Temp:${data.main.temp}`;
    let humidity=document.createElement("p");
   humidity.innerText=`Humidity:${data.main.humidity}`;
   let sunrise=document.createElement("p");
   sunrise.innerText=`Sunrise:${data.sys.sunrise}`
   let sunset=document.createElement("p");
   sunset.innerText=`sunset:${data.sys.sunset}`
   let wind=document.createElement("p");
   wind.innerText=`wind_speed:${data.wind.speed}`
   
   container.append(city,min,max,current,humidity,sunrise,sunset,wind);
   document.querySelector("#maindiv").append(container)
   map.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}
function getweather(){
navigator.geolocation.getCurrentPosition(success);

function success(pos)
{
    var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  getDataLocation(crd.latitude, crd.longitude);
}
}