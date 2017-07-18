window.onload = function(){

	var data = [];

	/*按钮初始化*/	
	init('left-in');
	init('right-in');
	init('left-out');
	init('right-out');

	var reBtn = document.getElementById('resort');
	reBtn.onclick = function(){
		var aList = getData('content','span');
		sort(aList);
		figure(aList,'content');
	}

	/*用图形展示数字*/
	function figure(data,id){	
		var oCon = document.getElementById(id);
		for(var i=0;i<data.length;i++){
			var hSpan = oCon.getElementsByTagName('span');
			hSpan[i].style.height = data[i] + 'px';
			hSpan[i].innerHTML = data[i];
		}
	}

	/*获取输入框数据*/
	function getTxt(id){
		var oTxt = document.getElementById(id);
		var bit = oTxt.value;
		if( bit>=10&&bit<=100){
			return bit;
		}else{
			alert('请录入10-100的数字！');
			return null;
		}
	}

	/*重新排序*/


	/*加入数据*/
	function putIn(id_data,id_btn,id_con,flag){
		var pushBtn = document.getElementById(id_btn);	
		var oCon = document.getElementById(id_con);

		pushBtn.onclick = function(){
			var newSpan = document.createElement('span');
			var data = getTxt(id_data);
			newSpan.innerHTML = data;
			if(data != null){
				if(flag == 0){
					if(oCon.children[0]){
						oCon.insertBefore(newSpan,oCon.children[0]);	
					}else{
						oCon.appendChild(newSpan);
					}		
				}else{
					oCon.appendChild(newSpan);
				}
			}else{
				return;
			}
		}
	}

	/*删除数据*/
	function del(id_btn,id_con,flag,label){
		var pushBtn = document.getElementById(id_btn);	
		var oCon = document.getElementById(id_con);

		pushBtn.onclick = function(){
			if(oCon.children[0]){
				var first = oCon.children[0].innerHTML;
				var alength = getData(id_con,label).length;
				var last = oCon.children[alength-1];
				if(flag == 1){
					oCon.removeChild(oCon.children[0]);
					alert('从左侧删除了：'+ first);	
				}else if(flag == -1){
					oCon.removeChild(last);
					alert('从右侧删除了：'+ last.innerHTML);
				}
			}else{
				alert('暂时没有数据！请先添加数据！');
			}
		}
	}

	/*获取当前数据*/
	function getData(id,label){
		var oDiv = document.getElementById(id);
		var aSpan = oDiv.getElementsByTagName(label);
		var data = [];

		for(var i=0;i<aSpan.length;i++){
			data.push(aSpan[i].innerHTML);
		}	
		return data;
	}

	/*判断按钮*/
	function init(id){
		var btn = document.getElementById(id);
		if(id == 'left-in'){
			putIn('input','left-in','content',0);
		}else if(id == 'right-in'){
			putIn('input','right-in','content',1);
		}else if(id == 'left-out'){
			del('left-out','content',1);
		}else if(id == 'right-out'){
			del('right-out','content',-1,'span');
		}
	}

	/*排序*/
	function sort(data){
		data.sort(function(a,b){
			return a - b;
		});
	}
}