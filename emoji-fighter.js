
let fighter_array = [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🐣",
    "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛",
    "🦋", "🐌", "🐞", "🐜", "🕷️", "🦂", "🐢", "🐍", "🦎", "🐙",
    "🦑", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊",
    "🐅", "🐆", "🦓", "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫",
    "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🐐",
    "🦌", "🐕", "🐩", "🐈", "🐓", "🦃", "🕊️", "🐇", "🐁", "🐀",
    "🐿️", "🦔", "🦦", "🦨", "🦘", "🦥", "🦣", "🐉", "🐲", "🦖",
    "🦕", "🪲", "🪳", "🪰", "🪱", "🪶", "🦩", "🦚", "🦜", "🦢"
];

// to declare winner power level is hardcoded you can change as you like
const powerLevelOfFighters = {
    "🐶": 60, "🐱": 55, "🐭": 30, "🐹": 40, "🐰": 45, "🦊": 70, "🐻": 80, "🐼": 65, "🐨": 60, "🐯": 85, "🦁": 90, "🐮": 70, "🐷": 50, "🐸": 35, "🐵": 75, "🐔": 25,
    "🐧": 40, "🐦": 35, "🐤": 25, "🐣": 20, "🦆": 45, "🦅": 85, "🦉": 80, "🦇": 50, "🐺": 88, "🐗": 78, "🐴": 72, "🦄": 95, "🐝": 20, "🐛": 10, "🦋": 25, "🐌": 15,
    "🐞": 22, "🐜": 10, "🕷️": 30, "🦂": 60, "🐢": 25, "🐍": 65, "🦎": 35, "🐙": 70, "🦑": 55, "🦀": 50, "🐡": 45, "🐠": 40, "🐟": 35, "🐬": 75, "🐳": 85, "🐋": 90,
    "🦈": 95, "🐊": 88, "🐅": 90, "🐆": 88, "🦓": 60, "🦍": 95, "🦧": 85, "🐘": 92, "🦛": 86, "🦏": 90, "🐪": 70, "🐫": 72, "🦒": 65, "🦘": 75, "🐃": 80, "🐂": 78,
    "🐄": 70, "🐎": 82, "🐖": 50, "🐏": 60, "🐑": 55, "🐐": 58, "🦌": 68, "🐕": 60, "🐩": 65, "🐈": 55, "🐓": 40, "🦃": 45, "🕊️": 30, "🐇": 50, "🐁": 25, "🐀": 30,
    "🐿️": 40, "🦔": 45, "🦦": 60, "🦨": 50, "🦥": 20, "🦣": 90, "🐉": 100, "🐲": 100, "🦖": 95, "🦕": 85, "🪲": 25, "🪳": 20, "🪰": 15, "🪱": 10, "🪶": 5, "🦩": 60,
    "🦚": 70, "🦜": 65, "🦢": 60
};

// Selecting DOM elements
let fightButton = document.getElementById("fightButton");
let fightersEl = document.getElementById("fighters");

fightButton.addEventListener("click", function () {

    //generating random index for array 
    let i = Math.floor(Math.random() * fighter_array.length);
    let j = Math.floor(Math.random() * fighter_array.length);
    // using randomly generated index fetch array element   
    let fighter1 = fighter_array[i];
    let fighter2 = fighter_array[j];

    // get power levels from object
    let power1 = powerLevelOfFighters[fighter1];
    let power2 = powerLevelOfFighters[fighter2];

    // Display fighters on screen 
    fightersEl.innerText = fighter_array[i] + "  vs  " + fighter_array[j];
         
     let result =
        power1 > power2 ? `Winner is ${fighter1} 🏆`: (power2 === power1
                                                            ? "Oops! It's a tie — they have the same power level 🤝"
                                                            : `Winner is ${fighter2} 🏅`
                                                        );

    // Show  winner emoji
    document.getElementById("winner").innerText = result

});
