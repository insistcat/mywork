window.onload = function(){
	var str = ['必填，长度为4-16个字符','姓名不能为空','名称格式正确'];
	var oFa = document.getElementById('input');
	var aInput = oFa.getElementsByTagName('input')[0];
	var aTips = oFa.getElementsByTagName('p')[0];
	var oBtn = document.getElementById('varify');

	/*核对输入框内容*/
	function input(){
		var txt = aInput.value;
		var arr = [];
		/*处理输入数据*/
		if((/^[\u4e00-\u9fa5a-zA-Z0-9]+$/).test(txt)){
			arr = txt.split('');
			var num =0;
			for(var i=0;i<arr.length;i++){				
				if((/^[\u4e00-\u9fa5a]+$/).test(arr[i])){
					num = num + 2;
				}else if(/^[a-zA-Z0-9]+$/){
					num = num + 1;
				}
			}

			if(num<4 || num>16){
				aInput.className = '';
				aTips.innerHTML = str[0];
				aTips.style.color = 'rgb(170, 170, 170)';
			}else{
				aInput.className = 'certain';
				aTips.innerHTML = str[2];
				aTips.style.color = 'rgb(103, 189, 75)';			
			}

		}else if(txt == ''){
			aInput.className = 'blank';
			aTips.innerHTML = str[1];
			aTips.style.color = 'rgb(221, 6, 18)';
		}else{
			alert('请输入字母、数字或者英文!');
			return;
		}
	}

	oBtn.onclick = function(){
		input();
	}
};