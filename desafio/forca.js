class Forca {
  letrasChutadas = [];
  vidas = 6;
  palavra = [];
  palavraSecreta = "";
  estadoJogo = "";

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.estadoJogo = "aguardando chute";

    for (let index = 0; index < palavraSecreta.length; index++) {
      this.palavra.push("_");
    }
  }

  chutar(letra) {
    if (!this.letrasChutadas.includes(letra) && letra.length === 1) {
      this.letrasChutadas.push(letra);
      if (this.palavraSecreta.includes(letra)) {
        for (let index = 0; index < this.palavraSecreta.length; index++) {
          if (letra === this.palavraSecreta[index]) {
            this.palavra[index] = letra;
          }
        }
      } else {
        this.vidas--;
      }

      if (this.vidas <= 0) {
        this.estadoJogo = "perdeu";
      } else {
        if (!this.palavra.includes("_")) {
          this.estadoJogo = "ganhou";
        }
      }
    }
  }

  buscarEstado() {
    return this.estadoJogo;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
