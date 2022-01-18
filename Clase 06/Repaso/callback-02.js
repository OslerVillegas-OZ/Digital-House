function agregarHttp(url) {
	return 'http://' + url
	}
	
function procesar(arr,callback){
	let arrUrl = [];
	for(i=0; i<arr.length; i++){
			arrUrl.push(callback(arr[i]));
	}
	return arrUrl;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))