function check()
{
	var x=document.getElementById("num").value;
	 	for (var i = 0; i <=x; i++) {
	 		if(i%3==0){
				document.write("BA <br>");
			}
			if(i%5==0){
				document.write("NAM <br>");
			}
	 	  	if (i%15==0) {
			  	 document.write("MUOI LAM <br>");
			}
		}
}