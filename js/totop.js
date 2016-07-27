var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1259997703'%3E%3C/span%3E%3Cscript src='" + 
	cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1259997703%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
