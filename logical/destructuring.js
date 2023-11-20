const jogo = {
  nome: "Minha Aventura",
  plataforma: "mobile",
  genero: "aventura",
  tamanho: 3.6,
}

console.log("Exemple 1: ");
console.log(jogo.nome);
console.log();

console.log("Exemple 2: ");
try {
  console.log(nome);
} catch(error) {
  console.log("ReferenceError: nome is not defined");
} finally {
  console.log();
}

const { nome } = jogo;
console.log("Exemple 3: ");
console.log(nome);
console.log();

const { nome: nomeRenomeado } = jogo;
console.log("Exemple 4: ");
console.log(nomeRenomeado);
console.log();