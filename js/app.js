if (navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js");
    console.log("Es funcionable");
}else {
console.log ("Aqui no es funcionable")

}