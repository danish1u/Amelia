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
	var footer = '\n\r<div class="pst-footer"> <div class="container"> <div class="pst-clear"></div><div class="row"> <div class="fnta"> <div class="row"> </div></div><div class="col-md-12"> <div class="f-gray-box height-170 visible-desktop"> <div class="f-head"> STORE NEWSLETTER </div><div class="f-common-text">Add Store to your Favorites and receive email newsletters <br>about new items and special promotions!</div><div class="subcribe"> <a href="http://my.ebay.com.au/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=1*cosco&refid=store&ssPageName=STORE:HTMLBUILDER:SIMPLEPAGE">SUBSCRIBE</a> </div></div></div><div class="pst-clear"></div><div class="col-md-12"> <div class="f-gray-box1 height-183 visible-desktop"> <div class="f-head3"> cosmetic-co. </div><div class="f-quick-link"> <ul> <li><a href="http://stores.ebay.com.au/1-cosco">STORE HOME</a></li><li><a href="http://stores.ebay.com.au/1cosco/pages/about-us">ABOUT US</a></li><li><a href="http://stores.ebay.com.au/1cosco/pages/payment">PAYMENT</a></li><li><a href="http://stores.ebay.com.au/1cosco/pages/shipping-and-returns">Shipping & Returns</a></li><li><a href="http://feedback.ebay.com.au/ws/eBayISAPI.dll?ViewFeedback2&userid=1*cosco&ftab=AllFeedback&myworld=true&rt=nc"> Feedback</a></li><li><a href="http://contact.ebay.com.au/ws/eBayISAPI.dll?FindAnswers&requested=1*cosco">CONTACT US</a></li></ul> </div></div></div></div></div><div class="pst-clear"></div><div class="last-row"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12"> <div class="pst-copyright">Copyright &copy; ' + d.getFullYear() +' All Right Reserved.</div><div class="pst-designer">eBay Store Designed & Developed by <a href="https://www.upwork.com/o/profiles/users/_~015b640ac53e133434/" target="_blank">M.Ali</a></div></div></div></div></div></div>';
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
