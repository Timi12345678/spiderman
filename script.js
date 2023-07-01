var cytat = document.querySelector('.msg');
console.log(cytat);
var przycisk = document.querySelector('.przycisk');
console.log(przycisk);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
getRandomInt(3);

var cytaty = [
    "Mój zmysł pająka jest w pogotowiu!",
    "W imię prawdy, sprawiedliwości i tak dalej, muszę uczynić świat bezpiecznym miejscem. Mam nadzieję, że nie naruszyłem żadnych praw autorskich tą linią.",
    "Z wielką mocą wiąże się wielka odpowiedzialność",
    "Zatrzymałem się tylko, aby pogratulować Ci doskonałego albumu. Do tej pory myliłeś się co do mnie w 100%. Muszę ci powiedzieć, założę się, że nie jest łatwo cały czas robić z siebie głupka.",
    "Nie rób niczego, co ja. I zdecydowanie nie rób niczego, czego bym nie zrobił. Jest tam mały szary obszar i tam działa.",
    "Rzuć nowe zaklęcie, tylko tym razem, aby wszyscy zapomnieli, kim jest Peter Parker. Spraw, aby wszyscy zapomnieli… ja.",
    "Niektórzy sugerują, że moc Parkera obejmuje zdolność samca pająka do hipnotyzowania samic",
    "Zapakuj to! Wisiałem nad Wielkim Kanionem od dwunastu godzin!",
    "Racja, tak. To brzmi jak kłopot, tak. Ale właściwie to zrobiłem. Powiedziałeś, że powiedziałem: „Och, miałem blokadę sieci",
    "Wy dwoje, nikt nie powiedział, przestańcie odśnieżać",
    "Kiedy próbujesz naprawiać ludzi, zawsze są konsekwencje",
    "Zostaw to w spokoju. Im szybciej przez to przejdziecie, tym szybciej wrócimy do domu",
    "Rozejrzyj się. To właśnie robimy. Pomagamy ludziom",
    "To jest najlepsze… dla nich. Zaufaj mi.",
    "Dinozaur potrafi mówić",
    "Jaszczurka",
    "Więc MJ zapomni o wszystkim, przez co przeszliśmy.",
    "Tak byłem, tak byłem. Nie widziałeś mnie.",
    "Proszę. Uratowaliśmy połowę wszechświat razem. Myślę, że jesteśmy poza nazywaniem mnie sir",
    "Wujek Ben powiedział to. W dniu jego śmierci. Może nie umarła na darmo, Peter.",
    "Myślisz, że twój wymyślny nowy garnitur cię uratuje?",
    "Wiesz, sam jestem naukowcem"
]


przycisk.onclick = function(){
    cytat.innerHTML = cytaty[getRandomInt(cytaty.length)];
}