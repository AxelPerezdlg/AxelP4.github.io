if(navigator.serviceWorker){
    let URLactual = window.location;
    if(URLactual.toString().includes('localhost:8080')){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('/AxelP4.github.io/sw.js');
    }
}
