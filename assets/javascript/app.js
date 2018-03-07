var triviaCard = {
 one : {
    right: "./assets/images/johnghost.gif",
    rightText: "You're right! Here's a puppy.",
    wrong: "./assets/images/knownothing.gif",
    wrongText: "You know nothing, Jon Snow.",
    question: "Which of these houses is not from the North?",
    a: "Manderly",
    b: "Glover",
    c: "Frey",
    d: "Mormont",
},
two : {
    right: "./assets/images/renlyclapping.gif",
    rightText: "Correct!",
    wrong: "./assets/images/samno.gif",
    wrongText: "No.",
    question: "What was the name of the maester at Winterfell?",
    c: "Luwin",
    d: "Aemon",
    b: "Pycelle",
    a: "Wolkan",
},
three : {
    right: "./assets/images/tyrionbronasha.gif",
    rightText: "We're having fun!",
    wrong: "./assets/images/tyrionslap.gif",
    wrongText: "Idiot!",
    question: "Who were the first men to colonize the continent of Westeros?",
    a: "The Targaryens", 
    c: "The Andals",
    b: "The Children of the Forest",
    d: "The Wildlings",
},
four : {
    right: "./assets/images/margeryolenna.gif",
    rightText: "You deserve a hug.",
    wrong: "./assets/images/joffreysmacked.gif",
    wrongText: "Idiot!",
    question: "Who is the Blackfish?",
    a: "Lisa Arryn's father",
    b: "Sansa Stark's uncle",
    d: "The Lord of Greywater Watch",
    c: "Catelyn Stark's uncle",
},
five : {
    right: "./assets/images/tyriondance.gif",
    rightText: "Aww yeah, you're on a roll!",
    wrong: "./assets/images/elyriasand.gif",
    wrongText: "Why can't you get anything right?",
    question: "Which of these names is not a surname for a bastard?",
    c: "Graves",
    d: "Waters",
    b: "Pyke",
    a: "Sand",
},
six : {
    right: "./assets/images/valarmorghulis.gif",
    rightText: "Valar Morghulis",
    wrong: "./assets/images/waifstab.gif",
    wrongText: "SO WRONG YOU DIE!",
    question: "Which of these is not a god worshipped in Westeros?",
    b: "The Stranger",
    c: "The Many-Faced God",
    a: "The Old Gods of the Forest",
    d: "The Drowned God",
},
seven : {
    right: "./assets/images/sandor.gif",
    rightText: "That's right. The Hound ain't afraid of no STDs.",
    wrong: "./assets/images/burningblade.gif",
    wrongText: "You're <b>fire</b>d.",
    question: "What is Sandor Clegane's greatest fear?",
    a: "The White Walkers",
    d: "STDs",
    c: "Fire",
    b: "Drowning",
},
eight : {
    right: "./assets/images/jaimenice.gif",
    rightText: "Golden.",
    wrong: "./assets/images/cersei.gif",
    wrongText: "Come on, seriously?",
    question: "Which kingdom do the Lannisters rule?",
    c: "The Westerlands",
    b: "The Stormlands",
    d: "Casterly Rock",
    a: "The Reach"
},
nine : {
    right: "./assets/images/dany-thumbsup.gif",
    rightText: "You got it!",
    wrong: "./assets/images/moondoor.gif",
    wrongText: "TIME TO FLY!!",
    question: "Which of these is the sigil of House Arryn?",
    a: "<img class= 'img thumbnail' src='./assets/images/sigila.png'>",
    b: "<img class= 'img thumbnail' src='./assets/images/sigilb.png'>",
    c: "<img class= 'img thumbnail' src='./assets/images/sigilc.png'>",
    d: "<img class= 'img thumbnail' src='./assets/images/sigild.png'>",
},
ten : {
    right: "./assets/images/danyfire.gif",
    rightText: "You are on fire!",
    wrong: "./assets/images/dothrakifail.gif",
    wrongText: "Fail!",
    question: "Where was Daenerys Targaryen born?",
    a: "King's Landing",
    b: "Harrenhal",
    d: "Storm's End",
    c: "Dragonstone",
}
}
// global game variables
var rights = 0;
var wrongs = 0;
var unanswered = 0;
var gameTimer = 16;
var deck = Object.keys(triviaCard);
var index = 0;
var deckIndex = deck[index];
var intervalID;
var isAnswered = false;
var themeSong = document.createElement('audio');
var failSound = document.createElement('audio');
var winSound = document.createElement('audio');
themeSong.setAttribute('src' ,'assets/sounds/gottheme.mp3');
failSound.setAttribute('src', 'assets/sounds/shame.mp3');
winSound.setAttribute('src', 'assets/sounds/KingInTheNorth.mp3');


