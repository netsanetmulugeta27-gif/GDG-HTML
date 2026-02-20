function startTest() {

    let score = 0;

    // Question 1: Sleep
    let sleepHours = parseInt(prompt("How many hours do you sleep per day?"));

    if (sleepHours >= 4) {
        score++;
    }

    // Question 2: Music
    let music = prompt("Do you enjoy music? (yes/no)").toLowerCase();

    if (music === "yes") {
        score++;
    }

    // Question 3: Gets tired
    let tired = prompt("Do you get tired? (yes/no)").toLowerCase();

    if (tired === "yes") {
        score++;
    }

    // Question 4: Simple math test
    let math = prompt("What is 2 + 2 ?");

    if (math == 4) {
        score++;
    }

    // Final Decision
    if (score >= 3) {
        alert("✅ You are definitely human!");
        console.log("Human");
    } 
    else if (score >= 1) {
        alert("⚠️ Half human, half robot!");
        console.log("Half robot");
    } 
    else {
        alert("🤖 Robot detected!");
        console.log("Robot");
    }
}