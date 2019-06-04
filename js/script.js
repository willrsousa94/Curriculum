$("#sobre").click(mostrarSobreMim);
$("#experiencia").click(mostrarExperiencia);

function mostrarSobreMim(){
    $(".inactive").hide()
    $(".sobre-mim").show(600);
}

function mostrarExperiencia(){
    $(".inactive").hide();
    $(".experiencia").show(600);
}