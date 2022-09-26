//https://github.com/wonseok22/ToyProjects/tree/main/cardGame 참고

let cardOne, cardTwo; // 선택한 카드
let disableDeck = false;

function randomShuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// 총개수  꽝개수 
function setPlus(e) {
    var val = parseInt(document.getElementById("set__boom").children[2].value);
    var total = parseInt(document.getElementById("set__total").children[2].value);
    if (total < 10 && val <= total) {
        document.getElementById("set__total").children[2].value = total + 1;
    }
    deleteUL();
    createUL(document.getElementById("set__total").children[2].value);

}

function setMinus(e) {
    var val = parseInt(document.getElementById("set__boom").children[2].value);
    var total = parseInt(document.getElementById("set__total").children[2].value);
    if (total > 2 && val < total) {
        document.getElementById("set__total").children[2].value = total - 1;
    }
    deleteUL();
    createUL(document.getElementById("set__total").children[2].value);
}

function setPlus2(e) {

    var val = parseInt(document.getElementById("set__boom").children[2].value);
    var total = parseInt(document.getElementById("set__total").children[2].value);
    if (val < 10 && val < total) {
        document.getElementById("set__boom").children[2].value = val + 1;
    }
}

function setMinus2(e) {

    var val = parseInt(document.getElementById("set__boom").children[2].value);
    var total = parseInt(document.getElementById("set__total").children[2].value);
    if (val > 2 && val <= total) {
        document.getElementById("set__boom").children[2].value = val - 1;
    }
}

// 카드 개수 초기화 
async function deleteUL() {
    var ul = document.querySelector(".cards");
    while (ul.firstChild) {
        ul.firstChild.remove()
    }
}
// 카드 개수 입력만큼 생성
function createUL(num) {
    for (let i = 0; i < num; i++) {
        var ul = document.querySelector(".cards");
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var img1 = document.createElement("img");
        // Add img src
        img1.src = "./img/question.png";
        img1.alt = "question.png"
        // Add img child
        div1.appendChild(img1);
        // Add classlist
        div1.classList.add("view");
        div1.classList.add("front");

        li.append(div1);
        ul.appendChild(li);
    }
}


function createBoom(num, boomNum) {
    var ul = document.querySelector(".cards");
    var lis = ul.getElementsByTagName("li");

    // make array grapes: 통과 cupcake: 꽝
    boomName = "bomb.png";
    boomarr = Array(boomNum).fill(boomName);

    passName = "smile.png";
    passarr = Array(num - boomNum).fill(passName);

    let imgarr = boomarr.concat(passarr);
    imgarr = randomShuffle(imgarr);

    let idx = 0;
    for (let li of lis) {
        var div2 = document.createElement("div");
        var img2 = document.createElement("img");
        // Add img src
        img2.src = "./img/" + imgarr[idx];
        img2.alt = imgarr[idx];
        // Add img child
        div2.appendChild(img2);
        // Add classlist
        div2.classList.add("view");
        div2.classList.add("back");
        li.append(div2);
        idx++;
    }

    // li.append(div2);
    // ul.appendChild(li);

}

function flipCard(e) {
    let clickedCard = e.target;

    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");

        if (!cardOne) {
            return cardOne = clickedCard
        }
        cardTwo = clickedCard;
    }
}

function startClick() {
    // 시작 클릭 -> 꽝 배정 -> 카드 뒤집기
    var val = parseInt(document.getElementById("set__boom").children[2].value);
    var total = parseInt(document.getElementById("set__total").children[2].value);
    createBoom(total, val);
    var cards = document.querySelectorAll(".cards li");
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });

}


function setOption() {
    // Set Option
    var panelplus = document.querySelector("#set__total .plus");
    var panelminus = document.querySelector("#set__total .minus");
    panelplus.addEventListener("click", setPlus);
    panelminus.addEventListener("click", setMinus);

    var panelplus2 = document.querySelector("#set__boom .plus");
    var panelminus2 = document.querySelector("#set__boom .minus");
    panelplus2.addEventListener("click", setPlus2);
    panelminus2.addEventListener("click", setMinus2);

}

function removeOption() {
    // Set Option
    var panelplus = document.querySelector("#set__total .plus");
    var panelminus = document.querySelector("#set__total .minus");
    var panelplus2 = document.querySelector("#set__boom .plus");
    var panelminus2 = document.querySelector("#set__boom .minus");
    var panelstart = document.querySelector("#set__start .start");
    var panelinit = document.querySelector("#set__init .init");

    panelinit.style.display = 'none';
    // start
    panelstart.addEventListener("click", function () {
        startClick();
        panelstart.style.display = 'none';
        //panelstart.remove();
        panelplus.removeEventListener("click", setPlus);
        panelminus.removeEventListener("click", setMinus);
        panelplus2.removeEventListener("click", setPlus2);
        panelminus2.removeEventListener("click", setMinus2);

        // 카드 흔들기
        var cards = document.querySelectorAll(".cards li");
        console.log(cards);
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.add("shake");
            }, 400);
    
            setTimeout(() => {
                card.classList.remove("shake");
            }, 1200);
        });

        panelinit.style.display = '';
        panelinit.addEventListener("click", initOption);
    });
}
// 다시하기 버튼
function initOption(){
    var panelinit = document.querySelector("#set__init .init");
    var panelstart = document.querySelector("#set__start .start");
    panelstart.style.display = '';
    panelinit.style.display = 'none';
    //panelinit.remove();
    
    var panelplus = document.querySelector("#set__total .plus");
    var panelminus = document.querySelector("#set__total .minus");
    var panelplus2 = document.querySelector("#set__boom .plus");
    var panelminus2 = document.querySelector("#set__boom .minus");
    panelplus.addEventListener("click", setPlus);
    panelminus.addEventListener("click", setMinus);
    panelplus2.addEventListener("click", setPlus2);
    panelminus2.addEventListener("click", setMinus2);

    deleteUL().then(
        function(value) { createUL(document.getElementById("set__total").children[2].value);},
        function(error) { throw(error); }
      );
}

// main
setOption();
removeOption();
// init first cards 5
createUL(document.getElementById("set__total").children[2].value);