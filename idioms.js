const idiomsList = document.getElementById('a');
const idiomsList2 = document.getElementById('a2');
const il3 = document.getElementById('b');
const il4 = document.getElementById('b2');
const il5 = document.getElementById('c');
const il6 = document.getElementById('c2');
const il7 = document.getElementById('d');
const il8 = document.getElementById('d2');
const il9 = document.getElementById('e');
const il10 = document.getElementById('e2');
const il11 = document.getElementById('f');
const il12 = document.getElementById('f2');
const il13 = document.getElementById('g');
const il14 = document.getElementById('g2');
const il15 = document.getElementById('h');
const il16 = document.getElementById('h2');
const il17 = document.getElementById('i');
const il18 = document.getElementById('i2');
const il19 = document.getElementById('j');
const il20 = document.getElementById('j2');
const il21 = document.getElementById('k');
const il22 = document.getElementById('k2');
const il23 = document.getElementById('l');
const il24 = document.getElementById('l2');
const il25 = document.getElementById('m');
const il26 = document.getElementById('m2');
const il27 = document.getElementById('n');
const il28 = document.getElementById('n2');
const il29 = document.getElementById('o');
const il30 = document.getElementById('o2');
const il31 = document.getElementById('o3');

let urduCharacters = [];

const loadIdioms = async () => {
    try {
        const res = await fetch('https://mikail2004.github.io/urduapi/Idiom_CSV.json');
        urduCharacters = await res.json();

        const newArray = urduCharacters.filter(function(ele){
            const testString = "آ";
            return (ele.Idiom.startsWith(testString));
        });

        const newArray2 = urduCharacters.filter(function(ele){
            const testString2 = "ا";
            return (ele.Idiom.startsWith(testString2));
        });

        const newArray3 = urduCharacters.filter(function(ele){
            const testString3 = "ب";
            return (ele.Idiom.startsWith(testString3));
        });

        const newArray4 = urduCharacters.filter(function(ele){
            const testString4 = "پ";
            return (ele.Idiom.startsWith(testString4));
        });

        const newArray5 = urduCharacters.filter(function(ele){
            const testString5 = "ت";
            return (ele.Idiom.startsWith(testString5));
        });

        const newArray6 = urduCharacters.filter(function(ele){
            const testString6 = "ٹ";
            return (ele.Idiom.startsWith(testString6));
        });

        const newArray7 = urduCharacters.filter(function(ele){
            const testString7 = "ج";
            return (ele.Idiom.startsWith(testString7));
        });

        const newArray8 = urduCharacters.filter(function(ele){
            const testString8 = "چ";
            return (ele.Idiom.startsWith(testString8));
        });

        const newArray9 = urduCharacters.filter(function(ele){
            const testString9 = "ح";
            return (ele.Idiom.startsWith(testString9));
        });

        const newArray10 = urduCharacters.filter(function(ele){
            const testString10 = "خ";
            return (ele.Idiom.startsWith(testString10));
        });

        const newArray11 = urduCharacters.filter(function(ele){
            const testString11 = "د";
            return (ele.Idiom.startsWith(testString11));
        });

        const newArray12 = urduCharacters.filter(function(ele){
            const testString12 = "ڈ";
            return (ele.Idiom.startsWith(testString12));
        });

        const newArray13 = urduCharacters.filter(function(ele){
            const testString13 = "ر";
            return (ele.Idiom.startsWith(testString13));
        });

        const newArray14 = urduCharacters.filter(function(ele){
            const testString14 = "ز";
            return (ele.Idiom.startsWith(testString14));
        });

        const newArray15 = urduCharacters.filter(function(ele){
            const testString15 = "س";
            return (ele.Idiom.startsWith(testString15));
        });

        const newArray16 = urduCharacters.filter(function(ele){
            const testString16 = "ش";
            return (ele.Idiom.startsWith(testString16));
        });

        const newArray17 = urduCharacters.filter(function(ele){
            const testString17 = "ص";
            return (ele.Idiom.startsWith(testString17));
        });

        const newArray18 = urduCharacters.filter(function(ele){
            const testString18 = "ض";
            return (ele.Idiom.startsWith(testString18));
        });

        const newArray19 = urduCharacters.filter(function(ele){
            const testString19 = "ط";
            return (ele.Idiom.startsWith(testString19));
        });

        const newArray20 = urduCharacters.filter(function(ele){
            const testString20 = "ظ";
            return (ele.Idiom.startsWith(testString20));
        });

        const newArray21 = urduCharacters.filter(function(ele){
            const testString21 = "ع";
            return (ele.Idiom.startsWith(testString21));
        });

        const newArray22 = urduCharacters.filter(function(ele){
            const testString22 = "غ";
            return (ele.Idiom.startsWith(testString22));
        });

        const newArray23 = urduCharacters.filter(function(ele){
            const testString23 = "ف";
            return (ele.Idiom.startsWith(testString23));
        });

        const newArray24 = urduCharacters.filter(function(ele){
            const testString24 = "ق";
            return (ele.Idiom.startsWith(testString24));
        });

        const newArray25 = urduCharacters.filter(function(ele){
            const testString25 = "ک";
            return (ele.Idiom.startsWith(testString25));
        });

        const newArray26 = urduCharacters.filter(function(ele){
            const testString26 = "گ";
            return (ele.Idiom.startsWith(testString26));
        });

        const newArray27 = urduCharacters.filter(function(ele){
            const testString27 = "ل";
            return (ele.Idiom.startsWith(testString27));
        });

        const newArray28 = urduCharacters.filter(function(ele){
            const testString28 = "م";
            return (ele.Idiom.startsWith(testString28));
        });

        const newArray29 = urduCharacters.filter(function(ele){
            const testString29 = "ن";
            return (ele.Idiom.startsWith(testString29));
        });

        const newArray30 = urduCharacters.filter(function(ele){
            const testString30 = "ہ";
            return (ele.Idiom.startsWith(testString30));
        });

        const newArray31 = urduCharacters.filter(function(ele){
            const testString31 = "و";
            return (ele.Idiom.startsWith(testString31));
        });

        displayIdioms(newArray);
        displayIdioms2(newArray2);
        displayIdioms3(newArray3);
        displayIdioms4(newArray4);
        displayIdioms5(newArray5);
        displayIdioms6(newArray6);
        displayIdioms7(newArray7);
        displayIdioms8(newArray8);
        displayIdioms9(newArray9);
        displayIdioms10(newArray10);
        displayIdioms11(newArray11);
        displayIdioms12(newArray12);
        displayIdioms13(newArray13);
        displayIdioms14(newArray14);
        displayIdioms15(newArray15);
        displayIdioms16(newArray16);
        displayIdioms17(newArray17);
        displayIdioms18(newArray18);
        displayIdioms19(newArray19);
        displayIdioms20(newArray20);
        displayIdioms21(newArray21);
        displayIdioms22(newArray22);
        displayIdioms23(newArray23);
        displayIdioms24(newArray24);
        displayIdioms25(newArray25);
        displayIdioms26(newArray26);
        displayIdioms27(newArray27);
        displayIdioms28(newArray28);
        displayIdioms29(newArray29);
        displayIdioms30(newArray30);
        displayIdioms31(newArray31);


    } catch (err) {
        console.error(err);
    }
};

