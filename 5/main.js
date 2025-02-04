class Student {
    constructor(lastName, firstName, middleName, year, grade, favoriteSubjects) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthYear = year;
        this.grade = grade;
        this.favoriteSubjects = favoriteSubjects;
    }

    getStudentInfo() {
        return `
            <p>Фамилия: ${this.lastName}</p>
            <p>Имя: ${this.firstName}</p>
            <p>Отчество: ${this.middleName}</p>
            <p>Год рождения: ${this.birthYear}</p>
            <p>Класс: ${this.grade}</p>
            <p>Любимые предметы: ${this.favoriteSubjects.join(", ")}</p>
        `;
    }
}

const student = new Student(
    "Артемов",
    "Артем",
    "Артемович",
    1998,
    9,
    ["Математика", "Русский", "Информатика"]
);

function displayInfo() {
    const output = document.getElementById("output");
    output.innerHTML = student.getStudentInfo();
}

displayInfo();