/*=====================================================
        JAVA TECHKIE PLATFORM
              MASTER SCRIPT.JS
                  PART 1
======================================================*/

/*==========================================
        WAIT FOR PAGE TO LOAD
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Java Techkie Platform Loaded Successfully!");

    initializeTyping();

    initializeNavigation();

    initializeScrollButton();

    initializeReadingProgress();

});


/*==========================================
        UTILITY FUNCTION
==========================================*/

function getElement(id){

    return document.getElementById(id);

}


/*==========================================
        TYPING ANIMATION
==========================================*/

function initializeTyping(){

    const typingElement = document.getElementById("typing");

    if(!typingElement) return;

    const text = typingElement.getAttribute("data-text");

    const speed = Number(typingElement.getAttribute("data-speed")) || 80;

    let index = 0;

    typingElement.innerHTML = "";

    function type(){

        if(index < text.length){

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, speed);

        }

    }

    type();

}


/*==========================================
      SMOOTH NAVIGATION
==========================================*/

function initializeNavigation(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/*==========================================
      ACTIVE NAVIGATION LINK
==========================================*/

const currentPage=window.location.pathname.split("/").pop();

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    const page=link.getAttribute("href");

    if(page===currentPage){

        link.classList.add("active");

    }

});


/*==========================================
      MOBILE MENU SUPPORT
==========================================*/

function toggleMenu(){

    const menu=document.querySelector(".nav-links");

    if(menu){

        menu.classList.toggle("show");

    }

}


/*==========================================
      SCROLL TO TOP BUTTON
==========================================*/

function initializeScrollButton(){

    const btn=document.getElementById("topBtn");

    if(!btn) return;

    window.addEventListener("scroll",function(){

        if(document.documentElement.scrollTop>300){

            btn.style.display="block";

        }

        else{

            btn.style.display="none";

        }

    });

    btn.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==========================================
      READING PROGRESS BAR
==========================================*/

function initializeReadingProgress(){

    const progressBar=document.getElementById("readingProgress");

    if(!progressBar) return;

    window.addEventListener("scroll",function(){

        const scrollTop=document.documentElement.scrollTop;

        const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const percentage=(scrollTop/scrollHeight)*100;

        progressBar.style.width=percentage+"%";

    });

}

function showAnswer(){

document.getElementById("thinkAnswer").innerHTML=

`
<h3>Possible Variables</h3>

<ul>

<li>patientName</li>

<li>patientAge</li>

<li>doctorName</li>

<li>roomNumber</li>

<li>billAmount</li>

</ul>

`;

}

function practice(){

document.getElementById("practiceAnswer").innerHTML=

`
<div class="code-box">

String name = "Suriya";<br><br>

int age = 21;<br><br>

String college = "Holy Cross College";<br><br>

String course = "MCA";

</div>

`;

}

function quiz(id,answer){

if(answer)

document.getElementById(id).innerHTML=

"✅ Correct!";

else

document.getElementById(id).innerHTML=

"❌ Incorrect. Try Again.";

}
/*=========================================================
        JAVA TECHKIE PLATFORM
        MASTER SCRIPT.JS
        PART 1A
        Core Initialization & Utility Functions
==========================================================*/

"use strict";

/*---------------------------------------------------------
                WAIT UNTIL PAGE LOADS
----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("================================");
    console.log("Java Techkie Platform Started");
    console.log("================================");

    initializeWebsite();

});


/*---------------------------------------------------------
            INITIALIZE ENTIRE WEBSITE
----------------------------------------------------------*/

function initializeWebsite(){

    initializeTyping();

    initializeNavigation();

    initializeScrollTop();

    initializeReadingProgress();

    initializeTooltips();

}


/*---------------------------------------------------------
            SHORTCUT FUNCTIONS
----------------------------------------------------------*/

/* Get element using ID */

function get(id){

    return document.getElementById(id);

}

/* Get first matching element */

function select(selector){

    return document.querySelector(selector);

}

/* Get all matching elements */

function selectAll(selector){

    return document.querySelectorAll(selector);

}


/*---------------------------------------------------------
        SHOW MESSAGE IN CONSOLE
----------------------------------------------------------*/

function log(message){

    console.log(message);

}


/*---------------------------------------------------------
            RANDOM NUMBER
----------------------------------------------------------*/

function randomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}


/*---------------------------------------------------------
            CURRENT DATE
----------------------------------------------------------*/

function currentDate(){

    return new Date().toLocaleDateString();

}


/*---------------------------------------------------------
        CURRENT TIME
----------------------------------------------------------*/

function currentTime(){

    return new Date().toLocaleTimeString();

}


/*---------------------------------------------------------
            SAVE DATA
----------------------------------------------------------*/

