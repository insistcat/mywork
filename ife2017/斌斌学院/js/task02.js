window.onload = function(){
	var aqiData = [
	["北京", 90],["上海", 50],["福州", 10],["广州", 60],["成都", 90],["西安", 100]];

	  /*
	  在注释下方编写代码
	  遍历读取aqiData中各个城市的数据
	  将空气质量指数大于60的城市显示到aqi-list的列表中
	  */
	
	var oUl = document.getElementsByTagName('ul')[0];

	var list = aqiData.filter(isBigEought);

	console.log(list);

	var aList = list.sort(function(a,b){
		return b[1] - a[1];
	});

	console.log(aList);

	aList.forEach(function(item,index,array){
		var newLi = document.createElement('li');
		newLi.innerHTML = item[0] + item[1];
		console.log(newLi.innerHTML);
		oUl.appendChild(newLi);
	});

	/*
	forEach(item,index,array)
	item ---- 当前项目
	index ---- 当前项目脚标
	array ---- 进行遍历的数组
	*/

	function isBigEought(item,index,array){
		return (item[1] >= 60);
	}
};