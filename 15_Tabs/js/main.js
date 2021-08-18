$(document).ready(function () {
    var $navLink = $('li')
    var $tabPane = $('.tab-pane')

    $navLink.click(function(e){
        e.preventDefault()
        $navLink.removeClass('active')
        $(this).attr('class','active')
        // $tabPane.removeClass('active')
        // $(this).attr('class','active')
    })
});