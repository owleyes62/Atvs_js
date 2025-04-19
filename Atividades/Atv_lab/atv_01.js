const vetor = [];
const vetorPar = [];
const vetorParMult = [];

gerarVetor(vetor)
console.log("Vetor original")
exibirVetor(vetor)
recebeNumParMult(vetor, vetorPar, vetorParMult)
console.log("Vetor par")
exibirVetor(vetorPar)
console.log("vetor par mult")
exibirVetor(vetorParMult)




function gerarVetor(v){
    for (let i = 0; i < 6; i += 1){
        v[i] = Math.floor(Math.random() * 11);
    }
}

function exibirVetor(v){
    for(let i = 0; i < v.length; i += 1){
        if(v[i] == undefined){
            v.shift(v[i])
        }else{
            console.log(v[i]);
        }
    }
}

function recebeNumParMult(v, vp, vpm){
    for( let i = 0; i < v.length; i += 1){
        if(v[i] % 2 == 0 && v[i] != 0){
            vp[i] = v[i];
            vpm[i] = v[i] * 3;
        }
    }
}