window.onload = function(){

	var data = [];

	/*按钮初始化*/	
	init('left-in');
	init('right-in');
	init('left-out');
	init('right-out');
	init('search');

	/*获取输入框数组*/
	function getTxt(id){
		var oTxt = document.getElementById(id);
		var bit = oTxt.value;
		var bitList= [];
		var newBit = [];
		bit = bit + '/'; 
		for(var i=0;i<bit.length;i++){
			if( (/^[\u4e00-\u9fa5a-zA-Z0-9]+$/).test(bit[i]) ){
				var num = 0;
				newBit += bit[i];
			}else{
				if(num == 0){
					bitList.push(newBit);
					newBit = [];					
				}
				num = 1;
			}
		}
		return bitList;
	}

	/*搜索匹配*/
	function sear(id,keyWord){
		var search = document.getElementById(id);
		var keyWord = document.getElementById(keyWord);
				
		keyWord.onmouseover = function(){
			if(keyWord.value == '请输入搜索内容'){
				keyWord.value = '';
			}
		}

		keyWord.onmouseout = function(){
			if(keyWord.value == ''){
				keyWord.value = '请输入搜索内容';
			}
		}
		

		search.onclick = function(){
			var conList = getData('content','span');
			var txt = keyWord.value;
			var reg = new RegExp(eval('/'+ txt + '/'));
			var sList = document.getElementsByTagName('span');
			var num = 0
			for(var i=0;i<conList.length;i++){
				if(reg.test(conList[i])){		
					num = 1;		
					sList[i].style.background = 'blue';
				}else{
					if((i==conList.length-1)&&(num==0)){
						alert('检索不到该字符！');
					}
				}
			}
		}

	}

	/*加入数据*/
	function putIn(id_data,id_btn,id_con,flag){
		var pushBtn = document.getElementById(id_btn);	
		var oCon = document.getElementById(id_con);

		pushBtn.onclick = function(){
			var data = getTxt(id_data);			
			for(var i=0;i<data.length;i++){
				var newSpan = document.createElement('span');
				if(data != null){
					if(flag == 0){
						if(oCon.children[0]){
							newSpan.innerHTML = data[data.length-1-i];
							oCon.insertBefore(newSpan,oCon.children[0]);
						}else{
							newSpan.innerHTML = data[data.length-1-i];
							oCon.appendChild(newSpan);
						}		
					}else{	
						newSpan.innerHTML = data[i];		
						oCon.appendChild(newSpan);	
					}
				}else{
					return;
				}				
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
		}else if(id == 'search'){
			sear('search','key-word');
		}
	}

	/*排序*/
	function sort(data){
		data.sort(function(a,b){
			return a - b;
		});
	}
}