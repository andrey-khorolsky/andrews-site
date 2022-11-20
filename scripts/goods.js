

// вывод даты и вемени
let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

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
    + days[date.getDay()] + '\n' + date.getHours() + ":" + minut(date.getMinutes());
    nli.appendChild(na);
    list.appendChild(nli);
    }, 1000);
}

// открытие меню "мои интересы"
var flag = false;
var u, na, l;
var sctn = ["Музыка", "Книги", "Фильмы", "Игры"];

function openMenu(){
    if (!flag) flag = true;
    else{
        flag = false
        u.remove();
        return;
    }
    u = document.createElement("ul");
    l = document.createElement("li");
    for (var i = 0; i<4; i++){
        na = document.createElement("a");
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
    u.classList.add("ul_from_opened_menu");
    u.appendChild(l);
    document.querySelector("nav").appendChild(u);
}

// изменение меню при наведении
function glamMenu(){
var menu = document.querySelectorAll("a");
for (var i=0; i<menu.length; i++){
    var leafs = menu[i].childNodes;
    leafs[0].src = "img/bulb.png";
    var locate = (i != 2) ? menu[i].href : "file:///C:/TWO/Web/3/web_hobby.html";
    if ( window.location.href.includes(locate)){
        leafs[0].src = "img/color_bulb.png";
        continue;
    }
    menu[i].addEventListener("mouseover", function(e){
        var leafs = this.childNodes;
        leafs[0].src ="img/color_bulb.png";
    });
    
    menu[i].addEventListener("mouseout", function(e){
        var leafs = this.childNodes;
        leafs[0].src = "img/bulb.png";
    });
}
}

window.onload = glamMenu();
window.onload = showtime();
