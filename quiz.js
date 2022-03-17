var questionIndex = 0;
var answerIndex = 0;

var answers = [];

var text = "<quizes>" +
    "<quiz>" +
        "<question>" +
            "<title>I vilken delstat kan man beskåda Mount Rushmore?</title>" +
            "<alt>Washington</alt>" +
            "<alt>South Dakota</alt>" +
            "<alt>North Dakota</alt>" +
            "<answer>2</answer>" +
            "<img>images/geografi/rushmore.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Världens högsta berg heter Mount Everest och är 8848 meter högt, vilka två länder gränsar berget till?</title>" +
            "<alt>Indien och Nepal</alt>" +
            "<alt>Kina och Indien</alt>" +
            "<alt>Nepal och Kina</alt>" +
            "<answer>3</answer>" +
            "<img>images/geografi/everest.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Sverige rankas som 158:e plats om man tittar på befolkningstäthet med 21,9 invånare per kvadratkilometer. Vilket land rankas som nummer 1 med en befolkningstäthet på hela 15267,5 invånare per kvadratkilometer?</title>" +
            "<alt>Vatikanstaten</alt>" +
            "<alt>Malta</alt>" +
            "<alt>Monaco</alt>" +
            "<answer>3</answer>" +
            "<img>images/geografi/befolkning.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Machu Picchu är ett mycket populärt turistmål i sydamerika där man får njuta av en magisk utsikt av en höjd på hela 2430 meter. I vilket land ligger denna sevärdhet?</title>" +
            "<alt>Uruguay</alt>" +
            "<alt>Peru</alt>" +
            "<alt>Paraguay</alt>" +
            "<answer>2</answer>" +
            "<img>images/geografi/machu.webp</img>" +
        "</question>" +

        "<question>" +
            "<title>Madagaskar är världens 46:e största land och fjärde största ö som befinner sig utanför sydöstra Afrikas kust. Vad heter huvudstaden till detta land?</title>" +
            "<alt>Antananarivo</alt>" +
            "<alt>Maputo</alt>" +
            "<alt>Luanda</alt>" +
            "<answer>1</answer>" +
            "<img>images/geografi/madagaskar.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Ryssland är världens största land sett till ytan och innebär även Europas största land. Vilket land kommer på andra plats som Europas näst största land?</title>" +
            "<alt>Frankrike</alt>" +
            "<alt>Polen</alt>" +
            "<alt>Ukraina</alt>" +
            "<answer>3</answer>" +
            "<img>images/geografi/europa.jpg</img>" +
            "</question>" +

            "<question>" +
            "<title>Svergies sydligaste kommun är Trelleborg, vilken är Sveriges nordligaste kommun?</title>" +
            "<alt>Kiruna kommun</alt>" +
            "<alt>Luleå kommun</alt>" +
            "<alt>Jokkmokks kommun</alt>" +
            "<answer>1</answer>" +
            "<img>images/geografi/kommun.png</img>" +
        "</question>" +
        
        "<question>" +
            "<title>I USA bor det 319 miljoner invånare och landet är världens största ekonomi. Hur många stater finns det i USA?</title>" +
            "<alt>60 st</alt>" +
            "<alt>50 st</alt>" +
            "<alt> 55 st</alt>" +
            "<answer>2</answer>" +
            "<img>images/geografi/usa.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Varje år sker det ca 60 vulkanutbrott i världen. I vilket land finner man högst antal aktiva vulkaner?</title>" +
            "<alt>Chile</alt>" +
            "<alt>Japan</alt>" +
            "<alt>Indonesien</alt>" +
            "<answer>3</answer>" +
            "<img>images/geografi/vulkan.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Världens djupaste punkt som någonsin uppmätts är Marianergraven som är 10994 meter djupt. I vilket hav befinner sig denna djuphavsgrav?</title>" +
            "<alt>Stilla Havet</alt>" +
            "<alt>Atlanten</alt>" +
            "<alt>Indiska oceanen</alt>" +
            "<answer>1</answer>" +
            "<img>images/geografi/mariana.jpg</img>" +
        "</question>" +
    "</quiz>" +

    "<quiz>" +
        "<question>" +
            "<title>Filmindustrin är en mångmiljardindustri där filmskapare och skådespelare tjänar fler miljoner dollar per film. Vilken film har uppmätts som historiens mest inkomstbringande film?</title>" +
            "<alt>Avatar</alt>" +
            "<alt>Avengers: Endgame</alt>" +
            "<alt>Sagan om Konungens Återkomst</alt>" +
            "<answer>2</answer>" +
            "<img>images/film/hollywood.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Filmen Scarface handlar om den kubanska immigranten Tony Montana och hur han bestämt blir en drogbaron under 1980-talets Miami. Vilken skådespelare spelar Tony Montana i denna kriminaldrama?</title>" +
            "<alt>Al Pacino</alt>" +
            "<alt>Robert De Niro</alt>" +
            "<alt>Marlon Brando</alt>" +
            "<answer>1</answer>" +
            "<img>images/film/scarface.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Pulp Fiction var en av 90-talets högst betygsatta filmer enligt IMDb och vann en oscartrofé för bästa originalmanus samt blev nominerad i sex andra kategorier. Vem är regissören till denna klassiska film?</title>" +
            "<alt>Stanley Kubrick</alt>" +
            "<alt>Quentin Tarantino</alt>" +
            "<alt>Martin Scorsese</alt>" +
            "<answer>2</answer>" +
            "<img>images/film/pulp.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>År 2018 bestämde man sig för att skapa en film om bandet Queen med stor fokus på fronfiguren Freddie Mercury. Filmen döptes efter ett av bandets låtar, vad heter filmen och låten?</title>" +
            "<alt>We Will Rock You</alt>" +
            "<alt>Under Pressure</alt>" +
            "<alt>Bohemian Rhapsody</alt>" +
            "<answer>3</answer>" +
            "<img>images/film/queen.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Titanic är en av de mest populära filmerna genom tiderna och handlar om ett historisk fartyg som lämnar Liverpools hamn en sista gång. Hur många oscartroféer vann filmen?</title>" +
            "<alt>15 st</alt>" +
            "<alt>11 st</alt>" +
            "<alt>8 st</alt>" +
            "<answer>2</answer>" +
            "<img>images/film/titanic.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>James Earl Jones är en mycket framgångsrik och välkänd skådespelare som bland annat gör rösten till Darth Vader i de originella Star Wars filmerna. Vilken röst gör han ytterligare?</title>" +
            "<alt>Mufasa i Lejonkungen</alt>" +
            "<alt>Buzz Lightyear i Toy Story</alt>" +
            "<alt>Sullivan i Monsters Inc.</alt>" +
            "<answer>1</answer>" +
            "<img>images/film/vader.jpeg</img>" +
        "</question>" +

        "<question>" +
            "<title>En Oväntad Vänskap är en biografisk dramafilm om hur en man från ghettot och en rik man blir mycket goda vänner mot alla odds. Från vilket land kommer denna film?</title>" +
            "<alt>Sverige</alt>" +
            "<alt>Tyskland</alt>" +
            "<alt>Frankrike</alt>" +
            "<answer>3</answer>" +
            "<img>images/film/vänskap.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>The Social Network är en film från 2010 som handlar om uppkomsten och grundaren till ett av de sociala medier vi använder idag. Vilken är denna sociala medie?</title>" +
            "<alt>Instagram</alt>" +
            "<alt>Facebook</alt>" +
            "<alt>MySpace</alt>" +
            "<answer>2</answer>" +
            "<img>images/film/social.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Rekordet för flest antal vunna oscartroféer är hela 22 stycken. Vad heter människan som erhåller detta rekord?</title>" +
            "<alt>Walt Disney</alt>" +
            "<alt>Charlie Chaplin</alt>" +
            "<alt>Clint Eastwood</alt>" +
            "<answer>1</answer>" +
            "<img>images/film/oscar.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Interstellar (2014) handlar om en grupp astronauter som reser ut i rymden för att försöka rädda människans överlevnad. Vem är det som spelar huvudrollen i denna film?</title>" +
            "<alt>Tom Hanks</alt>" +
            "<alt>Matt Damon</alt>" +
            "<alt>Matthew McConaughey</alt>" +
            "<answer>3</answer>" +
            "<img>images/film/interstellar.jpg</img>" +
        "</question>" +
    "</quiz>"  +

    "<quiz>" +
   "<question>" +
            "<title>År 1994 tog Sverige bronsmedalj under världsmästerskapet i fotboll. Vilket land vann guldet?</title>" +
            "<alt>Italien</alt>" +
            "<alt>Brasilien</alt>" +
            "<alt>Frankrike</alt>" +
            "<answer>2</answer>" +
            "<img>images/sport/1994.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Stanley Cup är den tävling som deklarerar slutspelet i nordamerikas hösta hockeyliga NHL. Vilket lag har vunnit flest titlar genom tiderna?</title>" +
            "<alt>Pittsburgh Penguins</alt>" +
            "<alt>Winnipeg Victorias</alt>" +
            "<alt>Ottawa HC</alt>" +
            "<answer>3</answer>" +
            "<img>images/sport/cup.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Inom NBA (National Basketball Association) finns det totalt 30 lag som tävlar om att bli mästare. 29 av dem är från USA, vilken stad tillhör det lag som inte är från USA?</title>" +
            "<alt>Tijuana</alt>" +
            "<alt>Vancouver</alt>" +
            "<alt>Toronto</alt>" +
            "<answer>3</answer>" +
            "<img>images/sport/nba.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Vad är en 'Birdie' inom golf?</title>" +
            "<alt>När man slår i bollen på ett enda slag</alt>" +
            "<alt>När man slår i bollen på ett slag under par</alt>" +
            "<alt>När man slår i bollen på ett slag över par</alt>" +
            "<answer>2</answer>" +
            "<img>images/sport/golf.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Usain Bolt anses vara världens snabbaste man med ett rekord på 9,58 sekunder i 100 meters löpning. Från vilket land kommer denna atlet?</title>" +
            "<alt>Kenya</alt>" +
            "<alt>USA</alt>" +
            "<alt>Jamaica</alt>" +
            "<answer>3</answer>" +
            "<img>images/sport/usain.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Champions League är den mest prestigefyllda titeln en fotbollsspelare kan vinna inom klubbfotboll. Vilket lag har vunnit denna titel flest gånger med 13 stycken?</title>" +
            "<alt>Real Madrid</alt>" +
            "<alt>AC Milan</alt>" +
            "<alt>FC Barcelona</alt>" +
            "<answer>1</answer>" +
            "<img>images/sport/league.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>När en spelare för in bollen eller tar emot en passning i motståndarlagets målområde i amerikansk fotboll får laget 6 poäng. Vad kallas det när man gör denna typ av poänggivande handling?</title>" +
            "<alt>Homerun</alt>" +
            "<alt>Touchdown</alt>" +
            "<alt>Strike</alt>" +
            "<answer>2</answer>" +
            "<img>images/sport/american.png</img>" +
        "</question>" +

        "<question>" +
            "<title>Mike Tyson anses vara en av boxningsvärldens främsta genom tiderna och dominerade sporten under 80 och 90-talet. År 1997 skedde dock en stor skandal där Tyson bet av en bit av sin motståndares öra vilket resulterade i att Tyson blev diskvalificerad. Vems öra var det Tyson bet av?</title>" +
            "<alt>Buster Douglas</alt>" +
            "<alt>Bruce Seldon</alt>" +
            "<alt>Evander Holyfield</alt>" +
            "<answer>3</answer>" +
            "<img>images/sport/mike.jpg</img>" +
        "</question>" +

        "<question>" +
            "<title>Kobe Bryant var en av basketvärldens absolut bästa spelare genom tiderna. Han blev NBA-mästare hela fem gånger och MVP (Most Valuable Player) en gång. Han gick tragiskt bort den 26:e januari 2020. För vilket lag spelade Kobe Bryant hela sin karriär?</title>" +
            "<alt>Chicago Bulls</alt>" +
            "<alt>Los Angeles Lakers</alt>" +
            "<alt>Charlotte Hornets</alt>" +
            "<answer>2</answer>" +
            "<img>images/sport/kobe.jpeg</img>" +
        "</question>" +

        "<question>" +
            "<title>Vilken är den enda sporten som utövats på månen?</title>" +
            "<alt>Fotboll</alt>" +
            "<alt>Golf</alt>" +
            "<alt>Baseboll</alt>" +
            "<answer>2</answer>" +
            "<img>images/sport/moon.jpeg</img>" +
        "</question>" +
    "</quiz>" +
 "</quizes>";

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text, "text/xml");

