window.onload = function(){

	/*按钮初始化*/	
	init('left-in');
	init('right-in');
	init('left-out');
	init('right-out');

	/*获取输入框数据*/
	function getData(id){
		var oTxt = document.getElementById(id);
		var bit = oTxt.value;
		if(bit == ''){
			return;
		}else{
			return bit;
		}
	}

	/*加入数据*/
	function push(id_data,id_btn,id_con,flag){
		var pushBtn = document.getElementById(id_btn);	
		var oCon = document.getElementById(id_con);

		pushBtn.onclick = function(){
			var newSpan = document.createElement('span');
			var data = getData(id_data);
			newSpan.innerHTML = data;
			if(flag == 0){
				if(oCon.children[0]){
					oCon.insertBefore(newSpan,oCon.children[0]);	
				}else{
					oCon.appendChild(newSpan);
				}		
			}else{
				oCon.appendChild(newSpan);
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
				var aList = oCon.getElementsByTagName(label);
				var last = oCon.children[aList.length-1];
				if(flag == 0){
					oCon.removeChild(oCon.children[0]);
					alert('从左侧删除了：'+ first);	
				}else{
					oCon.removeChild(last);
				alert('从右侧删除了：'+ last.innerHTML);
				}
			}else{
				alert('暂时没有数据！请先添加数据！');
			}
		}
	}

	/*判断按钮*/
	function init(id){
		var btn = document.getElementById(id);
		if(id == 'left-in'){
			push('input','left-in','content',0);
		}else if(id == 'right-in'){
			push('input','right-in','content',1);
		}else if(id == 'left-out'){
			del('left-out','content',0);
		}else if(id == 'right-out'){
			del('right-out','content',1,'span');
		}
	}
}