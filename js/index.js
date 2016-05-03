$(function(){
	//banner 
	var ban=$('.bannerimga')
	var btn=$('.btn')[0];
	
	var btns=$('li',btn)
     console.log(btns)
	var index=0;
	
	var t=setInterval(aa,4000);
	function aa(){

         index++;
         if(index==ban.length){
         	index=0;
         }
         for (var i = 0; i < ban.length; i++) {
         	 btns[i].className='';
         	animate(ban[i],{opacity:0});
         	
         };
            btns[index].className='btnli';
         animate(ban[index],{opacity:1});
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onclick=function(){
			for (var j = 0; j < ban.length; j++) {
				btns[j].className='';
				animate(ban[j],{opacity:0},500);
			};
			this.className='btnli';
			animate(ban[this.index],{opacity:1},500);
			index=this.index;				
		}

	};
	var boxs=$('.bannerimg')[0];
	boxs.onmouseover=function(){
		clearInterval(t);
	}
	boxs.onmouseout=function(){
		t=setInterval(aa,2000);
	}
	var right=$('.midright')[0];
	right.onclick=function(){
		aa();
	}
	var left=$('.midleft')[0];
	left.onclick=function(){
		index--;
         if(index==-1){
         	index=as.length-1;
         }
         for (var i = 0; i < ban.length; i++) {
         	 btns[i].className='';
         	animate(ban[i],{opacity:0});
         	
         };
            btns[index].className='btnli';
         animate(ban[index],{opacity:1});
	}
//        banner  end
//        xiao   banner 
	function weel(s,t){
		var liimg=$('.liimge')[s];
	    var as=$('a',liimg)
	    var aw=parseInt(getStyle(as[0],'width'));
	    liimg.style.width=as.length*aw+'px';
	    var libtn=$('.libtn')[s];
	    var lb=$('li',libtn)
	    console.log(lb)
	     var xr=0; 
		 
		var y=setInterval(bb,t)
		function bb(){
			
			 
	         animate(liimg,{marginLeft:-aw},400,function(){
	         	 liimg.appendChild(getFirst(liimg));//把第一个子元素放到最后
	              xr++;
	             liimg.style.marginLeft=0;
	         
	           if(xr==as.length){
	         	xr=0;
	         }
	         for (var i = 0; i < as.length; i++) {
	         	lb[i].className="";
	         	console.log(i)
	         };
	        lb[xr].className="libtnc";
	         
	         });
	       
		}
	}
	weel(0,2000);
	weel(1,3000);
	weel(2,2050);
	weel(3,3500);
	weel(4,4000);
	weel(5,2700);
	weel(6,2600);
	weel(7,2400);
	//xiao  banner  end
})