const alternatives = [document.getElementById("alt1"), document.getElementById("alt2"), document.getElementById("alt3")];
const image = document.getElementById("image");
const title = document.getElementById("title");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const username = document.getElementById("username");

var index = document.currentScript.getAttribute("data-id");
var allQuestions;
var amountQuestions = xmlDoc.getElementsByTagName("quiz")[index].getElementsByTagName("question").length;

var quizName = "";
switch(index){
    case "0": 
        quizName = "Geografi";
        break;
    case "1": 
        quizName = "Filmer";
        break;
    case "2": 
        quizName = "Sport";
        break;
}

for(var i = 0; i < amountQuestions; i++){
    answers.push({
        key: i,
        value: 0
    });
}

DisplayValues(index, questionIndex);

function DisplayValues(quizIndex, questionIndex){
    title.innerHTML = "Fråga " + (questionIndex + 1) + "/" + amountQuestions + ": " + xmlDoc.getElementsByTagName("quiz")[quizIndex].getElementsByTagName("title")[questionIndex].childNodes[0].nodeValue;
    image.src = xmlDoc.getElementsByTagName("quiz")[quizIndex].getElementsByTagName("img")[questionIndex].childNodes[0].nodeValue;

    for(var i = 0; i < alternatives.length; i++){
        var varIndex = 3 * questionIndex + i;
        alternatives[i].innerHTML = xmlDoc.getElementsByTagName("quiz")[quizIndex].getElementsByTagName("alt")[varIndex].childNodes[0].nodeValue;
        
        if(answers[questionIndex] && answers[questionIndex].value == (i + 1)){
            alternatives[i].style.border = 	"1px solid #ccc";
            alternatives[i].style.backgroundColor = "rgba(92, 92, 92, 0.75)";
        }
        else{
            alternatives[i].style.border = 	"0px solid #ccc";
            alternatives[i].style.backgroundColor = "rgba(92, 92, 92, 0.466)";
        }
    }
    
    allQuestions = true;
    if(questionIndex == amountQuestions - 1){
        for(var i = 0; i < amountQuestions; i++){
            if(answers[i].value < 1){
                allQuestions = false;
                break;
            }
        }
        next.innerHTML = "Avsluta Quiz";
    }
    else{
        next.innerHTML = "Nästa fråga →";
    }

    next.style.backgroundColor = (allQuestions) ? "rgba(92, 92, 92, 0.466)" : "#ad6a6a";
    previous.style.display = (questionIndex == 0) ? "none" : "block";
    username.style.display = (questionIndex == amountQuestions - 1) ? "block" : "none";
}

