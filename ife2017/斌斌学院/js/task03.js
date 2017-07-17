window.onload = function(){

	init('sort-btn','source','li','b');

	/**
	 * getData方法
	 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
	 * 返回一个数组，格式见函数中示例
	 */
	function getData(id,label1,label2){
		var oId = document.getElementById(id);
		var aTxt = oId.getElementsByTagName(label1);
		var aNum = oId.getElementsByTagName(label2);
		var data = [];
		var citySum = [];
		var valueSum = [];

		for(var i=0;i<aTxt.length;i++){
			var aIntxt = aTxt[i].innerHTML; 
			var city = aIntxt.substr(0,2);
			citySum.push(city);
		}

		for(var i=0;i<aNum.length;i++){
			var aValue = aNum[i].innerHTML;
			valueSum.push(aValue);
		}

		data = (citySum.map((item, idx) => [item, valueSum[idx]]));
		return data;
	}

	/**
	 * sortAqiData
	 * 按空气质量对data进行从小到大的排序
	 * 返回一个排序后的数组
	 */
	function sortAqiData(data){
		data.sort(function(a,b){
			return b[1] - a[1];
		});
		return data;
	}

	/**
	 * render
	 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
	 * 格式见ul中的注释的部分
	 */
	 function render(data,id){
	 	var oUl = document.getElementById(id);
	 	data.forEach(function(item,index,array){
	 		var newLi = document.createElement('li');
	 		var newB = document.createElement('b');
	 		newB.innerHTML = item[1];
	 		newLi.innerHTML = '第' + '<strong>'+ [index+1] +'</strong>' + '名：&nbsp;' +  item[0] +'空气质量&nbsp;' +'<strong>'+ newB.innerHTML +'</strong>';
	 		oUl.appendChild(newLi);
	 	});
	 }


	 function btnHandle(id,label1,label2){
	 	var aqiData = getData(id,label1,label2);
	 	aqiData = sortAqiData(aqiData);
	 	render(aqiData,'resort');
	 }

	/*点击事件*/
	function init(id1,id2,label1,label2){
		var btn = document.getElementById(id1);

		btn.onclick = function(){
			btnHandle(id2,label1,label2);
		}
	}
};