function saveData(key,value){

    localStorage.setItem(key,JSON.stringify(value));

}


/*---------------------------------------------------------
            LOAD DATA
----------------------------------------------------------*/

function loadData(key){

    const data=localStorage.getItem(key);

    return data ? JSON.parse(data):null;

}


/*---------------------------------------------------------
            REMOVE DATA
----------------------------------------------------------*/

function removeData(key){

    localStorage.removeItem(key);

}


/*---------------------------------------------------------
            SHOW ALERT
----------------------------------------------------------*/

function showAlert(message){

    alert(message);

}


/*---------------------------------------------------------
            CONFIRM BOX
----------------------------------------------------------*/

function confirmBox(message){

    return confirm(message);

}


/*---------------------------------------------------------
            COPY TEXT
----------------------------------------------------------*/

function copyText(text){

    navigator.clipboard.writeText(text);

}


/*---------------------------------------------------------
        SCROLL TO ELEMENT
----------------------------------------------------------*/

function scrollToElement(id){

    const element=get(id);

    if(element){

        element.scrollIntoView({

            behavior:"smooth"

        });

    }

}


/*---------------------------------------------------------
        ENABLE/DISABLE BUTTON
----------------------------------------------------------*/

function disableButton(id){

    const button=get(id);

    if(button){

        button.disabled=true;

    }

}

function enableButton(id){

    const button=get(id);

    if(button){

        button.disabled=false;

    }

}


/*---------------------------------------------------------
        SHOW ELEMENT
----------------------------------------------------------*/

function show(id){

    const element=get(id);

    if(element){

        element.style.display="block";

    }

}


/*---------------------------------------------------------
        HIDE ELEMENT
----------------------------------------------------------*/

function hide(id){

    const element=get(id);

    if(element){

        element.style.display="none";

    }

}


/*---------------------------------------------------------
        TOGGLE ELEMENT
----------------------------------------------------------*/

function toggle(id){

    const element=get(id);

    if(!element) return;

    if(element.style.display==="none"){

        element.style.display="block";

    }

    else{

        element.style.display="none";

    }

}


/*---------------------------------------------------------
            LOADING MESSAGE
----------------------------------------------------------*/

function loading(){

    console.log("Loading...");

}


/*---------------------------------------------------------
        WEBSITE VERSION
----------------------------------------------------------*/

const WEBSITE_NAME="Java Techkie Platform";

const VERSION="1.0";

console.log(WEBSITE_NAME);

console.log("Version :",VERSION);


/*---------------------------------------------------------
        EMPTY PLACEHOLDER FUNCTIONS

These will be completed later.
----------------------------------------------------------*/
/*=========================================================
            TYPING ANIMATION
=========================================================*/

function initializeTyping() {

    // Find all typing elements
    const typingElements = document.querySelectorAll(".typing");

    // If none exist, do nothing
    if (typingElements.length === 0) return;

    // Apply typing effect to every element
    typingElements.forEach(element => {

        const text = element.dataset.text || "";
        const speed = parseInt(element.dataset.speed) || 80;

        typeWriter(element, text, speed);

    });

}


/*=========================================================
                TYPE WRITER FUNCTION
=========================================================*/

function typeWriter(element, text, speed) {

    let index = 0;

    element.innerHTML = "";

    function type() {

        if (index < text.length) {

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, speed);

        }

    }

    type();

}
/*=========================================================
        JAVA TECHKIE PLATFORM
            PART 1D
        SCROLL FEATURES
=========================================================*/


/*==========================================
        INITIALIZE SCROLL FEATURES
==========================================*/

function initializeScrollTop(){

    createScrollTopButton();

    showScrollButton();

}


/*==========================================
        CREATE SCROLL BUTTON
==========================================*/

