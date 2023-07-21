$(document).ready(function(){

    $("#btn-bars").on("click", function() {
        $("header").toggleClass("open-menu"); /*ao clicar ativa/desatgiva a classe open-menu*/
        $("header").removeClass("#menu-mobile");
    });

    $("#open-menu-itens").on("click", function() {
        $("header").toggleClass("open-menu"); /*ao clicar ativa/desatgiva a classe open-menu*/
    });

    $("#close-x").on("click", function() {
        $("header").toggleClass("open-menu"); /*ao clicar ativa/desatgiva a classe open-menu*/
    })


});