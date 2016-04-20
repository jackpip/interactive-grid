$(document).ready(function() {
    var input = 10;
    var createGrid = function() {
        $('#container').empty();
        for (var i = 0; i < input; i++) {
            for (var j = 0; j < input; j++) {
                $('#container').append('<div class="box"></div>');   
            }
        }
        $('.box').css('height',560/input-4);
        $('.box').css('width',560/input-4);
    };
    createGrid();
    $('button').click(function() {
        do {
            input = prompt("Choose an integer between 1 and 50");
            if(input === null || input === ''){input = 10;}
        } while (!(input > 0 && input < 51));
        createGrid();
    });
    $(document).on('mouseenter', '.box', function() {
        if($(this).css('opacity') > 0) {
            $(this).css('opacity','-=0.2');
        }
    });
});