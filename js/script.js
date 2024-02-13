/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
*/

// creo l'array di oggetti per rappresentare i membri del team
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        profile: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        profile: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        profile: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        profile: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        profile: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        profile: "barbara-ramos-graphic-designer.jpg"
    }
]

const listaElement = document.querySelector("ul");

// itero per ogni membro del team
for (let i = 0; i < teamMembers.length; i++) {
    const currentMember = teamMembers[i];

    // creo un elemento di lista per ogni membro del team
    let memberCard = document.createElement("li");

    // creo un elemento img per ogni membro del team
    let img = document.createElement("img");
    img.src = "img/" + currentMember.profile;

    // creo un elemento strong per visualizzare il nome
    let memberName = document.createElement("strong");
    memberName.textContent = `${currentMember.name}`;

    // creo un elemento strong per visualizzare il ruolo
    let memberRole = document.createElement("p");
    memberRole.textContent = `${currentMember.role}`;

    // aggiungo le info create alla card 
    memberCard.appendChild(img);
    memberCard.appendChild(memberName);
    memberCard.appendChild(memberRole);


    // aggiungo la card alla lista
    listaElement.appendChild(memberCard);

}  