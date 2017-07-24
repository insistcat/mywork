window.onload = function(){
	var aNode = document.getElementById('root');
	var preBtn = document.getElementById('pre');
	var orderBtn = document.getElementById('order');
	var lastBtn = document.getElementById('last');
	var time = 0;
	console.log(root);
	console.log(root.children[0]);


	function showTime(node){
		node.style.backgroundColor = 'white';
		setTimeout(function(){
			node.style.backgroundColor = 'purple';
			console.log(time);
		},time+=500);
		setTimeout(function(){
			node.style.backgroundColor = 'white';
			console.log(time);
		},time+=500);
	}

	function pre(node){
		if(node != null){
			showTime(node);
			pre(node.children[0]);
			pre(node.children[1]);
		}
	}

	function order(node){
		if(node != null){
			order(node.children[0]);
			showTime(node);
			order(node.children[1]);
		}
	}

	function last(node){
		if(node != null){
			last(node.children[0]);
			last(node.children[1]);
			showTime(node);
		}
	}

	preBtn.addEventListener('click',function(){
		pre(aNode);
		time = 0;
	},false);

	orderBtn.addEventListener('click',function(){
		order(aNode);
		time = 0;
	},false);

	lastBtn.addEventListener('click',function(){
		last(aNode);
		time = 0;
	},false);

}