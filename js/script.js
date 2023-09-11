const boxContainer = document.querySelector('.boxes');
for(let i = 1; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i);

  if (!(i % 3) && !(i % 5)){
    box.classList.add('bg-pink');
    box.innerHTML = "FizzBuzz";
    boxContainer.append(box);
  }
  
  else if (i % 5 === 0) {
    box.classList.add('bg-yellow');
    box.innerHTML = "Buzz";
    boxContainer.append(box);
  }
  
  else if (i % 3 === 0) {
    box.classList.add('bg-green');
    box.innerHTML = "Fizz";
    boxContainer.append(box);
  }
  
  boxContainer.append(box);

}