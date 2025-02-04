const students = [
    ["Петров", "Петр", 1, "A100"],
    ["Иванов", "Иван", 3, "B100"],
    ["Максимов", "Максим", 2, "B101"],
    ["Антонов", "Антон", 4, "A100"],
    ["Олегов", "Олег", 2, "A102"],
    ["Дмитрьев", "Дмитрий", 3, "B102"]
]

function findStudents() {
    const directionCode = document.getElementById("directionCode").value;


    const output = document.getElementById("output");
    output.innerHTML = "";

    console.log("Студенты других направлений:")

    let found = false;

    for (const student of students) {
        const [lastName, firstName, course, code] = student;

        if (code === directionCode) {
            output.innerHTML += `<p>${lastName} ${firstName}, курс ${course}, код направления ${code}</p>`

            found = true;
        } else {
            console.log(`${lastName} ${firstName}, курс ${course}, код направления ${code}`);
        }

    }

    if(!found) {
        output.innerHTML = "<p>Студентов с таким кодом направления не найдено!</p>"
    }
}