const database = {
    mediaRecorder: null,
    audioChunks: null,
    audioUrl: null,
    audio: null,
    currentContact: 0,
    currentInput: "",
    eventKey: null,
    searchInput: "",
    showMenu: false,
    showMessageMenu: {
        status: false,
        index: 0
    },
    darkMode: false,
    sentMessage: false,

    messages: [
        "Sì",
        "È così.",
        "Sarebbe bello.",
        "E come?",
        "Giustamente.",
        "Sta bene.",
        "Si può anche convenire.",
        "Da quanto è stato detto almeno, pare così.",
        "Di' pure come.",
        "Sia pure così.",
        "Come no?",
        "Molto bene.",
        "Certamente.",
        "Tutto questo è stato assolutamente chiarito a sufficienza.",
        "Così almeno sembra.",
        "Bene.",
        "Questo non lo sapevo.",
        "È verissimo quel che dici.",
        "Ma è chiaro!",
        "Perfetto.",
        "Infatti è così.",
        "Come dici?",
        "Ma per forza!",
        "Ma certamente!",
        "E perché non dovrei?",
        "Si disse proprio così.",
        "Come potrebbe essere diversamente?",
        "Senza meno.",
        "Eh già!",
        "Dillo pure!",
        "Si trattava proprio di questo.",
        "Non ho capito.",
        "Pare.",
        "Bisogna ammetterlo senza riserva.",
        "Sta proprio così.",
        "È vero.",
        "È assolutamente così.",
        "Questo almeno è verosimile.",
        "Dici bene.",
        "Esattamente.",
        "C'è proprio modo che questo avvenga soprattutto per questa ragione.",
        "Perché no?",
        "Difficilmente, sicuro!",
        "Non potrebbe affatto.",
        "Sicuro!",
        "Veramente no.",
        "E come non ammetterlo?",
        "Tu dici bene: bisogna fare così.",
        "Va chiamata così.",
        "Ebbene?",
        "Giusto.",
        "Come e a quale scopo dici questo?",
        "E perché?",
        "È impossibile.",
        "Assolutamente no.",
        "È assolutamente necessario.",
        "In che senso dici?",
        "È molto chiaro.",
        "Sì, nel modo più assoluto.",
        "Ti seguo.",
        "Pare certamente così.",
        "Lo vedo anche troppo bene.",
        "E che cos'altro potremmo dire?",
        "Anche questo.",
        "Mi pare che questo punto si debba dibattere nei nostri ragionamenti.",
        "È verissimo.",
        "Lo hai detto.",
        "Per quel che mi riguarda non mi sembra affatto che tu sbagli.",
        "Di' pure chiaro quel che vuoi dire.",
        "Lo vedo.",
        "Forse sì.",
        "Eh, sì!",
        "Tu dici il vero.",
        "È molto giusto quello che dici.",
        "È necessario.",
        "Sembra senza dubbio che la questione stia così.",
        "Sarà così.",
        "Tutto questo a me pare che sia assurdo!",
        "Certamente sì.",
        "Verissimo.",
        "Senza dubbio.",
        "Assolutamente.",
        "È proprio così.",
        "È come dici.",
        "Tu dici cosa autentica e vera.",
        "Questo anch'io mi sento capace di affermarlo.",
        "Sì, certamente.",
        "Forse.",
        "È esatto.",
        "Ma questo è impossibile.",
        "Pressappoco.",
        "Ma certo.",
        "Senza remora alcuna, assolutamente.",
        "Nel modo più evidente.",
        "Su per giù è così.",
        "Dici il giusto.",
        "È giustissimo.",
        "A questo punto non ci sono arrivato.",
        "È verosimile.",
        "Tutto il contrario."
    ],

    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            lastSee: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('us-US', { hour12: false }),
            messages: [
                {
                    seen: true,
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    seen: true,
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    seen: true,
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            lastSee: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('us-US', { hour12: false }),
            messages: [{
                seen: true,
                message: 'Ciao come stai?',
                status: 'received'
            },
            {
                seen: true,
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'sent'
            },
            {
                seen: true,
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
            }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            lastSee: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('us-US', { hour12: false }),
            messages: [{
                seen: true,
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                seen: true,
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                seen: true,
                message: 'Ah scusa!',
                status: 'received'
            }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            lastSee: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('us-US', { hour12: false }),
            messages: [{
                seen: true,
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                seen: true,
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
            ],
        },
    ],
    scrollChat: function () {
        setTimeout(() => {
            const chat = document.getElementById("chat");
            chat.scrollTop = chat.scrollHeight;
        }, 0);
    }
};

export default database;