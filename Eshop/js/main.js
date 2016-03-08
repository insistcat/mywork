window.onload=function(){
	buy.app.toText();
};
var  buy={};	//命名空间

buy.tools={};

buy.ui={};

buy.ui.toTextReset=function(obj,str){
	obj.onfocus=function(){
		if(obj.value == str){
			obj.value="";
		};
	};
	obj.onblur=function(){
		if(obj.value == ""){
			obj.value=str;
		};
	};
};

buy.app={

};
buy.app.toText=function(){
	var oTextUp=document.getElementById("sTextUp");
	var oTextDown=document.getElementById("sTextDown");

	buy.ui.toTextReset(oTextUp,"Search Website");
	buy.ui.toTextReset(oTextDown,"Search Website");
};