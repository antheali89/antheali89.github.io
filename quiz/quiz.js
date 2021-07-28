"use strict";
(function () {
  let total_cc = 0;
  let total_da = 0;
  let total_ecore = 0;
  let numAnswered = 0;

  let questions = [
    {
      question: "fabric",
      choices: {
        choice1: {
          choice: "linen",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
        choice2: {
          choice: "leather",
          weights: {
            DA: 4,
            CC: 1,
            EC: 3,
          },
        },
        choice3: {
          choice: "spandex",
          weights: {
            DA: 2,
            CC: 0,
            EC: 4,
          },
        },
        choice4: {
          choice: "denim",
          weights: {
            DA: 3,
            CC: 3,
            EC: 3,
          },
        },
      },
    },
    {
      question: "scent",
      choices: {
        choice1: {
          choice: "bread",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice2: {
          choice: "leather1",
          weights: {
            DA: 3,
            CC: 2,
            EC: 4,
          },
        },
        choice3: {
          choice: "jasmine",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
        choice4: {
          choice: "gas",
          weights: {
            DA: 2,
            CC: 0,
            EC: 4,
          },
        },
      },
    },
    {
      question: "freeDay",
      choices: {
        choice1: {
          choice: "reading",
          weights: {
            DA: 4,
            CC: 3,
            EC: 2,
          },
        },
        choice2: {
          choice: "baking",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice3: {
          choice: "sleeping",
          weights: {
            DA: 1,
            CC: 2,
            EC: 4,
          },
        },
        choice4: {
          choice: "hiking",
          weights: {
            DA: 3,
            CC: 4,
            EC: 2,
          },
        },
      },
    },
    {
      question: "pet",
      choices: {
        choice1: {
          choice: "whitecat",
          weights: {
            DA: 2,
            CC: 2,
            EC: 0,
          },
        },
        choice2: {
          choice: "blackcat",
          weights: {
            DA: 3,
            CC: 1,
            EC: 4,
          },
        },
        choice3: {
          choice: "dog",
          weights: {
            DA: 2,
            CC: 3,
            EC: 2,
          },
        },
        choice4: {
          choice: "bunny",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
      },
    },
    {
      question: "food",
      choices: {
        choice1: {
          choice: "cafe",
          weights: {
            DA: 3,
            CC: 3,
            EC: 3,
          },
        },
        choice2: {
          choice: "upscale",
          weights: {
            DA: 4,
            CC: 1,
            EC: 3,
          },
        },
        choice3: {
          choice: "park",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice4: {
          choice: "hole",
          weights: {
            DA: 2,
            CC: 1,
            EC: 4,
          },
        },
      },
    },
  ];

  let qLocation = document.getElementsByClassName("questionBanner");

  window.addEventListener("load", init);

  function init() {
    let choices = document.querySelectorAll("input");
    for (let choice of choices) {
      choice.addEventListener("change", getAnswers);
    }
  }

  function getAnswers() {
    let selectedNum = this.dataset["number"];
    let questionText = this.name;
    let question = questions.find((q) => q.question === questionText);

    let selectedChoice = question.choices["choice" + selectedNum];
    total_da += selectedChoice.weights.DA;
    total_cc += selectedChoice.weights.CC;
    total_ecore += selectedChoice.weights.EC;
    numAnswered++;

    // check if quiz is complete
    if (numAnswered === questions.length) {
      finishQuiz();
    }
    console.log(qLocation); //test
    window.scrollTo({
      top: qLocation[numAnswered].offsetTop,
      behavior: "smooth"
    });
  }

  function finishQuiz() {
    let max_val = Math.max(total_cc, total_da, total_ecore);
    let resultLink = document.getElementById("results-link");
    //var resultImg = document.getElementById("resultImg");

    resultLink.classList.remove("hidden");
    if (max_val === total_cc) {
      resultLink.setAttribute("href", "/cottagecore/ccIndex.html");
      /*resultImg.src = "images/cottagecore.jpg";*/
    } else if (max_val === total_da) {
      resultLink.setAttribute("href", "/darkacademia/DA_Index.html");
      resultHeader.innerHTML =
        "<a href='/darkacademia/DA_Index.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
      /*resultImg.src = "images/darkacademia.jpg";*/
    } else {
      resultLink.setAttribute("href", "/ecore/eIndex.html");
      /*resultImg.src = "images/e-core.jpg";*/
    }
  }
})();
