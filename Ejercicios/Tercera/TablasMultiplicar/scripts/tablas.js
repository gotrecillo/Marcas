var solutions = []; 
var maxTable;

function getMaxTable(){
  return Number(document.getElementById("maxTable").value);
}

function fill () {
  maxTable = getMaxTable();
  createTable(maxTable);
}

function random(){
  return Math.floor((Math.random() * 10) + 1);
}


function createTable(rows){
  var exercises = "";
  exercises += '<table id="exercises">';
  for (var i = 1; i <= rows; i++) {
    var randomNumber = random();
    exercises += '<tr id="exercise' +i+'" >';
    exercises += '<td id="operator' +i+'" >';
    exercises += i;
    exercises += '</td>';
    exercises += '<td class="symbol" >';
    exercises += '*';
    exercises += '</td>';
    exercises += '<td id="random' +i+'" >';
    exercises += randomNumber + ' = ';
    exercises += '</td>';
    exercises += '<td class="answers">';
    exercises += '<input type="text" class="solutions" id="solution' +i+ '">';
    exercises += '</td>';
    exercises += '<td id="flag' +i+'" >';
    exercises += '</td>';
    exercises += '</tr>';
    solutions[i] = i*randomNumber;
  }
  exercises += '</table>';
  exercises +=  '<input type="button" onclick="checkAnswers()" value="Comprobar" />';
  document.getElementById("exercises").innerHTML = exercises;
}

function checkAnswers(){
  for (var i = 1; i <= maxTable; i++) {
    var idSolution = "solution" +i ;
    var idFlag = "flag" + i;
    var answer = document.getElementById(idSolution).value;
    if (answer != solutions[i]) {
      document.getElementById(idFlag).innerHTML = '<img src="images/wrong.png"/>';
    }else{
      document.getElementById(idFlag).innerHTML = '<img src="images/right.png"/>';
    }
  }
}