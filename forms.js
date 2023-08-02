function Enviar() {
    var nome = documento.getElementyById("nomeid");

    if (nome.value != "") {
        alert('Obrigado, sr(a)' + nome.value + 'Seu formulário foi enviado')
    }else{
        alert('Vazio')
    }
}