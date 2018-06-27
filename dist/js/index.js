;(function(){
	$(function(){
		//侧边栏
		$("#menulist_content li").hover(function(){
			var index = $(this).index();
			$(".new_pub_nav_pop").eq(index).css("display","block")
		},function(){
			var index = $(this).index();
			$(".new_pub_nav_pop").eq(index).css("display","none")
		})
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
			//banner下面轮播
			$(".tehua_box .btn_y").click(function(){
				$("#Cbanner2").animate({"z-index":"9px"},1000).siblings().css("z-index","-9px")
			})
			//home右边公告栏信息------注意还有一个轮播效果没写
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
//			$("#roll_slider").slider({
//				width:202,
//				height:118,
//				list:$("#lunbo"),
//				nav:$(".mix_marquee_tab"),
//				btn:$("#roll_btn"),
//				showBtns:true
//			});	
		
		})
		//左侧楼梯
		
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if(scrollTop>160 && scrollTop < 6500){
				$(".louti_box").fadeIn();
			}else{
				$(".louti_box").fadeOut();
			}
		})
		
		$(function(){
			function maoji(name){
				$(name).click(function(){
	                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	                    var $target = $(this.hash);
	                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	                    if ($target.length) {
	                        var targetOffset = $target.offset().top;
		                    $('html,body').animate({scrollTop: targetOffset},500);
		                    return false;
	                    }
	                }
          		 })
			}
			maoji(".f1");
			maoji(".f2");
            maoji(".f3");
            maoji(".f4");
            maoji(".f5");
            maoji(".back_top");
        });
		
		
		//右侧浮动条广告
		$(function(){
			//上面购物车部分
			$(".sidebar_top>a").mouseenter(function(){
				$(this).addClass("on");
				$(this).children().eq(0).animate({left:"-79px"},300)
				
			})
			$(".sidebar_top>a").mouseleave(function(){
				$(this).removeClass("on");
				$(this).children().eq(0).css({left:"34px"})
			})
			
			//下面回到顶部部分
			$(".code2s").hover(function(){
				$(".code2b").css("display","block")
			},function(){
				$(".code2b").css("display","none")
			})
			$(".back_top").mouseenter(function(){
				$(this).children().eq(0).animate({left:"-79px"},300)
			})
			$(".back_top").mouseleave(function(){
				$(this).children().eq(0).css({left:"34px"})
			})
  

		})
		
		
		$(function(){
				$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
					data = JSON.parse(data);
					console.log(data);
					var str = "";
					$.each(data,function(index,item){
						str += `<a href="list.html?classID=${item.classID}">${item.className}</a>`;
					})
						$(".snew_pub_nav").html(str);
					})
				})
		})
	
})()

