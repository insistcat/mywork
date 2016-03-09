function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];

	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

window.onload=function(){
	var oDiv=document.getElementById('playimg');
	var oBtnPrev=getByClass(oDiv,'prev')[0];
	var oBtnNext=getByClass(oDiv,'next')[0];
	var oPrevBg=getByClass(oDiv,'prev_bg')[0];
	var oNextBg=getByClass(oDiv,'next_bg')[0];

	var oSmallPic=getByClass(oDiv,'smallPic')[0];
	var aLiSmall=oSmallPic.getElementsByTagName('li');
	var oBigPic=getByClass(oDiv,'bigPic')[0];
	var aLiBig=oBigPic.getElementsByTagName('Li');
	var oLeft=getByClass(oDiv,'left')[0];
	var oRight=getByClass(oDiv,'right')[0];

	var aTxt=["都市魅力","古香古色","沉浸舞步的舞者","名贵跑车","聆听天籁的精灵","绚彩光芒"];

	var oUlSmall=oSmallPic.getElementsByTagName('ul')[0];

	oUlSmall.style.width=aLiSmall.length*aLiSmall[0].offsetWidth+'px';

	//按钮显示
	oBtnPrev.onmouseover=oPrevBg.onmouseover=function(){
		startMove(oBtnPrev,'opacity',100);
	};
	oBtnPrev.onmouseout=oPrevBg.onmouseout=function(){
		startMove(oBtnPrev,'opacity',0);
	};
	oBtnNext.onmouseover=oNextBg.onmouseover=function(){
		startMove(oBtnNext,'opacity',100);
	};
	oBtnNext.onmouseout=oNextBg.onmouseout=function(){
		startMove(oBtnNext,'opacity',0);
	};

	//大图切换
	var nowZIndex=2;
	var now=0;
	oLeft.innerHTML=aTxt[now];
	oRight.innerHTML=now+1+'/'+aLiSmall.length;

	for(var i=0;i<aLiSmall.length;i++){
		aLiSmall[i].index=i;
		aLiSmall[i].onclick=function(){
			if(this.index==now)return;
			now=this.index;
			Tab();
		};

		aLiSmall[i].onmouseover=function(){
			startMove(this,'opacity',100);
		};
		aLiSmall[i].onmouseout=function(){
			if(this.index!=now){
				startMove(this,'opacity',60);
			}
		};
	}

	oBtnNext.onclick=function(){
		now++;
		if(now==aLiBig.length){
			now=0;
		}
		Tab();
	};
	oBtnPrev.onclick=function(){
		now--;
		if(now==-1){
			now=aLiBig.length-1;
		}
		Tab();
	};

	var timer=setInterval(oBtnNext.onclick,2000);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	oDiv.onmouseout=function(){
		timer=setInterval(oBtnNext.onclick,2000);
	};

	function Tab(){

		aLiBig[now].style.zIndex=nowZIndex++;

		oLeft.innerHTML=aTxt[now];
		oRight.innerHTML=now+1+'/'+aLiSmall.length;

		for(var j=0;j<aLiSmall.length;j++){
			startMove(aLiSmall[j],'opacity',60);
		}
		startMove(aLiSmall[now],'opacity',100);

		aLiBig[now].style.height=0;
		startMove(aLiBig[now],'height',320);

		if(now==0){
			startMove(oUlSmall,'left',0);
		}else if(now==aLiSmall.length-1)
			{
				startMove(oUlSmall,'left',-(now-2)*aLiSmall[0].offsetWidth);
			}else
				{
					startMove(oUlSmall,'left',-(now-1)*aLiSmall[0].offsetWidth);
				}
	}
};