const displayIdioms = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    a.innerHTML = htmlString;
};

const displayIdioms2 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    a2.innerHTML = htmlString;
};

const displayIdioms3 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    b.innerHTML = htmlString;
};

const displayIdioms4 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    b2.innerHTML = htmlString;
};

const displayIdioms5 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    c.innerHTML = htmlString;
};

const displayIdioms6 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    c2.innerHTML = htmlString;
};

const displayIdioms7 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    d.innerHTML = htmlString;
};

const displayIdioms8 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    d2.innerHTML = htmlString;
};

const displayIdioms9 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    e.innerHTML = htmlString;
};

const displayIdioms10 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    e2.innerHTML = htmlString;
};

const displayIdioms11 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    f.innerHTML = htmlString;
};

const displayIdioms12 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    f2.innerHTML = htmlString;
};

const displayIdioms13 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    g.innerHTML = htmlString;
};

const displayIdioms14 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    g2.innerHTML = htmlString;
};

const displayIdioms15 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    h.innerHTML = htmlString;
};

const displayIdioms16 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    h2.innerHTML = htmlString;
};

const displayIdioms17 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    i.innerHTML = htmlString;
};

const displayIdioms18 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    i2.innerHTML = htmlString;
};

const displayIdioms19 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    j.innerHTML = htmlString;
};

const displayIdioms20 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    j2.innerHTML = htmlString;
};

const displayIdioms21 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    k.innerHTML = htmlString;
};

const displayIdioms22 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    k2.innerHTML = htmlString;
};

const displayIdioms23 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    l.innerHTML = htmlString;
};

const displayIdioms24 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    l2.innerHTML = htmlString;
};

const displayIdioms25 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    m.innerHTML = htmlString;
};

const displayIdioms26 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    m2.innerHTML = htmlString;
};

const displayIdioms27 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    n.innerHTML = htmlString;
};

const displayIdioms28 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    n2.innerHTML = htmlString;
};

const displayIdioms29 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    o.innerHTML = htmlString;
};

const displayIdioms30 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    o2.innerHTML = htmlString;
};

const displayIdioms31 = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h5 style="color: #DB7373;">${character.Idiom}</h5>
                <h5 style="color: #B1A9A9;">${character["Meaning 1"]}</h5>
                <h5>${character.Sentence}</h5>
            </li>
        `;
        })
        .join('');
    o3.innerHTML = htmlString;
};

loadIdioms();
