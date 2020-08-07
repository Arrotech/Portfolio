function callToast() {

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}

function onSuccess(msg) {

    document.getElementById('snackbar').innerText = msg
    callToast();
}

function raiseError(msg) {

    document.getElementById('snackbar').innerText = msg
    callToast();
}


token = window.localStorage.getItem('token');
username = window.localStorage.getItem('username');

fetch('https://arrotech-dev-portal.herokuapp.com/api/v1/users/' + username, {
        method: 'GET',
        path: username,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    .then((res) => res.json())
    .then((data) => {
        let status = data['status'];
        let message = data['message'];
        let user = data.user;
        console.log(data);
        if (status === "200") {
            var temp = "";

            temp += "<div>";
            temp += "<p>" + user.username + "</p></div>";

            document.getElementById("profile_name").innerHTML = temp;
        } else {
            raiseError(message);
        }

    })
    .catch((err) => {
        raiseError("Please check your internet connection and try again!");
        console.log(err);
    })