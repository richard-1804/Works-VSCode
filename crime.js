const suspeitoA = { IdadeSuspeito: 40, corCabelo: 'preto', usaOculos: false, jaEstevePreso: true, altura: 175 };
const suspeitoB = { IdadeSuspeito: 28, corCabelo: 'castanho', usaOculos: true, jaEstevePreso: true, altura: 185 };
const suspeitoC = { IdadeSuspeito: 36, corCabelo: 'ruivo', usaOculos: false, jaEstevePreso: false, altura: 190 };


const pistaFinalA = (suspeitoA.IdadeSuspeito >= 25 && suspeitoA.IdadeSuspeito <= 35) &&
                    (suspeitoA.corCabelo !== 'loiro' && suspeitoA.jaEstevePreso === true) &&
                    (suspeitoA.altura > 180 || suspeitoA.usaOculos === false);

const pistaFinalB = (suspeitoB.IdadeSuspeito >= 25 && suspeitoB.IdadeSuspeito <= 35) &&
                    (suspeitoB.corCabelo !== 'loiro' && suspeitoB.jaEstevePreso === true) &&
                    (suspeitoB.altura > 180 || suspeitoB.usaOculos === false);

const pistaFinalC = (suspeitoC.IdadeSuspeito >= 25 && suspeitoC.IdadeSuspeito <= 35) &&
                    (suspeitoC.corCabelo !== 'loiro' && suspeitoC.jaEstevePreso === true) &&
                    (suspeitoC.altura > 180 || suspeitoC.usaOculos === false);


if(pistaFinalA){
    console.log("O culpado é o suspeito A!!!")
}else if (pistaFinalB){
    console.log("O culpado é o suspeito B!!!")
}else if (pistaFinalC){
    console.log("O culpado é o suspeito C!!!")
};


