$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Ex.: (99) 99999-9999'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Ex.: 000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'Ex.: 00000-000'
    })


    $('form').validate({
        errorClass: 'mensagem-erro',
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }
    });

});