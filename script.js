var cytat = document.querySelector(".msg");
console.log (cytat);
var przycisk = document.querySelector(".przycisk");
console.log (przycisk);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log( getRandomInt(3))
  var cytaty = [
    "Mój zmysł pająka jest w pogotowiu!",
    "W imię prawdy, sprawiedliwości i tak dalej, muszę uczynić świat bezpiecznym miejscem. Mam nadzieję, że nie naruszyłem żadnych praw autorskich tą linią.",
    "Z wielką mocą wiąże się wielka odpowiedzialność",
    "Zatrzymałem się tylko, aby pogratulować Ci doskonałego albumu. Do tej pory myliłeś się co do mnie w 100%. Muszę ci powiedzieć, założę się, że nie jest łatwo cały czas robić z siebie głupka.",
    "Nie rób niczego, co ja. I zdecydowanie nie rób niczego, czego bym nie zrobił. Jest tam mały szary obszar i tam działa.",
]
 
przycisk.onclick = function(){
    cytat.innerHTML = cytaty[getRandomInt(cytaty.length)]
}