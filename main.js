$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const newTask = $('#new-task').val();
        if (newTask !== '') {
            $('ul').append(`<li>${newTask}</li>`);
            $('#new-task').val('');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
