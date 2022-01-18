function noParesDeContarImparesHasta(numero){
	imparCount = 0;
	for(i=0; i<=numero; i++){
		switch(i) {
			case 0:
				imparCount = i;
				break
			case 1:
				imparCount = i;
				break
			default:
				(i%2==1) ? imparCount++ : '';
		}	
	}
	return imparCount
}

console.log(noParesDeContarImparesHasta(5))