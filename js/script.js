$("#sobre").click(mostrarSobreMim);
$("#experiencia").click(mostrarExperiencia);

function mostrarSobreMim(){
    $(".inactive").hide()
    $(".sobre-mim").show(200);
}

function mostrarExperiencia(){
    $(".inactive").hide();
    $(".experiencia").show(200);
}