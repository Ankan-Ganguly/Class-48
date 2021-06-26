const sAnswer1 = "A STUDY IN SCARLET";
const sAnswer2 = "MYCROFT";
const sAnswer3 = "POISONING";
const sAnswer4 = "MONEY";
const sAnswer5 = "VIOLIN";
const sAnswer6 = "STEPHEN HOPKINS";
const sAnswer7 = "7th June, 2021";
const sanswer8 = "28th June, 2020";
const sAnswer9 = "SWITZERLAND";
const sanwer10 = " A SIGN OF FOUR";
const sAnswer11 = "";
const sAnswer12 = "";
const sAnswer13 = "IRENE ADLER";
const sAnswer14 = "DRUG";
const sAnswer15 = "";
const sAnswer16 = ""

const mAnswer1 = "SWITZERLAND";
const mAnswer2 = "THE REICHENBACH FALL";
const mAnswer3 = "";
const mAnswer4 = "";
const mAnswer5 = "THE VALLEY OF FEAR";
const mAnswer6 = "REICHENBACH FALLS";
const mAnswer7 = "";
const mAnswer8 = "";
const mAnswer9 = "1892";
const mAnswer10 = "SEBASTIAN MORAN";
const mAnswer11 = "";
const mAnswer12 = "";
const mAnswer13 = "ARMY COACH";
const mAnswer14 = "BINOMIAL THEOREM";
const mAnswer15 = "";
const mAnswer16 = "";


function questions (){

    if (character === 1){
        if (gameState === 3){
            fill('white');
            textSize(15);
            text("In which story does for the first time Holmes and Watson meet?", 100, 50);
            fill('lightblue');
            text("E C T T A I A S N R S L Y D U", 100, 70);

            fill('white');
            textSize(15);
            text("Who is the brother of Sherlock Holmes ?",700, 50);
            fill('lightblue');
            text("F C M Y T R O", 700, 70);

            fill('white');
            textSize(15);
            text("How do you think Roger was murdered?", 100, 250);
            fill('lightblue');
            text(" There was no other injury in his body except the head", 100, 270);

            fill('white');
            textSize(15);
            text("What do you think is the last word of Roger's message?", 700, 290);
            fill('lightblue');
        }
        if (gameState === 6){
            fill('white');
            textSize(15);
            text("Which instrument did sherlock loved to play?", 100, 50);
            fill('lightblue');
            text("O V N I L I", 100, 70);

            fill('white');
            textSize(15);
            text("In which scotland yard detective did he see hope of personal success?", 700, 50);
            fill('lightblue');
            text("H S T O H N E K P N S I", 700, 70);

            fill('white');
            textSize(15);
            text("When was the first Covid case reported in New Zealand?", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("When it was reported that COVID is over in New Zealand?", 700, 290);
            fill('lightblue');
        }
        if (gameState === 9){
            fill('white');
            textSize(15);
            text("in which country did sherlock defeated moriarty?", 100, 50);
            fill('lightblue');
            text("W Z S L I D T R A E N", 100, 70);

            fill('white');
            textSize(15);
            text("In which story did watson met his wife?", 700, 50);
            fill('lightblue');
            text("F R A G S N F R U I O O", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
        if (gameState === 12){
            fill('white');
            textSize(15);
            text("who plays a protagonistic role in A Scandal In Bohemia?", 100, 50);
            fill('lightblue');
            text("R L D R E N E I E A", 100, 70);

            fill('white');
            textSize(15);
            text("what is the hound in the series 'Sherlock'?", 700, 50);
            fill('lightblue');
            text("Hint: H.O.U.N.D was written on a t-shirt", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
    }
    if (character === 2) {
        if (gameState === 3) {
            fill('white');
            textSize(15);
            text("in which country did sherlock defeated moriarty?", 100, 50);
            fill('lightblue');
            text("W Z S L I D T R A E N", 100, 70);

            fill('white');
            textSize(15);
            text("In the TV series, what was the episode in which Moriarty", 700, 50);
            fill('lightblue');
            text("L T L A H F C A B H N H E C E I R E", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
        if (gameState === 6) {
            fill('white');
            textSize(15);
            text("In which only novel is Moriarty mentioned?", 100, 50);
            fill('lightblue');
            text("E R A L A Y F O E L F A V", 100, 70);

            fill('white');
            textSize(15);
            text("In which fall did Moriarty jumped into?", 700, 50);
            fill('lightblue');
            text("L S L A H F C A B N H E C I R E", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
        if (gameState === 9) {
            fill('white');
            textSize(15);
            text("On which year did Moriarty died?", 100, 50);
            fill('lightblue');
            text("", 100, 70);

            fill('white');
            textSize(15);
            text("The day Moriarty died in stories, who was his only companion in chasing Holmes?", 700, 50);
            fill('lightblue');
            text("I T S A B E S N A R O M N A", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
        if (gameState === 12) {
            fill('white');
            textSize(15);
            text("After resigning the post of maths professor, what did he become?", 100, 50);
            fill('lightblue');
            text("C A H C A O R Y M", 100, 70);

            fill('white');
            textSize(15);
            text("On what did Moriarty write a treatise on ?", 700, 50);
            fill('lightblue');
            text("H T M O N E M E I B I O R L A", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("", 100, 270);

            fill('white');
            textSize(15);
            text("", 700, 290);
            fill('lightblue');
        }
    }
    
}