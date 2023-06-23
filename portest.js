var im = 0, ij = 0;
var txtarray = ['Web-Dev.', 'Flutter.', 'AI/ML.'];
var speed = 100;

function typeWriter() {
    if (im < txtarray[ij].length) {
        document.getElementById("newmsg").innerHTML += txtarray[ij].charAt(im);
        im++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(repeatt, 1000);
    }
}
typeWriter();


function repeatt() {
    var text = document.getElementById("newmsg").innerHTML;

    if (text.length > 0) {
        var newText = text.slice(0, -1);
        document.getElementById("newmsg").innerHTML = newText;
        setTimeout(repeatt, speed);
    } else {
        im = 0;
        if (ij < txtarray.length - 1) {
            ij++;
        } else {
            ij = 0;
        }
        typeWriter();
    }
}