function createScrollTopButton(){

    if(document.getElementById("topBtn")) return;

    const button=document.createElement("button");

    button.id="topBtn";

    button.innerHTML="⬆";

    button.title="Back to Top";

    document.body.appendChild(button);

    button.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==========================================
        SHOW / HIDE BUTTON
==========================================*/

function showScrollButton(){

    const button=get("topBtn");

    if(!button) return;

    window.addEventListener("scroll",function(){

        if(window.scrollY>300){

            button.style.display="block";

        }

        else{

            button.style.display="none";

        }

    });

}


/*==========================================
        READING PROGRESS BAR
==========================================*/

function initializeReadingProgress(){

    createReadingBar();

    updateReadingProgress();

}


/*==========================================
        CREATE PROGRESS BAR
==========================================*/

function createReadingBar(){

    if(document.querySelector(".reading-container")) return;

    const container=document.createElement("div");

    container.className="reading-container";

    const progress=document.createElement("div");

    progress.id="readingProgress";

    container.appendChild(progress);

    document.body.prepend(container);

}


/*==========================================
        UPDATE PROGRESS
==========================================*/

function updateReadingProgress(){

    const progress=get("readingProgress");

    if(!progress) return;

    window.addEventListener("scroll",function(){

        const scrollTop=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const percent=(scrollTop/height)*100;

        progress.style.width=percent+"%";

    });

}


/*==========================================
        REVEAL ANIMATION
==========================================*/

window.addEventListener("scroll",revealSections);

window.addEventListener("load",revealSections);

function revealSections(){

    const sections=document.querySelectorAll(".reveal");

    sections.forEach(section=>{

        const windowHeight=window.innerHeight;

        const top=section.getBoundingClientRect().top;

        const visible=120;

        if(top<windowHeight-visible){

            section.classList.add("active-reveal");

        }

    });

}


/*==========================================
        FADE HERO IMAGE
==========================================*/

window.addEventListener("scroll",function(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.style.opacity=1-window.scrollY/900;

});


/*==========================================
        SCROLL PERCENTAGE
==========================================*/

window.addEventListener("scroll",function(){

    const indicator=get("scrollPercentage");

    if(!indicator) return;

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const percent=Math.round((scrollTop/height)*100);

    indicator.innerHTML=percent+"%";

});
/*====================================
        JAVA TECHKIE PLATFORM
            PART - 2
====================================*/


/*====================================
        SAVE NOTES
====================================*/

function saveNotes(){

    let notes = document.getElementById("notes").value;

    localStorage.setItem("studentNotes", notes);

    alert("Notes Saved Successfully!");

}


/*====================================
        LOAD NOTES
====================================*/

function loadNotes(){

    let notes = localStorage.getItem("studentNotes");

    if(notes){

        document.getElementById("notes").value = notes;

    }

}

window.onload = loadNotes;


/*====================================
        QUIZ
====================================*/

function checkAnswer(answer, correct){

    if(answer==correct){

        alert("✅ Correct Answer");

    }

    else{

        alert("❌ Wrong Answer");

    }

}


/*====================================
      LESSON COMPLETION
====================================*/

function completeLesson(){

    localStorage.setItem("Variables","Completed");

    document.getElementById("status").innerHTML="🏆 Lesson Completed";

}


/*====================================
        STAR RATING
====================================*/

function rate(stars){

    localStorage.setItem("rating",stars);

    document.getElementById("ratingResult").innerHTML=

    "Thank You! You Rated ⭐ "+stars;

}
function completeLesson(topic){

    localStorage.setItem(topic,"Completed");

    document.getElementById("status").innerHTML =
    "🏆 " + topic + " Completed";

}
/*=========================================
        JAVA TECHKIE PLATFORM
              PART - 3
==========================================*/


/*=========================================
        COPY CODE BUTTON
==========================================*/

function copyCode(id){

    let code = document.getElementById(id).innerText;

    navigator.clipboard.writeText(code);

    alert("Code Copied Successfully!");

}


/*=========================================
        SEARCH TOPICS
==========================================*/

function searchTopic(){

    let input = document.getElementById("search").value.toUpperCase();

    let list = document.getElementById("topicList");

    let items = list.getElementsByTagName("li");

    for(let i=0;i<items.length;i++){

        let text = items[i].innerText;

        if(text.toUpperCase().indexOf(input)>-1){

            items[i].style.display="";

        }

        else{

            items[i].style.display="none";

        }

    }

}


/*=========================================
        ANIMATED COUNTER
==========================================*/

function counter(id,target){

    let count=0;

    let speed=20;

    let update=setInterval(function(){

        count++;

        document.getElementById(id).innerHTML=count;

        if(count>=target){

            clearInterval(update);

        }

    },speed);

}


/*=========================================
        START COUNTERS
==========================================*/

window.addEventListener("load",function(){

    if(document.getElementById("lessonCount")){

        counter("lessonCount",25);

    }

    if(document.getElementById("quizCount")){

        counter("quizCount",60);

    }

    if(document.getElementById("projectCount")){

        counter("projectCount",10);

    }

});


/*=========================================
        CERTIFICATE
==========================================*/

function showCertificate(){

    alert("🎉 Congratulations!\n\nYou have successfully completed the Java Techkie Platform.\n\nCertificate Unlocked!");

}


/*=========================================
        DARK MODE
==========================================*/

function darkMode(){

    document.body.classList.toggle("dark");

}
const typingElements = document.querySelectorAll(".typing");

typingElements.forEach(element => {

    const text = element.dataset.text;
    const speed = element.dataset.speed || 80;

    typeWriter(element, text, speed);

});
/*=========================================
        JAVA TECHKIE PLATFORM
        script.js
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    typingAnimation();

});


/*=========================================
        TYPING ANIMATION
==========================================*/

function typingAnimation() {

    const typingText = document.querySelectorAll(".typing");

    typingText.forEach(function(element){

        let text = element.getAttribute("data-text");

        let speed = element.getAttribute("data-speed") || 70;

        element.innerHTML = "";

        let i = 0;

        function type(){

            if(i < text.length){

                element.innerHTML += text.charAt(i);

                i++;

                setTimeout(type, speed);

            }

        }

        type();

    });

}
function showAnswer(){

    document.getElementById("a1").innerHTML="String";

    document.getElementById("a2").innerHTML="double";

    document.getElementById("a3").innerHTML="int";

    document.getElementById("a4").innerHTML="boolean";

}
function checkQuiz(){

    let answer=document.querySelector('input[name="q1"]:checked');

    if(answer==null){

        alert("Please select an answer.");

        return;

    }

    if(answer.value=="double"){

        document.getElementById("result").innerHTML="✅ Correct";

    }

    else{

        document.getElementById("result").innerHTML="❌ Wrong Answer<br>Correct Answer : double";

    }

}
function saveNotes(){

    let notes=document.getElementById("notes").value;

    localStorage.setItem("notes",notes);

    alert("Notes Saved Successfully!");

}

window.onload=function(){

    let saved=localStorage.getItem("notes");

    if(saved){

        document.getElementById("notes").value=saved;

    }

}
function completeLesson(){

    document.getElementById("status").innerHTML=

    "🏆 Lesson Completed Successfully!";

}
function rate(stars){

    document.getElementById("rating").innerHTML=

    "You rated this lesson ⭐ "+stars;

}
function showAnswer() {

    let answer = document.getElementById("answer");

    if(answer.innerHTML === ""){

        answer.innerHTML = `

        <h3>✅ Correct Answers</h3>

        <table border="1" cellpadding="10">

            <tr>
                <th>Information</th>
                <th>Data Type</th>
            </tr>

            <tr>
                <td>Customer Name</td>
                <td><b>String</b></td>
            </tr>

            <tr>
                <td>Ticket Price</td>
                <td><b>double</b></td>
            </tr>

            <tr>
                <td>Number of Tickets</td>
                <td><b>int</b></td>
            </tr>

            <tr>
                <td>Booking Confirmed</td>
                <td><b>boolean</b></td>
            </tr>

        </table>

        `;

    }

    else{

        answer.innerHTML = "";

    }

}
// ===============================
// Show Answer
// ===============================

function showOperatorAnswer() {

    document.getElementById("operatorAnswer").innerHTML = `
    <table border="1" cellpadding="8">
        <tr>
            <th>Situation</th>
            <th>Operator</th>
        </tr>
        <tr>
            <td>Add Product Price</td>
            <td>+</td>
        </tr>
        <tr>
            <td>Check Age 18 or Above</td>
            <td>>=</td>
        </tr>
        <tr>
            <td>Verify Username AND Password</td>
            <td>&&</td>
        </tr>
        <tr>
            <td>Increase Quantity</td>
            <td>++</td>
        </tr>
        <tr>
            <td>Pass or Fail</td>
            <td>?: (Ternary)</td>
        </tr>
    </table>
    `;

}


// ===============================
// Quiz
// ===============================

function checkOperatorQuiz() {

    let score = 0;

    if(document.querySelector('input[name="q1"]:checked')?.value=="A") score++;
    if(document.querySelector('input[name="q2"]:checked')?.value=="A") score++;
    if(document.querySelector('input[name="q3"]:checked')?.value=="A") score++;
    if(document.querySelector('input[name="q4"]:checked')?.value=="B") score++;
    if(document.querySelector('input[name="q5"]:checked')?.value=="B") score++;

    document.getElementById("quizResult").innerHTML =
    "✅ You scored " + score + " / 5";

}


// ===============================
// Lesson Completion
// ===============================

function completeLesson(){

    document.getElementById("lessonStatus").innerHTML =
    "🏆 Congratulations! You completed the Operators lesson.";

}


// ===============================
// Star Rating
// ===============================

function rateLesson(stars){

    document.getElementById("ratingMessage").innerHTML =
    "⭐ You rated this lesson " + stars + " / 5";

}


// ===============================
// Save Notes
// ===============================

function saveNotes(){

    let notes = document.getElementById("notes").value;

    localStorage.setItem("operatorNotes", notes);

    alert("Notes Saved Successfully!");

}

window.onload = function(){

    let savedNotes = localStorage.getItem("operatorNotes");

    if(savedNotes){

        document.getElementById("notes").value = savedNotes;

    }

}