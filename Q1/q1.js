$(document).ready(function () {

    $('#date').mask('99/99/999');
    $('#rg').mask('9999999');
    $('#cpf').mask('999.999.999-99');
    $('#fone').mask('(99)9999-9999');
    $('#celular').mask('(99) 9 9999-9999');
    $('#cep').mask('99999-999');

    $.getJSON('estados-cidades.json', function (data) {
    
        var options = '<option value="">Selecione...</option>';
        $.each(data, function (_key, val) {
            options += '<option value="' + val.nome + '">' + val.nome + '</option>';
        });
        $("#estados").html(options);

        $("#estados").change(function () {

            var options_cidades = '';
            var str = "";

            $("#estados option:selected").each(function () {
                str += $(this).text();
            });

            $.each(data, function (_key, val) {
                if (val.nome == str) {
                    $.each(val.cidades, function (_key_city, val_city) {
                        options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
                    });
                }
            });
            $("#cidades").html(options_cidades);

        }).change();

    })

});


$(submit).on("click", function () {
    console.log('aqui')
    if ($('#name').val() === '') {
        alert('Errrrooooouuuuuu')
    }
});
