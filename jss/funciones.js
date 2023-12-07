let total = 0;

const getRandomInt = () => {
  let numero = Math.floor(Math.random() * 100);
  console.log(numero)
  return numero;
};

const showRandomNumber = (id) => {
  document.getElementById('btn' + id).innerText = getRandomInt();
  plus(parseInt(document.getElementById('btn' + id).innerText));
};

const plus = (tmp) => {
  total += tmp;
  document.getElementById('resultado').innerText = total;
};

