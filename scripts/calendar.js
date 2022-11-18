months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var div, div_h, div_d, flag_cal = false, first=true, current_year=2022, current_month=1, current_day=31, table_days;
var inp = document.getElementById("birthID");

document.getElementById("birthID").addEventListener("focus", function(){
    console.log("bf");
    if (!flag_cal) flag_cal = true;
    else return;

    inp.value = "01.01.2022";

    div = document.createElement("div");
    div.classList.add("main-div-cal");
    div_h = document.createElement("div");
    div_h.classList.add("head-div-cal");


    div_h.appendChild(addSelectYear());
    div_h.appendChild(addSelectMonth());
    div_h.appendChild(addCross());
    div.appendChild(div_h);
    div.appendChild(addWeek());
    printDays();
    document.getElementById("forcal").appendChild(div);
});


function addCross(){
    var cross = document.createElement("div");
    cross.innerHTML = "&times";
    cross.classList.add("cross-cal");
    cross.addEventListener("click", function(){
        flag_cal = false;
        first = true;
        console.log("bb");
        div.remove();
    });
    return cross;
}

var days_of_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function addWeek(){
    var div_w = document.createElement("div");
    div_w.classList.add("week-div-cal");
    for (var i=0; i<7; i++){
        var span = document.createElement("div");
        span.innerText = days_of_week[i];
        div_w.appendChild(span);
    }
    return div_w;
}

function getDaysCount(mon){
    if (mon == 1) return 28;
    if (mon < 7){
        if (mon % 2 == 1) return 30;
        if (mon % 2 == 0) return 31;
    }
    if (mon % 2 == 0) return 30;
    if (mon % 2 == 1) return 31;
    return "null-";
}

function addSelectMonth(){
    var selMonth = document.createElement("select");
    for (var i=0; i<12; i++){
        var opt = document.createElement("option");
        opt.innerText = months[i];
        opt.value = i;
        selMonth.appendChild(opt);
    };
    selMonth.addEventListener("change", function(){
        current_month = selMonth.value;
        current_day = getDaysCount(selMonth.value);
        console.log("month = " + current_month);
        console.log("day = " + current_day);
        setMonth();
        printDays();
    });
    return selMonth;
}

function addSelectYear(){
    var selYear = document.createElement("select");
    for (var i=2022; i>1900; i--){
        var opt = document.createElement("option");
        opt.innerText = i;
        opt.value = i;
        selYear.appendChild(opt);
    };
    selYear.addEventListener("change", function(){
        current_year = selYear.value;
        console.log("year = " + current_year);
        inp.value = inp.value.substring(0, 6) + current_year;
        printDays();
    });
    return selYear;
}

function printDays(){
    if (!first) div_d.remove();
    first = false;
    div_d = document.createElement("div");
    div_d.classList.add("days-div-cal");
    div.appendChild(div_d);
//несколько div блоков после которых идут дни недели
    var dat = new Date(current_year, current_month, 1);
    // dat.setFullYear(current_year);
    // dat.setMonth(current_month-1);
    console.log(dat.getFullYear());
    console.log(dat.getMonth());
    console.log("dat.getDay() - " + dat.getDay());
    for (var i=0; i<dat.getDay()-1; i++){
        var void_div = document.createElement("div");
        div_d.appendChild(void_div);
    }
    for (var i=1; i<current_day+1; i++){
        var button = document.createElement("button");
        button.innerHTML = i;
        button.value = i;
        div_d.appendChild(button);
    }
}

function setMonth(){
    var monthInp = Number(current_month) + Number(1);
    if (monthInp < 10) monthInp = "0" + Number(monthInp);
    inp.value = inp.value.substring(0, 3) + monthInp + inp.value.substring(5);
}

