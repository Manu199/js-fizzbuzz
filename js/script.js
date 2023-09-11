
// - generare 100 box numerati
// - colorare tutti i box multipli di 3 di verde e cambiare il contenuto con la scritta "Fizz"
// - colorare tutti i box multipli di 5 di giallo e cambiare il contenuto con la scritta "Buzz"
// - colorare tutti i box multipli dia di 3 che di 5 di rosa e cambiare il contenuto con la scritta "FizzBuzz"




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