function NextQuestion(){
    if(questionIndex < amountQuestions - 1){
        questionIndex++;
        DisplayValues(index, questionIndex);
    }
    else if(allQuestions){
        FinishQuiz();
    }
}

function PreviousQuestion(){
    if(questionIndex > 0){
        questionIndex--;
        DisplayValues(index, questionIndex);
    }
}

function Answer(answer){
    if(answers[questionIndex]){
        answers[questionIndex].value = answer;
    }
    else
    {
        answers.push({
            key: questionIndex,
            value: answer
        });
    }
    DisplayValues(index, questionIndex);
}

function FinishQuiz(){
    var questionsRight = 0;
    for(var i = 0; i < amountQuestions; i++){
        if(answers[i].value == xmlDoc.getElementsByTagName("quiz")[index].getElementsByTagName("answer")[i].childNodes[0].nodeValue)
            questionsRight++;
            console.log(xmlDoc.getElementsByTagName("quiz")[index].getElementsByTagName("answer")[i].childNodes[0].nodeValue);
    }
    var textResult = "";
    switch(questionsRight){
        case 0: textResult = "Du försökte inte ens";
        break;
        case 1: textResult = "...";
        break;
        case 2: textResult = "Oj...";
        break;
        case 3: textResult = "Det där gick lite fel...";
        break;
        case 4: textResult = "Kunde gått bättre...";
        break;
        case 5: textResult = "Helt okej!";
        break;
        case 6: textResult = "Bra jobbat!";
        break;
        case 7: textResult = "Väldigt bra jobbat!";
        break;
        case 8: textResult = "Jättebra jobbat!";
        break;
        case 9: textResult = "Suveränt jobbat!";
        break;
        case 10: textResult = "Utmärkt jobbat!";
        break;
    }

    title.innerHTML = "Du fick " + questionsRight + "/" + amountQuestions + " rätt.\n" + textResult;
    alternatives[0].innerHTML = "Välj ett annat quiz";
    alternatives[1].innerHTML = "Spela igen";
    alternatives[2].style.display = "none";
    var annatQuiz = alternatives[0].parentElement;
    annatQuiz.href = "Index.html";
    annatQuiz.onclick = null;
    annatQuiz.style.textDecoration = "none";
    var spelaIgen = alternatives[1].parentElement;
    spelaIgen.href = "javascript:window.location.href=window.location.href";
    spelaIgen.onclick = null;
    spelaIgen.style.textDecoration = "none";
    for(var i = 0; i < alternatives.length; i++){
        alternatives[i].style.border = 	"0px solid #ccc";
    }
    var name = username.value;
    if(name.length > 0){
        var time = new Date();
        var date = time.toLocaleDateString() + " " + time.toLocaleTimeString();
        localStorage.setItem("Name", localStorage.getItem("Name") + name + "," + quizName + "," + questionsRight + "/" + amountQuestions + "," + date + "*");
    }
    username.style.display = "none";
    next.style.display = "none";
    previous.style.display = "none";
}