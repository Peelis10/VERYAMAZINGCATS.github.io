var images = ["assets/cat.gif", "assets/cat2.gif", "assets/cat3.png", "assets/cat4.png", "assets/cat5.png", "assets/cat6.png"];

function create() {
    element = document.createElement('img');
    element.id = 'cat';
    div = document.getElementById('cats');
    num = Math.floor(Math.random() * images.length);
    element.src = images[num];
    div.appendChild(element);

}

function popup() {
    var img = document.createElement('img');
    var yes = document.createElement('button');
    var no = document.createElement('button');

    yes.textContent = "yes";
    no.textContent = "no";
    img.src = "assets/popup.png";

    yes.id = "yes";
    no.id = "no";
    img.id = "popup-window";

    y = Math.floor(Math.random() * window.innerHeight);
    x = Math.floor(Math.random() * window.innerWidth);
    yesx = x + 146;
    yesy = y + 95;
    nox = x + 56;
    noy = y + 95;
    yes.style = "top:" + String(yesy) + "px; left:" + String(yesx) + "px;";
    no.style = "top:" + String(noy) + "px; left:" + String(nox) + "px;";
    img.style = "top:" + String(y) + "px; left:" + String(x) + "px;";




    var div = document.getElementById('popup');

    div.appendChild(img);
    div.appendChild(yes);
    div.appendChild(no);

    yes.addEventListener('click', function() {
        yes.remove();
        no.remove();
        img.remove();
    });
    no.addEventListener('click', function() {
        yes.remove();
        no.remove();
        img.remove();
    });
}

function amazingexplosion() {

    var img = document.createElement('img');
    img.src = "assets/explosion.gif";
    img.id = "explosion";
    var explosionsdiv = document.getElementById('explosions');
    explosionsdiv.appendChild(img);
    setTimeout(function() { img.remove(); }, 750);
}
function explosion() { 
    var explosion = new Audio('assets/explosion.mp3');
    explosion.play();
    amazingexplosion();
    document.getElementById("cats").innerHTML = "";
    document.getElementById("popup").innerHTML = "";
    document.getElementById("spooky").appendChild(img);
}

document.getElementById("clear").addEventListener('click', function() {
    explosion();
});
window.setInterval(popup, 3000);
window.setInterval(create, 100);

