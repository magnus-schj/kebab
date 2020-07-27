//CONSTANTS
const selectShop = document.getElementById("select");
const articles = document.querySelectorAll(".no-display")
const shops = [
    "Kebab Zone", "New Beirut Kebab", "Parthenon Pizza & Grillbar", "Carmel Grill",
    "Mediterranean Grill", "Bislett Kebab House", "Ekte Istanbul kebab avd. Grønland", "Grytelokket",
    "Dronningens Kebab", "C’est la Bab", "Kebabbiten", "Balkan",
    "San Remo", "La Cetta", "Tåsen Cafebar", "The Corner"
];
//ADDEVENTLISTENER
selectShop.addEventListener("change", displayArticle);
//ADD OPTIONS IN SELECT
for (var i = 0; i < shops.length; i++) {
    const option = document.createElement("option");
    const anchor = document.createElement("a");
    anchor.href = "#container";
    anchor.innerText = shops[i];
    option.appendChild(anchor);
    selectShop.appendChild(option);
}
//FUNCTIONS
function displayArticle(){
    resetArticles();
    //CHECKS IF THE SELECTED INDEX IS 0 AFTER CHANGE, REMOVE ALL
    if(selectShop.selectedIndex === 0){
        for(var j = 0;j < articles.length;j++){
            articles[i].classList.add("no-display");
            articles[i].classList.remove("displayed-article");
        }
        console.log(selectShop.selectedIndex);
    }
    //FIND THE INDEX OF THE SELECTED OPTION ELEMENT
    var index = 0;
    for(var i = 0;i < shops.length;i++){
        if(selectShop.selectedIndex - 1 === i){
            index = i;
        }
    }
    articles[index].classList.remove("no-display");
    articles[index].classList.add("displayed-article");
}
function resetArticles(){
    for(var i = 0;i < articles.length;i++){
        articles[i].classList.add("no-display");
        articles[i].classList.remove("displayed-article");
    }
}
/*
function resetArticles() {
    for (var i = 0; i < shops.length; i++) {
        articles[i].classList.add("no-display");
        articles[i].classList.remove("displayed-article");
    }
}

function displayArticle() {
    if(selectShop.selectedIndex === 0){
        resetArticles();
    }
    var index = 0;
    resetArticles();
    for (var i = 0; i < shops.length; i++) {
        if (selectShop.selectedIndex - 1 === i) {
            index = i;
        }
    articles[index].classList.remove("no-display");
    articles[index].classList.add("displayed-article");
        /*
        addEventListener("transitionend", function(){
            articles[index].classList.add("displayed-article");
        })
    }
}
*/