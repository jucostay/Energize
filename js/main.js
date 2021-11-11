$('.slider-principal').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 600
});

function limpar() {
    $(":input").val("");
    alert("Obrigada!")
}