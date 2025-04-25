function setEndereco(enderecoText){
    const enderecoContainer = document.getElementById('endereco');
    enderecoContainer.textContent = enderecoText;
}

function fecthEndereco(){
    const cep = document.getElementById('cepInput').value;
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8){
        setEndereco('Por favor, digite um CEP valido com 8 digitos.');
        return;
    } 

    fecth(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(data.erro){
                setEndereco('CEP não encontrado.');
            } else{
                setEndereco(`Rua ${data.logradouro} - ${data.localidade}, ${data.uf}`);
            }
        })
        .catch( error => {
            console.error('Falha ao buscar o enderiço:', error);
            setEndereco('Erro ao carregar endereço.');
        });
}

document.getElementById('cepInput').addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        fecthEndereco();
    }
});