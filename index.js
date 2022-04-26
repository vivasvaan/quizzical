(function () {
  // Functions

  function getCategory() {
    let categories = "";
    newQuestions.forEach((value) => {
      let elem = `<div class="category-card" id="${value.category}">
      <img src="assets/image/${value.category
        .replace(" ", "")
        .toLowerCase()}.jpeg" />
      <span class="category-title">${value.category}</span>
      </div>`;
      categories += elem;
    });

    let output = `<div class="category-heading"> 
    <h3>Select Quiz Category</h3>
    <div class="category-btn">
    ${categories}
    </div>
    </div>`;

    // finally combine our output list into one string of HTML and put it on the page
    stepOne.innerHTML = output;

    newQuestions.forEach((value) => {
      let btn = document.getElementById(value.category);
      btn.addEventListener("click", selectedCategory, false);
      btn.param = value.category;
    });
  }

  var quizContainer =
    (stepsContainer =
    resultsContainer =
    resultCommentContainer =
    submitButton =
    previousButton =
    nextButton =
    slides =
    currentSlide =
    numCorrect =
    pieChart =
      "");
  // notAttempted
  var myQuestions = [];
  var resultAudioUrl = (myAudio = "");

  function selectedCategory(evt) {
    // window.alert(evt.currentTarget.param);
    stepOne.style.display = "none";
    stepThree.style.display = "none";
    stepThree.style.visibility = "hidden";
    stepThree.style.opacity = 0;
    quizContainer = document.getElementById("quiz");
    stepsContainer = document.getElementById("steps");
    myAudio = document.getElementById("myAudio");
    // resultsContainer = document.getElementById("results");
    resultCommentContainer = document.getElementById("result-comment");
    submitButton = document.getElementById("submit");
    goback = document.getElementById("goback");
    restart = document.getElementById("restart");
    document.getElementById(
      "selected-category"
    ).innerHTML = `<b>Category:</b> ${evt.currentTarget.param}`;

    // Kick things off
    myQuestions = shuffle(
      newQuestions[
        newQuestions.findIndex((x) => x.category == evt.currentTarget.param)
      ]["questions"]
    );
    buildQuiz();

    // Pagination
    // skipButton = document.getElementById("skipButton");
    previousButton = document.getElementById("previous");
    nextButton = document.getElementById("next");
    slides = document.querySelectorAll(".slide");
    currentSlide = 0;

    setTimeout(() => {
      stepTwo.style.visibility = "visible";
      stepTwo.style.opacity = 1;
      stepTwo.style.display = "block";
      // Show the first slide
      showSlide(currentSlide);
      // Event listeners
      submitButton.addEventListener("click", showResults);
      previousButton.addEventListener("click", showPreviousSlide);
      // skipButton.addEventListener("click", skipQuestion);
      nextButton.addEventListener("click", showNextSlide);
      goback.addEventListener("click", goBack);
      restart.addEventListener("click", goBack);
    });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function buildQuiz() {
    startTimer();
    // variable to store the HTML output
    const output = [];
    const steps = [];
    const stepCount = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      //Steps for questions
      steps.push(
        `<div class="step-count" id="step${questionNumber}">${
          questionNumber + 1
        }</div>`
      );
      stepCount.push(questionNumber);
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
       <input type="radio" name="question${questionNumber}" value="${letter}">
       ${currentQuestion.answers[letter]}
     </label>`
        );
      }

      var imageContainer =
        currentQuestion.type == "image"
          ? `<div class="image"> <img src=${currentQuestion.imageUrl}> </div>`
          : "";
      var audioContainer = "";
      if (currentQuestion.type == "audio") {
        let audioDiv = "";
        currentQuestion.audioUrl.forEach((url, index) => {
          audioDiv += `<div class="audio"> <span>${String.fromCharCode(
            65 + index
          )}</span> <audio controls><source type='audio/wav' src=${url}>Your browser does not support the audio element.</audio> </div>`;
        });
        audioContainer = `<div class="audio-container">${audioDiv}</div>`;
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide ${
          currentQuestion.type
        }" id="question${questionNumber}">
            <div class="question"><b>Question: </b> ${
              currentQuestion.question
            } ${imageContainer} ${audioContainer}</div>
            <div class="answers"> <b style="position: absolute;left: 10px;">Options: </b> <br> ${answers.join(
              ""
            )} </div>
        </div>`
      );
    });

    // finally combine our step list into one string of HTML and put it on the page
    stepsContainer.innerHTML = `<p class="step-heading">Questions</p> ${steps.join(
      ""
    )}`;

    stepCount.forEach((value) => {
      let btn = document.getElementById("step" + value);
      btn.addEventListener("click", goToStep, false);
      btn.step = value;
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function goToStep(e) {
    document
      .getElementById("step" + e.currentTarget.step)
      .classList.add("active-class");
    showSlide(e.currentTarget.step);
  }

  function showResults() {
    clearTimer();
    stepThree.style.visibility = "visible";
    stepThree.style.opacity = 1;
    stepThree.style.display = "flex";

    stepTwo.style.visibility = "hidden";
    stepTwo.style.opacity = 0;
    stepOne.style.display = stepTwo.style.display = "none";

    pieChart = document.getElementById("myChart").getContext("2d");

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    numCorrect = 0;
    // notAttempted = 0;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if(userAnswer){
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
      // }else{
      //   notAttempted++
      // }
    });

    // show number of correct answers out of total
    // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    let percentage = Math.floor((numCorrect / myQuestions.length) * 100);
    let comment = "";
    if (percentage < 60) {
      comment = "Uh-Oh! Better luck next time";
      resultAudioUrl = "assets/audio/losing.wav";
    }
    if (percentage >= 60 && percentage < 80) {
      comment = "Keep up the hard work!";
      resultAudioUrl = "assets/audio/trophy.wav";
    }
    if (percentage >= 80 && percentage < 100) {
      comment = "Great Job";
      resultAudioUrl = "assets/audio/clapping.wav";
    }
    if (percentage == 100) {
      comment = "Perfect! You are the master of this field.";
      resultAudioUrl = "assets/audio/clapping.wav";
    }
    if (percentage >= 80) {
      document.getElementById("celebrations").style.display = "block";
    } else {
      document.getElementById("celebrations").style.display = "none";
    }
    resultCommentContainer.innerHTML = comment;

    showGraphicalRepresentation();
  }

  function showGraphicalRepresentation() {
    let correctAns = Math.floor((numCorrect / myQuestions.length) * 100);
    let wrongAns = Math.ceil(
      ((myQuestions.length - numCorrect) / myQuestions.length) * 100
    );
    var xValues = ["Correct Answer", "Wrong Answer"];
    var yValues = [correctAns, wrongAns];
    var barColors = ["#438b43", "#bd4b4b"];

    pieChart = new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
        },
        plugins: {
          labels: {
            render: function (args) {
              return args.label + ":- " + args.percentage + "%";
            },
            arc: true,
            position: "outside",
            fontSize: 12,
            fontColor: ["black", "black"],
            precision: 0,
          },
        },
        title: {
          display: true,
          text: "Question Statistics",
          fontSize: 20,
        },
        legend: {
          display: false,
        },
      },
    });

    document.getElementById(
      "totalQues"
    ).innerHTML = `<b>Total Question:</b> ${myQuestions.length}`;
    document.getElementById(
      "correctAns"
    ).innerHTML = `<b>Correct Answer:</b> ${numCorrect}`;
    // document.getElementById("notAttempted").innerHTML = `<b>Not Attempted:</b> ${notAttempted}`;
    document.getElementById("wrongAns").innerHTML = `<b>Wrong Answer:</b> ${
      myQuestions.length - numCorrect
    }`;
    document.getElementById("timeTaken").innerHTML = `<b>Time Taken:</b> ${
      document.getElementById("safeTimerDisplay").innerHTML
    }`;
    playAudio();
  }

  function playAudio() {
    var audioPlayer = `<audio id='player'><source type='audio/wav' src=${resultAudioUrl}>Your browser does not support the audio element.</audio>`;
    myAudio.innerHTML = audioPlayer;
    setTimeout(() => {
      var y = document.getElementById("player");
      y.play();
    }, 10);
  }

  var myInterval;
  function startTimer() {
    clearTimer();
    document.getElementById("safeTimerDisplay").style.display = "block";
    document.getElementById("safeTimerDisplay").textContent = "00:00";
    var timer = 1,
      minutes,
      seconds;
    myInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("safeTimerDisplay").textContent =
        minutes + ":" + seconds;

      if (++timer < 0) {
        timer = 0;
      }
    }, 1000);
  }

  function clearTimer() {
    clearInterval(myInterval);
    document.getElementById("safeTimerDisplay").style.display = "none";
  }

  function showSlide(n) {
    // Making step active
    document
      .getElementById("step" + currentSlide)
      .classList.remove("active-step");
    document.getElementById("step" + n).classList.add("active-step");

    // Making step complete if answer given
    const answerContainers = quizContainer.querySelectorAll(".answers");
    const answerContainer = answerContainers[currentSlide];
    const selector = `input[name=question${currentSlide}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer) {
      document.getElementById("step" + currentSlide).classList.add("completed");
    }

    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      //   skipButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      //   skipButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
    document.getElementsByClassName("quiz-container")[0].style.height =
      slides[currentSlide].clientHeight > 200
        ? "" + slides[currentSlide].clientHeight + "px"
        : "200px";
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  //   function skipQuestion(){
  //     showSlide(currentSlide + 1);
  //   }

  // Variables
  const stepOne = document.getElementById("step-one");
  const stepTwo = document.getElementById("step-two");
  const stepThree = document.getElementById("step-three");
  var newQuestions = questions;

  function goBack() {
    clearTimer();
    if (pieChart) pieChart.destroy();
    stepOne.style.display = "block";
    stepTwo.style.visibility = stepThree.style.visibility = "hidden";
    stepTwo.style.display = stepThree.style.display = "none";
    stepTwo.style.opacity = stepThree.style.opacity = 0;
  }

  function getQuizDataFromUrl() {
    var url =
      "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function convertUrlDataForJson() {
    var Data = JSON.parse(getQuizDataFromUrl());
    var json = Data.results;
    var newJson = {};

    newJson["category"] = json[0]["category"];

    for (var i = 0; i < json.length; i++) {
      let data = {
        question: json[i].question,
        answers: { a: "True", b: "False" },
        type: "text",
      };
      data["correctAnswer"] = Object.keys(data.answers).find(
        (key) => data.answers[key] === json[i].correct_answer
      );
      if (!newJson["questions"]) newJson["questions"] = [];
      newJson["questions"].push(data);
    }
    newQuestions.push(newJson);
  }

  convertUrlDataForJson();
  getCategory();
})();
