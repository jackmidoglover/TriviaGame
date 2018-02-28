var one = {
    question: "Which of these houses is not from the North?",
    a: "Manderly",
    b: "Glover",
    right: "Frey",
    d: "Mormont",
}

$(document).ready(function(){
function flashcard(card) {
    var questionText = "";
    var tfValue = Object.keys(card).slice(1);
    var cardAnswers = Object.values(card).slice(1);

    questionText += card.question;
    $("#question").html(questionText);

    for (i = 0; i < cardAnswers.length; i++) {
        var answerButton = $("<input type='radio' name='choice'>").addClass("radio-inline").attr("id", tfValue[i])
        // $(answerButton).addClass("choices").text(cardAnswers[i])
        console.log(cardAnswers[i] + "cardAnswers");
        // $(answerButton).attr({"id": tfValue[i], "name" : "choice", "type" : "radio"});
        console.log(tfValue[i]);
        // $(answerButton).attr("name", "choice");
        $("#answers").append(
            $("<div>").addClass("container radio")
            .append(answerButton)
                .append(
                $("<label>")
                .attr("for", tfValue[i])
                .text(cardAnswers[i])
                // .attr("for", tfValue[i]), answerButton
                // .append(answerButton)
            )                
    
        );
        $("#answers").append("<br>");
    }    
}
flashcard(one);
});