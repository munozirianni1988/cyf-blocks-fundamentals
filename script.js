/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var rolls, dice, sum, item;

// Describe this function...
function display_roll() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list.appendChild(new_li);
  });
  sum = rolls.reduce((a,b) => a+b, 0);
  let element_total = document.getElementById('total');
  element_total.innerText = sum;
  if (sum == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won!';
  } else if (sum > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lost!';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Keep playing!';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


rolls = [];
dice = [1, 2, 3, 4, 5, 6];


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  display_roll();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  display_roll();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.replaceChildren();
  element_total2.innerText = 0;
  let element_info4 = document.getElementById('info');
  element_info4.innerText = 'Keep playing!';

});
