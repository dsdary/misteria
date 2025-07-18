let catalogIsotope = $('.catalog').isotope ({
  itemSelector: '.catalog-item',
  layoutMode: 'fitRows'
});

$('#filters li').on('click', function(){
    catalogIsotope.isotope({filter:$(this).data('filter')})
});