function calcular() {
  let nota1 = document.getElementById("nota1");
  let nota2 = document.getElementById("nota2");
  let nota3 = document.getElementById("nota3");
  let resultado = document.getElementsByClassName("resultado")[0];

  if (
    nota1.value.length == 0 || nota2.value.length == 0 ||nota3.value.length == 0){
    alert("Há um campo faltando!");
  }
 else {
    let nt1 = Number(nota1.value);
    let nt2 = Number(nota2.value);
    let nt3 = Number(nota3.value);

    let media = ((nt1 + nt2 + nt3) / 3).toFixed(1);

    if (media > 7) {
      resultado.innerHTML = `Parabéns \u{1F604} Você passou de ano. <br>`;
      resultado.innerHTML += `Sua média foi ${media}`;
    } else {
      resultado.innerHTML = `Que pena! \u{1F641} Você não passou de ano. <br>`;
      resultado.innerHTML += `Sua média foi ${media}`;
    }
  }
}
