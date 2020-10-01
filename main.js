var majasdObj = [
  {name: 'Ann', notes: [3, 5, 8]},
  {name: 'Jeanny', notes: [4, 6, 9]},
  {name: 'John', notes: [2, 7, 9]},
  {name: 'Max', notes: [1, 5, 9]},
]

var out = '';
var out = `<h3>${majasdObj[0].name}</h3>`;
var out = out + '<ul>';
var out = out + `<li>${majasdObj[0].notes[0]}</li>`;
var out = out + `<li>${majasdObj[0].notes[1]}</li>`;
var out = out + `<li>${majasdObj[0].notes[2]}</li>`;
var out = out + '</ul>';
var out = out + `<h3>${majasdObj[1].name}</h3>`;
var out = out + '<ul>';
var out = out + `<li>${majasdObj[1].notes[0]}</li>`;
var out = out + `<li>${majasdObj[1].notes[1]}</li>`;
var out = out + `<li>${majasdObj[1].notes[2]}</li>`;
var out = out + '</ul>';
var out = out + `<h3>${majasdObj[2].name}</h3>`;
var out = out + '<ul>';
var out = out + `<li>${majasdObj[2].notes[0]}</li>`;
var out = out + `<li>${majasdObj[2].notes[1]}</li>`;
var out = out + `<li>${majasdObj[2].notes[2]}</li>`;
var out = out + '</ul>';
var out = out + `<h3>${majasdObj[3].name}</h3>`;
var out = out + '<ul>';
var out = out + `<li>${majasdObj[3].notes[0]}</li>`;
var out = out + `<li>${majasdObj[3].notes[1]}</li>`;
var out = out + `<li>${majasdObj[3].notes[2]}</li>`;
var out = out + '</ul>';


document.getElementById('majasdarbs').innerHTML = out;
