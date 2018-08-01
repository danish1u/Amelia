jQuery(document).ready(function () {
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

    if (pageName != "StoresCustomPageHome") {
        if ($V(".addfooter").length > 0) {
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
