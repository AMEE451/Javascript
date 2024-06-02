let questions = [
  {
    "question": "What is the correct syntax for referring to an external script called 'script.js'?",
    "options": {
      "A": "script name='script.js'",
      "B": "script src='script.js'",
      "C": "script href='script.js'",
      "D": "script ref='script.js'"
    },
    "correct":  "B"
  },
  {
    "question": "How do you write 'Hello World' in an alert box?",
    "options": {
      "A": "msg('Hello World');",
      "B": "alertBox('Hello World');",
      "C": "alert('Hello World');",
      "D": "msgBox('Hello World');"
    },
    "correct":  "C"
  },
  {
    "question": "Which of the following is not a reserved word in JavaScript?",
    "options": {
      "A": "interface",
      "B": "throws",
      "C": "program",
      "D": "short"
    },
    "correct": "C"
  },
  {
    "question": "What is the correct way to write a JavaScript array?",
    "options": {
      "A": "var colors = (1:'red', 2:'green', 3:'blue')",
      "B": "var colors = 'red', 'green', 'blue'",
      "C": "var colors = ['red', 'green', 'blue']",
      "D": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    },
    "correct": "C"
  },
  {
    "question": "Which event occurs when the user clicks on an HTML element?",
    "options": {
      "A": "onchange",
      "B": "onclick",
      "C": "onmouseclick",
      "D": "onmouseover"
    },
    "correct":  "B"
  },
  {
    "question": "How do you declare a JavaScript variable?",
    "options": {
      "A": "variable carName;",
      "B": "var carName;",
      "C": "v carName;",
      "D": "string carName;"
    },
    "correct": "B"
  },
  {
    "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
    "code": "<p id='demo'>This is a demonstration.</p>",
    "options": {
      "A": "document.getElementById('demo').innerHTML = 'Hello World!';",
      "B": "document.getElementByName('demo').innerHTML = 'Hello World!';",
      "C": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
      "D": "document.getElement('p').innerHTML = 'Hello World!';"
    },
    "correct":  "A"
  },
  {
    "question": "How do you create a function in JavaScript?",
    "options": {
      "A": "function myFunction()",
      "B": "function:myFunction()",
      "C": "function = myFunction()",
      "D": "function => myFunction()"
    },
    "correct": "A"
  },
  {
    "question": "How do you call a function named 'myFunction'?",
    "options": {
      "A": "call myFunction()",
      "B": "call function myFunction()",
      "C": "myFunction()",
      "D": "Call.myFunction()"
    },
    "correct":  "C"
  },
  {
    "question": "How can you add a comment in JavaScript?",
    "options": {
      "A": "'This is a comment",
      "B": "<!--This is a comment-->",
      "C": "//This is a comment",
      "D": "*This is a comment*"
    },
    "correct": "C"
  },
  {
    "question": "What will the following code return: Boolean(10 > 9)?",
    "options": {
      "A": "false",
      "B": "true",
      "C": "NaN",
      "D": "undefined"
    },
    "correct":  "B"
  },
  {
    "question": "Which operator is used to assign a value to a variable?",
    "options": {
      "A": "*",
      "B": "x",
      "C": "=",
      "D": "-"
    },
    "correct":  "C"
  },
  {
    "question": "What is the correct JavaScript syntax to write 'Hello World'?",
    "options": {
      "A": "('Hello World')",
      "B": "document.write('Hello World')",
      "C": "response.write('Hello World')",
      "D": "('Hello World').document.write"
    },
    "correct": "B"
  },
  {
    "question": "Which method can be used to find the length of a string?",
    "options": {
      "A": "length()",
      "B": "getLength()",
      "C": "strlen()",
      "D": "length"
    },
    "correct": "D"
  },
  {
    "question": "Which built-in method sorts the elements of an array?",
    "options": {
      "A": "changeOrder(order)",
      "B": "order()",
      "C": "sort()",
      "D": "arrange()"
    },
    "correct":"C"
  },
  {
    "question": "Which of the following is a way to create an object in JavaScript?",
    "options": {
      "A": "var obj = {};",
      "B": "var obj = ();",
      "C": "var obj = [];",
      "D": "var obj = <>;"
    },
    "correct":  "A"
  },
  {
    "question": "How do you round the number 7.25 to the nearest integer?",
    "options": {
      "A": "Math.rnd(7.25)",
      "B": "Math.round(7.25)",
      "C": "rnd(7.25)",
      "D": "round(7.25)"
    },
    "correct": "B"
  },
  {
    "question": "How can you detect the client’s browser name?",
    "options": {
      "A": "navigator.appName",
      "B": "browser.name",
      "C": "client.navName",
      "D": "window.browser"
    },
    "correct": "A"
  },
  {
    "question": "Which JavaScript method is used to access an HTML element by id?",
    "options": {
      "A": "getElementById()",
      "B": "getElement(id)",
      "C": "getElementByID()",
      "D": "getIdElement()"
    },
    "correct":  "A"
  }
];

  const uimaker=()=>{

    document.querySelector("#quiz").innerHTML=""

    questions.map((ele,index) => {

      let que = document.createElement("h3");
      que.innerHTML =ele.question;
      que.setAttribute("class", "que")
      let opt1 = document.createElement("p");
      opt1.innerHTML = ele.options.A;
      opt1.setAttribute("class", "opt")
      let opt2 = document.createElement("p");
      opt2.innerHTML = ele.options.B;
      opt2.setAttribute("class", "opt")
      let opt3 = document.createElement("p");
      opt3.innerHTML = ele.options.C;
      opt3.setAttribute("class", "opt")
      let opt4 = document.createElement("p");
      opt4.innerHTML = ele.options.D;
      opt4.setAttribute("class", "opt")
    
      opt1.addEventListener("click", () => {
        if ("A" == ele.correct) {
          opt1.style.backgroundColor = "rgb(106, 216, 132)";
        }
        else {
          opt1.style.backgroundColor = "rgb(248, 113, 113)";
        }
      })
    
      opt2.addEventListener("click", () => {
        if ("B" == ele.correct) {
          opt2.style.backgroundColor= "rgb(106, 216, 132)";
        }
        else {
          opt2.style.backgroundColor = "rgb(248, 113, 113)";
        }
      })
    
      opt3.addEventListener("click", () => {
        if ("C" == ele.correct) {
          opt3.style.backgroundColor = "rgb(106, 216, 132)";
        }
        else {
          opt3.style.backgroundColor = "rgb(248, 113, 113)";
        }
      })
    
      opt4.addEventListener("click", () => {
        if ("D"== ele.correct) {
          opt4.style.backgroundColor = "rgb(106, 216, 132)";
        }
        else {
          opt4.style.backgroundColor = "rgb(248, 113, 113)";
        }
      })
    
      let maindiv = document.createElement("div");
      maindiv.append(que, opt1, opt2, opt3, opt4);
  
      document.querySelector("#quiz").append(maindiv)
    
    })
}

const handledata=(e)=>{
  e.preventDefault();

    let New={
      question:document.getElementById("add").value,
      options:{
      A:document.getElementById("optA").value,
      B:document.getElementById("optB").value,
      C:document.getElementById("optC").value,
      D:document.getElementById("optD").value,
      },
      correct:document.getElementById("ans").value
      
    }
    questions.push(New);
    uimaker();

}

uimaker()
document.querySelector("#form").addEventListener("submit", handledata)