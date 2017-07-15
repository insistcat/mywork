window.onload = function(){
	/*获取操作对象*/
	var oTxt = document.getElementById('aqi-input');
	var oBtn = document.getElementById('button');
	var oShow = document.getElementById('aqi-display');

	console.log(oTxt);
	console.log(oTxt.value);
	console.log(oShow.innerHTML);

	/*替换显示内容*/
	oBtn.onclick = function(){
		if(oTxt.value == ''){
			console.log(oTxt.value);	
			return;
		}else{
			oShow.innerHTML ='';
			console.log(oTxt.value);
			console.log(oShow.innerHTML);
			oShow.innerHTML = oTxt.value;
		}
	};
};