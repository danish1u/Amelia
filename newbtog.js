jQuery(document).ready(function(){
	var $V = jQuery.noConflict();		
	$V(".pagecontainer > table:eq(1)").addClass("pst-background");
	$V(".pagecontainer > table:eq(1) tr:first td:first").addClass("pst-background2");
	$V(".pst-background > tbody > tr > td > table:last-child").addClass("container addfooter");
	$V(".pst-background table:eq(1) tbody:first").addClass("row");
	$V(".pst-background table:eq(1) tr:first").addClass("nospace");
	$V(".pst-background table:eq(1) tr:eq(1)").addClass("pst-content row");
	$V(".pst-background table:eq(1) tr:eq(1) td:first").addClass("col-md-3 col-sm-3 col-xs-12");
	$V(".pst-content > td:eq(1)").addClass("pst-gap");
	$V(".pst-content > td:eq(2)").addClass("categorypage col-md-9 col-sm-9 col-xs-12");
	
	if(pageName != "StoresCustomPageHome") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	
	
	//Getting and Setting Store Categories
	
	
	//Footer
	var d = new Date();
	var footer = '\n\r<div class="pst-footer"> <div class="container"> <div class="pst-clear"></div><div class="row"> <div class="fnta"> <div class="row"></div></div><div class="col-md-12"> <div class="our-rating"> <h4> OUR RATING </h4> <div class="col-md-3"> <img src="https://raw.githubusercontent.com/danish1u/airsoftaction/master/images/airsoftstation1.png" alt=""/> </div><div class="col-md-3"> <img src="https://raw.githubusercontent.com/danish1u/airsoftaction/master/images/airsoftstation2.png" alt=""/> </div><div class="col-md-3"> <img src="https://raw.githubusercontent.com/danish1u/airsoftaction/master/images/airsoftstation3.png" alt=""/> </div><div class="col-md-3"> <img src="https://raw.githubusercontent.com/danish1u/airsoftaction/master/images/airsoftstation4.png" alt=""/> </div></div></div><div class="pst-clear"></div><div class="col-md-12"> <div class="col-md-3"> <div class="social1"> <h4> Connect With Us </h4> <ul class="social-links inline-list"> <li> <a href="http://www.youtube.com/airsoftstationtv" title="YouTube"><span>YouTube</span></a> </li><li> <a href="http://www.facebook.com/AirsoftStation" title="Facebook"><span>Facebook</span></a> </li><li> <a href="http://twitter.com/airsoftstation" title="Twitter"><span>Twitter</span></a> </li><li> <a href="https://plus.google.com/+airsoftstation" title="GooglePlus"><span>GooglePlus</span></a> </li></ul> </div><div class="social2"> <h4> Further Info </h4> <ul> <li class=" page-menu-link"> <a href="http://www.ebaystores.com/airsoftstation/pages/about-us/"> <span>About Us</span></a> </li><li class=" page-menu-link"> <a href="https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&amp;userid=airsoftstation&amp;ftab=AllFeedback&amp;myworld=true&amp;rt=nc"> <span>Feedback</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/airsoftstation/pages/contact-us"> <span>Contact Us</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/airsoftstation/pages/shipping-and-return"> <span>Shipping &amp; Return</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/airsoftstation/pages/payment-and-faq"> <span>Payment &amp; FAQ</span></a> </li></ul> </div></div><div class="col-md-3"> <div class="social3"> <h4> CATEGORIES </h4> <ul> <li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/Sporting-Goods/_i.html?_sacat=888"> <span class="lang-en">Sporting Goods</span></a> </li><li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/Consumer-Electronics/_i.html?_sacat=293"> <span class="lang-en">Consumer Electronics</span></a> </li><li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/Collectibles/_i.html?_sacat=1"> <span class="lang-en">Collectibles</span></a> </li><li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/Business-Industrial/_i.html?_sacat=12576"> <span class="lang-en">Business &amp; Industrial</span></a> </li><li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/Home-Garden/_i.html?_sacat=11700"> <span class="lang-en">Home &amp; Garden</span></a> </li><li class=" page-menu-link"> <a href="https://www.ebay.com/str/airsoftstation/_i.html?"><span class="lang-en"> All Items</span></a> </li></ul> </div></div><div class="col-md-3"> <div class="social3"> <h4> Clothing &amp; Accessories </h4> <ul> <li class=" page-menu-link"> <a href="http://www.ebaystores.com/Airsoft-Station/Mens-Shoes-/_i.html?_sacat=93427&amp;_sid=1018362181&amp;_trksid=p4634.c0.m3228"> <span class="lang-en">Men Shoes</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/Airsoft-Station/Mens-Clothing-/_i.html?_sacat=1059&amp;_sid=1018362181&amp;_trksid=p4634.c0.m322"> <span class="lang-en">Men Clothing</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/Airsoft-Station/Uniforms-Work-Clothing-/_i.html?_sacat=28015&amp;_sid=1018362181&amp;_trksid=p4634.c0.m322"> <span class="lang-en">Uniforms &amp; Work Clothing</span></a> </li><li class=" page-menu-link"> <a href="http://www.ebaystores.com/Airsoft-Station/Mens-Accessories-/_i.html?_sacat=4250&amp;_sid=1018362181&amp;_trksid=p4634.c0.m322"> <span class="lang-en">Men Accessories</span></a> </li></ul> </div></div><div class="col-md-3"> <div class="social3"> <div class="newslatter"> <h4> Store Newsletter </h4> <div class="pst-address"> <p> Add Store to your Favorites and receive email newsletters about new items and special promotions! </p></div><div class="sign-up"> <a href="https://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&amp;rt=nc&amp;sellerid=airsoftstation&amp;ssPageName=STRK%3AMEFS%3AADDSTR&amp;AcceptSavedSeller="> Sign Up Now</a> </div></div></div><div class="social3"> <h4> VISIT OUR STORE </h4> <div class="pst-address"> <p> 1330 Helmo Ave N Oakdale, MN 55128 651-493-1928 </p></div></div></div></div></div></div><div class="pst-clear"></div><div class="container"> <div class="last-row"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12"> <div class="pst-copyright"> <p> Copyright © ' + d.getFullYear() +' All Right Reserved. eBay Store Designed &amp; Developed by <strong style=" color: #DBDBDB;">M.Ali</strong> and <strong style=" color:#DBDBDB;">Raja Mubashir</strong> </p></div></div></div></div></div></div>';
if(pageName != "PageAboutMeViewStore") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	$V(document).ready(function(){
		$V('.rs-pview >table:first-child').removeClass('grid');
		$V('.rs-pview >table:first-child').addClass('grid_new');
	});
	var cnt ='';
	$V(".grid tr td.gallery").each(function(){		
		//$V(this).addClass('new');
		if($V(this).html() == "<br>")
		{
			cnt +='<td class="gallery er" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$V(this).html()+'</td>';
		}
		else
		{
			cnt +='<td class="gallery" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$V(this).html()+'</td>';
		}
		
	});
	
	ct =cnt;
	
	$V('.rs-pview >table:first-child').html('<tr>'+cnt+'<tr>');
	
	$V( ".fixed" ).append( "<div class='pst-buyitnow'>BUY IT NOW</div>" );
  
$V('.details').each(function(){
$Vlink = $V('.ttl', this).find('a').clone().text('');
$V('.pst-buyitnow', this).contents().wrap($Vlink);
});

	
});
