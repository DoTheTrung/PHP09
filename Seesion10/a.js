function changeColor()
{
	var str=document.getElementById("text").innerHTML;
	var str1=str.toLowerCase();
	console.log(str1);
	console.log(str1.length);
	var str2=document.getElementById("input").value;
	console.log(str2);
	var str2T=str2.toLowerCase();
	var nstr="";
		var i=0;
		var d=0;
		while (i<str1.length) {
			var pos1=str1.indexOf(str2T,i);
			if (pos1 >0){
				console.log(pos1);
				nstr=nstr+str.slice(d,pos1);
				var pos2=pos1+str2.length;
				var str3=str.slice(pos1,pos2);
				nstr=nstr+ "<b style='color:yellow;'>"+str3+"</b>";
				i=pos2;
				d=pos2;
			}
			i++;
		}
		nstr=nstr+str1.slice(pos2,str1.length);
		document.getElementById("text").innerHTML=nstr;
		
}