var userScore = 0;
var compScore = 0;

function displayScore_onload()
{
    var outputTextbox = document.getElementById("txtOutput");
    var userDisplay = document.getElementById("userScore");
    var compDisplay = document.getElementById("compScore");
    userDisplay.innerHTML = userScore.toString();
    compDisplay.innerHTML = compScore.toString();
    outputTextbox.innerHTML = "<br><br><br>";
}

function btnRock_onclick()
{
    var outputTextbox = document.getElementById("txtOutput");
    var rock = document.getElementById("btnRock");
    var userDisplay = document.getElementById("userScore");
    var compDisplay = document.getElementById("compScore");
    
    var random = Math.floor((Math.random() * 3) + 1);
    var comp;
    var winner
    
    if(random == 1)
    {
        comp = "rock";
        winner = "It's a tie. Try again.";
    }
    else if (random == 2)
    {
       comp = "paper";
       winner = "I win.";
       compScore ++;
    }
    else
    {
        comp = "scissors";
        winner = "You win.";
        userScore ++;
    }

    outputTextbox.innerHTML = "You picked <b>rock</b>" + "<br>" + "I picked <b>" + comp + "</b><br>" + winner;
    userDisplay.innerHTML = userScore.toString();
    compDisplay.innerHTML = compScore.toString();
}

function btnPaper_onclick()
{
    var outputTextbox = document.getElementById("txtOutput");
    var rock = document.getElementById("btnPaper");
    var userDisplay = document.getElementById("userScore");
    var compDisplay = document.getElementById("compScore");

    var random = Math.floor((Math.random() * 3) + 1);
    var comp;
    var winner
    
    if(random == 1)
    {
        comp = "rock";
        winner = "You win.";
        userScore ++;
    }
    else if (random == 2)
    {
       comp = "paper";
       winner = "It's a tie. Try again.";
    }
    else
    {
        comp = "scissors";
        winner = "I win.";
        compScore ++;

    }

    outputTextbox.innerHTML = "You picked <b>paper</b>" + "<br>" + "I picked <b>" + comp + "</b><br>" + winner;
    userDisplay.innerHTML = userScore.toString();
    compDisplay.innerHTML = compScore.toString();
}

function btnScissors_onclick()
{
    var outputTextbox = document.getElementById("txtOutput");
    var rock = document.getElementById("btnScissors");
    var userDisplay = document.getElementById("userScore");
    var compDisplay = document.getElementById("compScore");

    var random = Math.floor((Math.random() * 3) + 1);
    var comp;
    var winner
    
    if(random == 1)
    {
        comp = "rock";
        winner = "I win.";
        compScore ++;
    }
    else if (random == 2)
    {
       comp = "paper";
       winner = "You win.";
       userScore ++;
    }
    else
    {
        comp = "scissors";
        winner = "It's a tie. Try again.";
    }

    outputTextbox.innerHTML= "You picked <b>scissors</b>" + "<br>" + "I picked <b>" + comp + "</b><br>" + winner;
    userDisplay.innerHTML = userScore.toString();
    compDisplay.innerHTML = compScore.toString();
}

function btnClear_onclick()
{
    var userDisplay = document.getElementById("userScore");
    var compDisplay = document.getElementById("compScore");
    var outputTextbox = document.getElementById("txtOutput");
    userScore = 0;
    compScore = 0;
    userDisplay.innerHTML = userScore.toString();
    compDisplay.innerHTML = compScore.toString();
    outputTextbox.innerHTML = "<br><br><br>";
}