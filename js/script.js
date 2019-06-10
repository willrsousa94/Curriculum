$("#sobre").click(mostrarSobreMim);
$("#experiencia").click(mostrarExperiencia);
$("#cursos").click(mostrarCursos);
$("#portfolio").click(mostrarPortfolio);

 /* $(document).ready(function(){
    $(".inicio").show();
}); */
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

function mostrarPortfolio(){
    $(".inactive").hide();
    $(".info-portfolio").show(600);
}