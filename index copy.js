//https://github.com/wonseok22/ToyProjects/tree/main/cardGame 참고
let cardOne, cardTwo; // 선택한 카드
let disableDeck = false;

// 총개수  꽝개수 
function setPlus(e) {
    var total = parseInt(document.getElementById("set__total").children[1].value);
    if(total < 10){
        document.getElementById("set__total").children[1].value = total + 1;
    }
    deleteUL();
    createUL(document.getElementById("set__total").children[1].value);
    
}

function setMinus(e) {
    var total = parseInt(document.getElementById("set__total").children[1].value);
    if(total > 2){
        document.getElementById("set__total").children[1].value = total - 1;
    }
    deleteUL();
    createUL(document.getElementById("set__total").children[1].value);
}

function setPlus2(e) {
    let val;
    let total;

    val = parseInt(document.getElementById("set__boom").children[1].value);
    total =  parseInt(document.getElementById("set__total").children[1].value);
    if(val < 10 && val < total){
        document.getElementById("set__boom").children[1].value = val + 1;
    }
}

function setMinus2(e) {
    let val;
    val = parseInt(document.getElementById("set__boom").children[1].value);
    if(val > 1){
        document.getElementById("set__boom").children[1].value = val - 1;
    }
}

function startClick(){

}

// 카드 개수 초기화 
function deleteUL(){
    var ul = document.querySelector(".cards");
    while (ul.firstChild) {
        ul.firstChild.remove()
    }
}
// 카드 개수 입력만큼 생성
function createUL(num) {
    console.log(num);
    for (let i = 0; i < num; i++) {
    // <li>
    //     <div class="view front">
    //         <img src="./img/symbol-of-spades.png" alt="symbol-of-spades.png">
    //     </div>
    //     <div class="view back">
    //         <img src="./img/aubergine.png" alt="aubergine.png">
    //     </div>
    // </li>
    // Create element
    var ul = document.querySelector(".cards");
    var li = document.createElement("li");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    // Add img src
    img1.src = "./img/symbol-of-spades.png";

    img1.alt = "symbol-of-spades.png"
    img2.src = "./img/grapes.png";
    img2.alt = "grapes.png"
    // Add img child
    div1.appendChild(img1);
    div2.appendChild(img2);
    // Add classlist
    div1.classList.add("view");
    div1.classList.add("front");
    div2.classList.add("view");
    div2.classList.add("back");

    li.append(div1, div2);
    ul.appendChild(li);
    }
}


function createBoom(num){
    for (let i = 0; i < num; i++) {
        // <li>
        //     <div class="view back">
        //         <img src="./img/aubergine.png" alt="aubergine.png">
        //     </div>
        // </li>
        var ul = document.querySelector(".cards");
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        // Add img src
        img1.src = "./img/symbol-of-spades.png";
    
        img1.alt = "symbol-of-spades.png"
        img2.src = "./img/grapes.png";
        img2.alt = "grapes.png"
        // Add img child
        div1.appendChild(img1);
        div2.appendChild(img2);
        // Add classlist
        div1.classList.add("view");
        div1.classList.add("front");
        div2.classList.add("view");
        div2.classList.add("back");
    
        li.append(div1, div2);
        ul.appendChild(li);
        }
}

function flipCard(e) {
    let clickedCard = e.target;
    
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");

        if (!cardOne) {
            return cardOne = clickedCard
        }
        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector(".back img").src;
        let cardTwoImg = cardTwo.querySelector(".back img").src;

    }
}
// Set Option
var panelplus = document.querySelector("#set__total .plus");
var panelminus = document.querySelector("#set__total .minus");
panelplus.addEventListener("click", setPlus);
panelminus.addEventListener("click", setMinus);

var panelplus2 = document.querySelector("#set__boom .plus");
console.log(panelplus2);
var panelminus2 = document.querySelector("#set__boom .minus");
panelplus2.addEventListener("click", setPlus2);
panelminus2.addEventListener("click", setMinus2);

// 시작 클릭 -> 꽝 배정 -> 카드 뒤집기
var cards = document.querySelectorAll(".cards li");
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});



// createUL().then(
//     function (value) {
//         var cards = document.querySelectorAll(".cards li");
//         cards.forEach(card => {
//             card.addEventListener("click", flipCard);
//         });
//     },
//     function (error) { console.log(error); }
// );