$(document).ready(function(){

// game start function
function startGame() {
//variables
    index = 0;
    rights = 0;
    wrongs = 0;
    unanswered = 0;
    gameTimer = 16;
    deckIndex = deck[index];
    isAnswered = false;
//clears card, removes centered calls game functions
    $("#answers").removeClass("text-center");
    clearCard();
    flashcard(triviaCard[deckIndex]);
    choosing();
//loads music
    themeSong.load();
    themeSong.play();
    failSound.pause();
    winSound.pause();
}

// primary game function, allows user to choose answers & reacts
var choosing = function(){
    
    $("input").on("click", function() {
    
    var choice = $(this);
    
    if (choice.is("#c")) {
        clearCard();
        rightAnswer();
        isAnswered = true;
            if (isAnswered) {
                deckIndex = deck[index];
                setTimeout(clearCard, 6000)
                setTimeout(flashcard, 6000);
                setTimeout(choosing, 6000);
                stop();
            }
        }
    else {
        clearCard();
        wrongAnswer();
        isAnswered = true;
            if (isAnswered) {
                deckIndex = deck[index];
                setTimeout(clearCard, 6000)
                setTimeout(flashcard, 6000);
                setTimeout(choosing, 6000);
                stop();    
            }
        }
    })
}

// 3 reactions for the choosing & timer function: right, wrong, unanswered
function rightAnswer() {
    deckIndex = deck[index];
    rights++;
    var img = $("<img>").addClass("gif").attr("src", triviaCard[deckIndex].right)
    $("#question").html(triviaCard[deckIndex].rightText);
    $("#answers").append(img);
    $("#timer").empty();
    index++;
    }

function wrongAnswer() {
    deckIndex = deck[index];
    wrongs++;
    var img = $("<img>").addClass("gif").attr("src", triviaCard[deckIndex].wrong)
    $("#question").html(triviaCard[deckIndex].wrongText);
    $("#answers").append(img);
    $("#timer").empty();
    index++;
    }

function noAnswer(){
    index++;
    unanswered++;
    clearCard();
    $("#question").html("Choked, eh?");
    $("#answers").html("<img class='gif' src='./assets/images/gendrychoked.gif'>")
    $("#timer").empty();
    stop();    
    console.log(unanswered);
    }


// function that runs the timer for each card
function timer(x) {

    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
    
    function decrement() {
        gameTimer--;
        $("#timer").html("<h3>" + gameTimer + "</h3>");

        if (gameTimer === 0) {
            stop();
            noAnswer();
            console.log("Times up!")

            if (!isAnswered) {
                deckIndex= deck[index];
                setTimeout(clearCard, 6000)
                setTimeout(flashcard, 6000);
                setTimeout(choosing, 6000);
            }
        }
    }
}

//function that stops the timer
function stop() {
    clearInterval(intervalID);
    gameTimer = 16;
}

// this function pushes the "card" objects to #answers and #question
function flashcard() {

    if (index <= 9) {
        var tfValue = Object.keys(triviaCard[deckIndex]).slice(5);
        var cardAnswers = Object.values(triviaCard[deckIndex]).slice(5);
        isAnswered= false;

//pushes the first property of the card object to #question
        $("#question").html(triviaCard[deckIndex].question);

// dynamically pushes the remaining properties of object to #answers
        for (i = 0; i < cardAnswers.length; i++) {
            var answerButton = $("<input>")
            .addClass("radio")
            .attr({"id": tfValue[i], "name" : "choice", "type" : "radio"})
            $("#answers").append(
            $("<div>").addClass("container radio")
            .append(answerButton)
                .append(
                $("<label>")
                .attr("for", tfValue[i])
                .html(cardAnswers[i])
                )
            );
            $("#answers").append("<br>");
        }
        timer();  
    }
    else {
        endGame();
        stop();
    }
}

// clears #question and #answers
function clearCard() {
    $("#question").empty();
    $("#answers").empty();
    }

// displays results at the end of the game
function endGame() {
    var totalScore = rights / 10 * 100;
    var resultimg;
    var button = $("<button>")
        .addClass("btn btn-sm btn-primary startGame").text("Play Again!");
    themeSong.pause();

        if (rights >= 7) {
            $("#question").html("You win!");
            winSound.load();
            winSound.play();
            resultimg = "./assets/images/dragonwin.gif"
        }
        else {
            $("#question").html("Boo! Read the books, loser!")
            failSound.load();
            failSound.play();
            resultimg = "./assets/images/lose.gif"
        }
    $("#answers").addClass("text-center").html(`
            <p> 
                <img src='${resultimg}'>
            </p>
            <p>
                <h4> You got ` + rights + ` answers right! </h4>
            </p>
            <p>
                <h4> You got ` + wrongs + ` answers wrong! </h4>
            </p>
            <p>
                <h4> You left ` + unanswered + ` questions unanswered. </h4>
            </p>
            <p> 
            <h3> Your total score was ` + totalScore + `% </h3>
            </p>
        `)
        $("#timer").append(button)
}

$(document).on("click", ".startGame", function(){
    startGame();
});

})