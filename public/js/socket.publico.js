var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritoriot1 = $('#lblEscritorio1');
var lblEscritoriot2 = $('#lblEscritorio2');
var lblEscritoriot3 = $('#lblEscritorio3');
var lblEscritoriot4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1,
    lblTicket2,
    lblTicket3,
    lblTicket4
];
var lblEscritorios = [lblEscritoriot1,
    lblEscritoriot2,
    lblEscritoriot3,
    lblEscritoriot4,
];

socket.on('estadoActual', function(data) {
    //console.log(data);    
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    //console.log(data);  
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {

    for (var i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio' + ultimos4[i].escritorio);
    }
}