$(document).ready(function() {
    $('#carousel').slick({
        autoplay: true,
    });


    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    
    $('form').validate({
        errorClass: 'mensagem-erro',
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculo: {
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })
    

    $('.lista-veiculos button').click(function(e) {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)

    })

})

