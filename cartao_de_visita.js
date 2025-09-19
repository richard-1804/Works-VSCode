const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dados = {};

console.log("Olá, bem-vindo ao sistema de criação do seu cartão de visitas!!");
console.log("Insira seus dados abaixo:\n");

r1.question("Qual o seu nome Completo? ", (nomePessoal) => {
  dados.nomePessoal = (nomePessoal);

  r1.question("Qual o nome da sua empresa? ", (nomeEmpresa) => {
    dados.nomeEmpresa = (nomeEmpresa);

    r1.question("Qual o seu cargo na empresa ", (cargo) => {
      dados.cargo = (cargo);

      r1.question("Qual o e-mail da empresa? ", (emailEmpresa) => {
        dados.emailEmpresa = (emailEmpresa);

        r1.question("Qual o telefone de contato? ", (telContato) => {
          dados.telContato = Number(telContato);

          r1.question("Quantos anos de experiência você têm? ", (anoExp) => {
            dados.anoExp = Number(anoExp);

            r1.question("Qual o endereço físico (se tiver)? ", (endereco) => {
              dados.endereco = (endereco);

              r1.question("A empresa possui filiais? ", (filiais) => {
                dados.filiais = (filiais);


                
                console.log("\n---Seus Dados Pessoais---\n");
                console.log(
                  "Seu nome: " + nomePessoal,
                  "\nNome da empresa: " + nomeEmpresa,
                  "\nSeu cargo: " + cargo,
                  "\nE-mail empresarial: " + emailEmpresa,
                  "\nTelefone empresarial: " + telContato,
                  "\nAnos de experiência: " + anoExp,
                  "\nEndereço: " + endereco,
                  "\nA empresa tem filiais? " + filiais
                );

                r1.close();
              });
            });
          });
        });
      });
    });
  });
});