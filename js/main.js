$(document).ready(function () {

    let $btns = $('.project-area .container .row .portfolio-flters .btn');

    $btns.click(function (e) {
        $('.project-area .container .row .portfolio-flters .btn').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
})