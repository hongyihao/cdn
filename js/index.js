$(document).ready(function(){
	
	//初始化侧边栏跟随
	$('.sidebar').theiaStickySidebar({
	    additionalMarginTop: 10,
	    additionalMarginBottom: 20
	});
	
	//顶部导航跟随
    $(window).scroll(function(){
		var scroll_top = $(window).scrollTop();
		if(scroll_top>=30){
			$('#symao_com .header').addClass('top-active');
		}else{
			$('#symao_com .header').removeClass('top-active');
		}
	})
	
	//导航添加样式
    $('.nav .sub-menu').addClass('uk-animation-slide-bottom-small');
    
	//首页排行
	$('.rank ul').each(function(){
		$(this).find('li').first('li').addClass("active");
		for (var i = 0; i < 10; i++) {
		    $(this).find('li').eq(i).find('.num').html(i+1)
		}
	})
	$(".rank ul li").mouseover(function() {
		var _index = $(this).index(); //获取点击元素的下标
		$(this).addClass("active").siblings().removeClass(); //相邻元素隐藏类
	});
	
	//排行页面 
	$('.rankMain').each(function(){
	    for (var i = 0; i < 10; i++) {
	        $(this).find('.item').eq(i).find('.num span').html(i+1)
	    }
	})
	
	//新游上线手风琴
	$(".newGame .uk-width-auto").mouseover(function() {
		var _index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	//添加灯箱
	$('.wp-block-gallery').attr( 'uk-lightbox' ,'animation: fade' );
	$('.wp-block-image').attr( 'uk-lightbox' ,'animation: fade' );
	
    
	//获取日期
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var mon = myDate.getMonth() + 1; //获取当前月
	var date = myDate.getDate(); //获取当前日
	var week = myDate.getDay();
	var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	$(".show-time").html(year + "年" + mon + "月" + date + "日 " + weeks[week]);


	//文章表格添加样式
	$('.single-content table').addClass('uk-table uk-table-divider uk-text-small');
	
});

