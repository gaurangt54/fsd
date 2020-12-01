function changeTheme(){
    var m = document.getElementsByTagName('link')
    console.log(m[3].href);
    if (m[3].href == "file:///D:/Sem%205/FSD/light.css"){
        document.getElementById("change-theme").innerHTML = "Change to Light Theme";
        document.querySelector("link[href='light.css']").href = "dark.css";
    }
    else {
        document.getElementById("change-theme").innerHTML = "Change to Dark Theme";
        document.querySelector("link[href='dark.css']").href = "light.css";
    }
}

function contactForm(){
    var modal = document.getElementById("contactform");
    var span = document.getElementsByClassName("close")[0];

    console.log(modal);
    console.log(span);
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
