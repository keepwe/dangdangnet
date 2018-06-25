;(function(){
	$(function(){
		//banner图
		$(function(){
			$("#sliderBox").slider({
				width:796,
				height:326,
				showBtns:true
			});
			//banner图按钮  -----事件源改变如何处理
			$(".btn_focus").mouseover(function(){
				$(".btn_l").animate({"left":"0px"},100).next().animate({"right":"0px"},100);	
			});
			$(".btn_focus").mouseout(function(){
				$(".btn_l").animate({"left":"-33px"},100).next().animate({"right":"-33px"},100)
			})
			$(".btn_l").hover(function(){
					$(".btn_l").animate({"opacity":".6"},100).next().animate({"opacity":".6"},100)
				},function(){
					$(".btn_l").animate({"opacity":".2"},100).next().animate({"opacity":".2"},100)
			});
			//home右边公告栏信息------注意还有一个轮播效果：定时器？
			$(".tab_aa>li").hover(function(){
				var index = $(this).index();
				$(this).css({"background":"#fff","border":0}).siblings().css({"background":"#f0f0f0","border":" 1px solid #E6E6E6","border-top":"none"});
				$(".tab_content_aa").children().eq(index).css({"display":"block"}).siblings().css({"display":"none"});
			})
			//home右下角轮播
			var li=document.getElementById('lunbo').getElementsByTagName("li");  
		    var num=0;  
		    var len=li.length;  
		    setInterval(function(){  
		        li[num].style.display="none";  
		        num=++num==len?0:num;  
		        li[num].style.display="inline-block";  
		  
				},1000);
		
		})
	
	})
	
})()
