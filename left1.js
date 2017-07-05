 var $h = jQuery.noConflict();  
var $h = jQuery.noConflict();   
jQuery(document).ready(function($h){$h(window).load(function(){

//Categories
if($h("#pst-categories, #pst-dropdown").length > 0) {
    var storecategories = '<ul class="lev1"><li><a href="http://stores.ebay.com.au/1cosco/100%-Pure-Hyaluronic-Serum-/_i.html?_fsub=5374911016">Serums</a><span class="cnt"></span></li><li><a href="http://stores.ebay.com.au/1cosco/Instant-Facelift-Products-/_i.html?_fsub=5545741016">Instant Facelift Products</a><span class="cnt"> </span></li><li><a href="http://stores.ebay.com.au/1cosco/Skin-Define-Gel-Peels-/_i.html?_fsub=5341910016">Skin Define Gel Peels</a><span class="cnt"></span><ul class="lev2"><li><a href="http://stores.ebay.com.au/1-cosco/100%-Pure-Hyaluronic-Serum-/_i.html?_fsub=5373653016">100% Pure Hyaluronic Serum</a><span class="cnt"></span></li><li><a href="http://stores.ebay.com.au/1-cosco/Glycolic-Gel-Peels-/_i.html?_fsub=5341929016">Glycolic Gel Peels</a><span class="cnt"></span></li><li><a href="http://stores.ebay.com.au/1-cosco/Lactic-Gel-Peels-/_i.html?_fsub=5341930016">Lactic Gel Peels</a><span class="cnt"></span></li><li><a href="http://stores.ebay.com.au/1-cosco/Post-Peel-Neutraliser-/_i.html?_fsub=5371518016">Post Peel Neutraliser</a><span class="cnt"> </span></li><li><a href="http://stores.ebay.com.au/1-cosco/Pre-Peel-Primer-/_i.html?_fsub=5371517016">Pre Peel Primer</a><span class="cnt"> </span></li><li><a href="http://stores.ebay.com.au/1-cosco/Salicylic-Gel-Peel-/_i.html?_fsub=5341914016">Salicylic Gel Peel</a><span class="cnt"></span></li><li><a href="http://stores.ebay.com.au/1-cosco/TCA-Gel-Peels-/_i.html?_fsub=5341931016">TCA Gel Peels</a><span class="cnt"> </span></li></ul></li><li><a href="http://stores.ebay.com.au/1cosco/Other-/_i.html?_fsub=1">Other</a><span class="cnt"> </span></li></ul>';
    if(storecategories != "") {
        $h("#pst-categories, #pst-dropdown").html(storecategories);
       
    }else {
        var _er = "<ul class=\"lev1\"><li><span>No categories to show<\/span><\/li><\/ul>"
        $h("#pst-categories, #pst-dropdown").html(_er);
    }
}
$h('.lev2').each(function(){
        var html_2 = $h(this).html();
        $h(this).prev('#pst-dropdown li').addClass('pstcol pstspan_1_of_5');
        
        var  new_html = '<ul class="lev2">';
        new_html += html_2;
        new_html += '</ul>';        
        $h(this).prev('li').append(new_html);

    });
    
});});
