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
}
