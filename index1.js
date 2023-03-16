//ccriando a classe
class Estudante {
    constructor(nome, email, RA, curso, disciplinas) {
        this.nome = nome;
        this.email = email;
        this.RA = RA;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }
}

//criando os objetos
const estudanteA = new Estudante(
    "Sirlene",
    "Sirlene@gmail.com",
    123456,
    "ADS",
    ["Gestão de projetos", "Banco de Dados","Programação WEB"]
  );
  
  const estudanteB = new Estudante(
    "David",
    "David@gmail.com",
    654321,
    "ADS",
    ["Estatistica", "Engenharia de software","TG"]
  );

  //printando na tela
console.log(estudanteA);
console.log(estudanteB);