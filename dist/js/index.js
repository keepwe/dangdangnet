;(function(){
	$(function(){
		//banner图
		$(function(){
			$("#sliderBox").slider({
				width:796,
				height:326,
				showBtns:true
			});
			//banner图按钮
			$(".btn_focus").mouseover(function(e){
				var evt = e || event;
				evt.stopPropagation;
				$(".btn_l").animate({"left":"0px"},100).next().animate({"right":"0px"},100);
					$(".btn_l").hover(function(){
						$(".btn_l").animate({"opacity":".6"},100).next().animate({"opacity":".6"},100)
					},function(){
						$(".btn_l").animate({"opacity":".2"},100).next().animate({"opacity":".2"},100)
					});
			});
			$(".btn_focus").mouseout(function(){
				$(".btn_l").animate({"left":"-33px"},100).next().animate({"right":"-33px"},100)
			})
			
			
			
		})
		
		
		
	})
})()
