function showAnswer(n,t) {
    var question = document.querySelector(".all-questions .question-box:nth-child(" + n + ")");
    var icon = document.querySelector(".question-box:nth-child(" + n + ") div button img");
    if(question.style.maxHeight == "2rem" ) {
        question.style.maxHeight = "10rem";
        question.style.overflowY = "hidden";
        question.style.transition = "all 500ms cubic-bezier(0.17, 0.04, 0.03, 0.94)";
        icon.style.transform = "rotate(180deg)"
    }
    
    else {
        question.style.maxHeight = "2rem"
        icon.style.transform = "rotate(0deg)"
    }

    t.style.fontWeight=t.style.fontWeight=="bold"?"normal":"bold";
}


