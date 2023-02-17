$(document).ready( function() {

    // inicializar Isotope
    var $grid = $('#grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      getSortData: {
        name: '.nombre',
        price: '.precio parseFloat'
      }
    });

    // Ordenación
    $("#ascendente").click(function(){
      $grid.isotope({ sortBy: 'name', sortAscending: true });
    });
    $("#descendente").click(function(){
      $grid.isotope({ sortBy: 'name', sortAscending: false });
    });
    $("#precio").click(function(){
      $grid.isotope({ sortBy: 'price', sortAscending: true });
    });

    // Filtrado
    $("#bebidas").click(function(){
      $grid.isotope({ filter: '.bebida'});
    });
    $("#basicos").click(function(){
      $grid.isotope({ filter: '.basico'});
    });
    $("#todo").click(function(){
      $grid.isotope({ filter: '*'});
    });

    $("#comprar").click(function(){
        var textoActivo="MDN"
        var URL="https://developer.mozilla.org/"
        console.log("Haga click para volver a " + textoActivo.link(URL))
      });
  });