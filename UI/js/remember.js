$(document).ready(function() {

    var remember = $.cookie('remember');
    if (remember == 'true') {
        var email = $.cookie('email');
        var password = $.cookie('password');
        // autofill the fields
        $('#email').val(email);
        $('#password').val(password);
    }


    $("#login").submit(function() {
        if ($('#remember').is(':checked')) {
            var email = $('#email').val();
            var password = $('#password').val();

            // set cookies to expire in 14 days
            $.cookie('email', email, { expires: 14 });
            $.cookie('password', password, { expires: 14 });
            $.cookie('remember', true, { expires: 14 });
        } else {
            // reset cookies
            $.cookie('email', null);
            $.cookie('password', null);
            $.cookie('remember', null);
        }
    });
});