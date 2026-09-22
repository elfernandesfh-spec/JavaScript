let quartosDisponiveis = 5
let reservaConfirmada = true
let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva Comfirmada"
:(quartosDisponiveis > 0) ? "Aguardando Cofirmação" : "Sem quartyos disponíveis";
console.log(statusReserva) //Saida: "Reserva Confirmada"