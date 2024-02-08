console.log("Hello from Batch #1565 LiveCode! 👩🏼‍💻");

const students = [
    {firstName:"Emma", favoriteMeal: "French Fries", favoriteActivity: "Coding"},
    {firstName:"Vio", favoriteMeal: "Feta Cheese", favoriteActivity: "Partyyyyy & Spinning"},
    {firstName:"Ines", favoriteMeal: "Puffer Kit", favoriteActivity: "Reading books"},
    {firstName:"Sebastian", favoriteMeal: "Lasagna", favoriteActivity: "CATAN!!!!!!!"},
]

const sayStuff = (students) => {
    students.forEach( student => {
        document.querySelector("#messageDisplay").insertAdjacentHTML("afterend", `<p>${student.firstName} loves ${student.favoriteMeal} while doing ${student.favoriteActivity} 🐝</p>`);
    });
};

sayStuff(students)