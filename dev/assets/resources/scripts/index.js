//M.AutoInit();

$(document).ready(function () {

    // SIDENAV INIT
    $('.button-collapse').sidenav();

    // SLIDER INIT
    $('.slider').slider({
        indicators: false,
        // we don't want the little dots to show
        height: 500,
        transition: 500,
        interval: 6000
        // how long the slide stays for
    });

    // AUTOCOMPLETE FOR THE SEARCH FIELD
    $('.autocomplete').autocomplete({
        data: {
            'Praça da Fé': null,
            'Parque do Lago': null,
            'São Francisco': null,
            'Cidade dos Lagos': null,
            'Lagoa das Lágrimas': null,
            'Parque das Araucárias': null
        }
    });

    // INIT SCROLLSPY
    $('.scrollspy').scrollSpy();
});
