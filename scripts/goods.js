

// вывод даты и вемени
let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function minut(m){
    if (m < 10) return "0" + m;
    return m;
}

function showtime(){
    var list = document.querySelector("ul");
    var nli = document.createElement("li");
    var na = document.createElement("a");

    setInterval( function(){
    var date = new Date();
    na.innerText = date.getDate() + "." + Number(date.getMonth() + 1) + "." + date.getFullYear() + '\n'
    + days[date.getDay()-1] + '\n' + date.getHours() + ":" + minut(date.getMinutes());
    nli.appendChild(na);
    list.appendChild(nli);
    }, 1000);
}

// открытие меню "мои интересы"
var flag = false;
var u, na, l;
var sctn = ["Музыка", "Книги", "Фильмы", "Игры"];

function openMenu(){
    if (flag) flag = false; else flag = true;
    if (!flag){
        u.remove();
        return;
    }
    u = document.createElement("ul");
    l = document.createElement("li");
    for (var i = 0; i<4; i++){
        na = document.createElement("a");
        na.style.width = "100%";
        na.style.height = "60px";
        na.style.display = "block";
        na.style.lineHeight = "60px";
        na.addEventListener("mouseover", function(e){
            this.style.backgroundColor = "#CAA88A";
        });
        na.addEventListener("mouseout", function(e){
            this.style.backgroundColor = "#FFF8F1";
        });
        na.addEventListener("click", function(e){
            flag = false;
            u.remove();
        });
        na.href = "web_hobby.html#sctn" + Number(i+1);
        na.innerHTML = sctn[i];
        l.appendChild(na);
    }
    l.style.width = "100%";
    u.style.position = "absolute";
    u.style.marginTop = "80px";
    u.style.marginLeft = "25%";
    u.style.backgroundColor = " #FFF8F1";
    u.style.width = "12.5%";
    u.style.textAlign = "center";
    u.appendChild(l);
    document.querySelector("nav").appendChild(u);
}

// изменение меню при наведении
function glamMenu(){
var menu = document.querySelectorAll("a");
console.log(menu);
for (var i=0; i<7; i++){
    menu[i].addEventListener("mouseover", function(e){
        this.style.backgroundColor = "#CAA88A";
        this.style.color = "#FFF8F1";
    });
}
for (var i=0; i<7; i++){
    menu[i].addEventListener("mouseout", function(e){
        this.style.backgroundColor = "#FFF8F1";
        this.style.color = "#532A05";
    });
}
}

// window.onload = glamMenu("pppp");


// открытие фото
function openAlbum(){
    var albs = document.querySelectorAll("img");
    console.log(albs);
    for (var i=0; i<albs.length; i++)
    albs[i].addEventListener("click", function(e){
        var d = document.createElement("div");
        var d2 = document.createElement("div");
        d.addEventListener("click", function(){
            document.body.style.overflow = "visible";
            this.remove();
        });
        var im = document.createElement("img");
        im.src = this.src;
        d.appendChild(im);
        d.appendChild(d2);
        d2.style.marginTop = "-40%";
        d2.style.height = "120%";
        d2.style.width = "100%";
        d2.style.backgroundColor = "grey";
        d2.style.opacity = "50%";
        d.appendChild(d2);
        d.style.position = "fixed";
        d.style.height = "100%";
        d.style.width = "100%";
        d.style.marginTop = "-80px";
        // d.style.opacity = "50%";
        // d.style.hidden = "overflow";
        // d.style.backgroundColor = "red";
        // d.focus();
        // im.focus();
        im.style.height = "50%";
        im.style.marginLeft = "35%";
        im.style.marginTop = "10%";
        document.body.style.overflow = "auto";
        // im.style.opacity = "100%";
        // im.style.width = "100%";

        document.body.appendChild(d);

    });
}
// -------------------------------------------------------------------------------------------------
// window.onload = openAlbum();