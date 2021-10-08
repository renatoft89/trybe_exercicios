let nota = 59

if (nota >= 80){
  console.log("Sua nota é: ", nota, "voce foi aprovado");
}

else if (nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera sua nota é: ", nota);
}

else if (nota < 60){
  console.log("Você foi reprovada(o)");
}