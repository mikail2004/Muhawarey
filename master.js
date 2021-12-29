const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let urduCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;

    const filteredCharacters = urduCharacters.filter((character) => {
        return (
            character.Idiom.includes(searchString)
        );
    });
    displayIdioms(filteredCharacters);

    if (filteredCharacters.length == 1){
        console.log("Test Passed");
        charactersList.setAttribute("style", "grid-template-columns: repeat(1, 0.1fr);")
    }
    else {
        console.log("Test failed");
    }
});

const loadIdioms = async () => {
    try {
        const res = await fetch('https://mikail2004.github.io/urduapi/Idiom_CSV.json');
        urduCharacters = await res.json();
    } catch (err) {
        console.error(err);
    }
};

const displayIdioms = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadIdioms();

