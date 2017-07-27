window.onload = function(){
	var aNode = document.getElementById('root');
	var preBtn = document.getElementById('pre');
	var orderBtn = document.getElementById('order');
	var lastBtn = document.getElementById('last');
	
	var time = 0;
	var timer = 0;
	var flag = true;

	init();

	function showTime(node){
		node.style.backgroundColor = 'white';
		setTimeout(function(){
			node.style.backgroundColor = 'purple';
		},time+=100);
		setTimeout(function(){
			node.style.backgroundColor = 'white';
		},time+=100);			

	}

	/*查询内容*/
	function text(id){
		var oTxt = document.getElementById(id);
		var txt = oTxt.value;

		oTxt.onmouseover = function(){
			if(oTxt.value == '请输入查询内容'){
				oTxt.value = '';
			}	
		}
		oTxt.onmouseout = function(){
			if(oTxt.value == ''){
				oTxt.value = '请输入查询内容';
			}
		}
		return txt;
	}


	/*前序遍历*/
	function pre(node){	
		var content = text('input');
		var reg = new RegExp(eval('/'+ content + '/'));
		if(flag == false){
			return;
		}else{
			if(node != null){
				if(reg.test(node.childNodes[0].data)){
					timer = time;
					setTimeout(function(){
						node.style.backgroundColor = 'purple';				
					},timer);
					flag = false;
				}else{
					var length = node.children.length;	
					showTime(node);	
					for(var i=0;i<length;i++){	
						pre(node.children[i]);
					}
				}		
			}			
		}
	}

	/*后序遍历*/
	function last(node){	
		var content = text('input');
		var reg = new RegExp(eval('/'+ content + '/'));

		if(node != null){	
			var length = node.children.length;							
			for(var i=0;i<length;i++){
				if(flag == false){
					return;
				}else{
					last(node.children[i]);	
				}					
			}
			if(reg.test(node.childNodes[0].data)){
				console.log(node.childNodes[0].data);
				timer = time;
				setTimeout(function(){
					node.style.backgroundColor = 'purple';				
				},timer);
				flag = false;					
			}else{
				showTime(node);	
			}			
		}			
	}

	/*中序遍历暂时没做出来*/
/*	function order(node){
		if(node != null){
			var length = node.children.length;	
			for(var i=0;i<length;i++){
				order(node.children[0]);
				showTime(node);
				order(node.children[i]);
			}
		}
	}*/


	preBtn.addEventListener('click',function(){
		pre(aNode);
		time = 0;
	},false);

	lastBtn.addEventListener('click',function(){
		last(aNode);
		time = 0;
	},false);

	orderBtn.addEventListener('click',function(){
		order(aNode);
		time = 0;
	},false);

	function init(){
		text('input');
	}
	
};