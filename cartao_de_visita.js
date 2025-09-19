/*const nomeCompleto = "Daniel Richard";
let cargoEmpresa = "Sou parte da equipe que fundou a InovaTech e atuo como CyberSecurity";  
let nomeEmpresa = "InovaTech";
let emailContato = "inovatechempresarial@gmail.com";
let telContato = "+55 (71) 99999-9999";
let anosExperiencia = 5;
let enderecoFisico = "Em frente ao Shopping Salvador Norte, Salvador - BA";
let temFiliais = false;

console.log("Nome Completo: ", nomeCompleto, "\nCargo na Empresa: ", cargoEmpresa , "\nNome da Empresa: ", nomeEmpresa, "\nE-mail para Contato: ", emailContato, "\nTelefone para Contato: ", telContato, "\nAnos de Experiência: ", anosExperiencia, "\nEndereço Físico: ", enderecoFisico, "\nPossui Filiais? ", temFiliais);
*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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
                        dados.anoExp = NUmber(anoExp);

                        r1.question("Qual o endereço físico (se tiver)? ", (endereco) => {
                            dados.endereco = (endereco);

                            r1.question("A empresa possui filiais? ", (filiais) => {
                                dados.filiais = (filiais);

                                console.log("Seu nome: ", nomePessoal )

                                r1.close();
                            });
                        });
                    });
                });
            });
        });
    });
});