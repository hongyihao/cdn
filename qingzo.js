function topNavScroll() {
    var topScroll = Math.floor($(window).scrollTop());
    var offset_Width = document.body.offsetWidth
    if (topScroll > 70 && offset_Width > 1024) {
        $('.th_header').addClass('th_fixed');
    }
    else {
        $('.th_header').removeClass('th_fixed');
    }
}

$(window).on('scroll', function () {
    topNavScroll();
});

$(".wap_click").click(function () {
    $('.th_header').toggleClass("thact")
    $('.wap_click').toggleClass("wapact")
})

$("#go_top").click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
});

$(document).ready(function() {
    var s = document.location
    $("#divNavBar a").each(function() {
        if (this.href == s.toString().split("#")[0]) {
            $(this).addClass("hover")
            return false
        }
    })
})

zbp.plugin.unbind("comment.reply.start", "system")
zbp.plugin.on("comment.reply.start", "default", function(id) {
    var i = id
    $("#inpRevID").val(i)
    var frm = $('#divCommentPost')
    var cancel = $("#cancel-reply")

    if (!frm.hasClass("reply-frm"))
        frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm")
    $('#AjaxComment' + i).before(frm)

    cancel.show().click(function() {
        var temp = $('#temp-frm')
        $("#inpRevID").val(0)
        if (!temp.length || !frm.length) return
        temp.before(frm)
        temp.remove()
        $(this).hide()
        frm.removeClass("reply-frm")
        return false
    })
    try {
        $('#txaArticle').focus()
    } catch (e) {

    }
    return false
})

zbp.plugin.on("comment.get", "default", function (logid, page) {
    $('span.commentspage').html("Waiting...")
})

zbp.plugin.on("comment.got", "default", function () {
    $("#cancel-reply").click()
})

zbp.plugin.on("comment.post.success", "default", function () {
    $("#cancel-reply").click()
})