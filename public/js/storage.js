
var pages = ["Главная", "Обо мне", "Гостевая книга", "Блог", "Мои интересы", "Фото", "Контакты", "Тест", "История"];
let pagesName = ["main", "about", "guest", "blog", "hobby", "photoalbum", "contacts", "test", "history"];

// вывод истории текущего сеанса
function getSesh(){
    let menu = $("a");
    let seshDiv = $("<div class='showMetrics'></div>").append($("<div>История текущего сеанса</div>"));
    let metrDiv = $("<div class='metrics'></div>");

    for (let i=0; i<pages.length; i++){
        let locate = pagesName[i];

        metrDiv.append($("<div>" + pages[i] + "</div>"));
        metrDiv.append($("<div>" + ((sessionStorage.getItem(locate) == null) ? 0 : sessionStorage.getItem(locate)) + "</div>"));
    }
    seshDiv.append(metrDiv);
    $("body").append(seshDiv);
}


// вывод истории за все время
function getCookie(){
    
    let cookDiv = $("<div class='showMetrics'></div>").append($("<div>История за все время</div>"));
    let metrDiv = $("<div class='metrics'></div>");

    let countvisit;
    let doccookie = document.cookie + ";";

    for (let i=0; i<pages.length; i++){

        let locate = pagesName[i];


        if (!doccookie.includes(locate)){
            countvisit = 0;
        }
        else{
            let ind = doccookie.indexOf(locate);
            let si = Number(doccookie.indexOf(";", ind)) + Number(1);
            let cookies = doccookie.slice(ind, si);

            ind = Number(cookies.indexOf("=")) + Number(1);
            si = Number(cookies.indexOf(";", ind));
            countvisit = cookies.slice(ind, si);
            
        }

        metrDiv.append($("<div>" + pages[i] + "</div>"));
        metrDiv.append($("<div>" + countvisit + "</div>"));

    }
    cookDiv.append(metrDiv);
    $("body").append(cookDiv);
}

getSesh();
getCookie();

