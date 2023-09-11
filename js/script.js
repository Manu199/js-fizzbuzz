const boxContainer = document.querySelector('.boxes');
for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i + 1);

  if(!((i + 1) % 3)){
    box.classList.add('bg-green');
    box.textContent = 'Fizz';
  }

  if(!((i + 1) % 5)){
    box.classList.add('bg-yellow');
    box.textContent = 'Buzz';
  }

  if (!((i + 1) % 3) && !((i + 1) % 5)) {
    box.classList.add('bg-pink');
    box.textContent = 'FizzBuzz';
  }

  boxContainer.append(box);
}