function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(() => {
        let scoreObject = {
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0
        };

        console.log("Score initialized:", scoreObject);

        Race100M(scoreObject, callback);
    }, 1000);
}

function Race100M(scoreObject, callback) {
    setTimeout(() => {
        let raceTime = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10
        };

        let sortedObject = Object.keys(raceTime).sort((a, b) => raceTime[a] - raceTime[b]);

        scoreObject[sortedObject[0]] += 50;
        scoreObject[sortedObject[1]] += 25;

        console.log("Updated Race100M ScoreObject", scoreObject);

        callback(scoreObject, LongJump);
    }, 3000);
}

function LongJump(scoreObject, callback) {
    setTimeout(() => {
        const colors = ["red", "blue", "green", "yellow"];
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomColorIndex];

        console.log(randomColor);

        scoreObject[randomColor] += 150;

        console.log("Updated scores after LongJump:", scoreObject);

        callback(scoreObject, HighJump);
    }, 2000);
}

function HighJump(scoreObject, callback) {
    let userAsk = prompt("What colour secured the highest jump");

    if (userAsk === "red" || userAsk === "blue" || userAsk === "green" || userAsk === "yellow") {
        scoreObject[userAsk] += 100;
    } else {
        console.log("Event was cancelled");
    }

    AwardCeremony(scoreObject);
}

function AwardCeremony(scoreObject) {
    console.log("AwardCeremony initiated");

    const sortedScores = Object.entries(scoreObject).sort((a, b) => b[1] - a[1]);
    console.log(sortedScores);

    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}

OpeningCeremony(Race100M);
