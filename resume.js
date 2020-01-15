var nameString = 'Ryan austin';

var resume =
    [
        'Name:' + nameString.toUpperCase(),
        'Career: myspace influncer',
        'Description: I love playing undertale.',
        "\n"]

var interests = ["Interests:",
    "* Listening to lofi and crying",
    "* Trying to get tiktok famous",
    "* Eating cereal for lunch",
    "\n",
    "My Previous Experience:",
    "* Xenga Influncer",
    "* AIM chatroom troll",
    "* CEO of old internet references",
    "\n"]


var skills =
    [
        { skill: "Nunchucks skills", isCool: true },
        { skill: "Computer hacking skills", isCool: true },
        { skill: "girls like guys with lots of skills", isCool: false },
        { skill: "Tina u fat lard come get your dinner", isCool: false }
    ]

// var careerInfo =
//     [
//         { cName: "Blah", jobTitle: "Pizza Delivery Guy", description: "Delivered pizzas" },
//     ]

// function displayPosition2() {
//     for (let i = 0; i < careerInfo.length; i++) {
//         console.log(careerInfo[i].cName)
//     }
// }
// displayPosition()

function displaySkill() {
    console.log("Skills: ")
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].isCool == true) {
            console.log("* Bam: " + skills[i].skill)

        }
        else {
            console.log("* " + skills[i].skill)
        }
    }
}


function displayPosition() {
    for (var i = 0; i < resume.length; i++) {
        console.log(resume[i])
    };
}
displayPosition()

for (var i = 0; i < interests.length; i++) {
    console.log(interests[i])
}
displaySkill()