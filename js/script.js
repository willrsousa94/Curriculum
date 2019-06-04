$("#sobre").click(mostrarSobreMim);
$("#experiencia").click(mostrarExperiencia);
$("#cursos").click(mostrarCursos);

function mostrarSobreMim(){
    $(".inactive").hide()
    $(".sobre-mim").show(600);
}

function mostrarExperiencia(){
    $(".inactive").hide();
    $(".experiencia").show(600);
}

function mostrarCursos(){
    $(".inactive").hide();
    $(".info-cursos").show(600);
}