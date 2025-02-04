class Student {
    constructor(lastName, firstName, middleName, year, grade, favoriteSubjects, studyDuration) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.setBirthYear(year);
        this.grade = grade;
        this.favoriteSubjects = favoriteSubjects;
        this.studyDuration = studyDuration;
    }

    setBirthYear(birthYear) {
        const currentYear = new Date().getFullYear();

        if (birthYear >= currentYear - 200 && currentYear >= birthYear) {
            this.birthYear = birthYear;
            console.log(`Отлично! Ошибок не обнаружено! Текущий диапазон - [${currentYear-200}-${currentYear}], Введенный год - ${birthYear}`)
        } else {
            console.log("Ошибка! Неверный год рождения!")
        }
    }

    setRegistrationAddress(country, city, houseNumber, apartmentNumber) {
        this.registrationAddress = { country, city, houseNumber, apartmentNumber };
    }

    setResidentialAddress(country, city, houseNumber, apartmentNumber) {
        this.residentialAddress = { country, city, houseNumber, apartmentNumber };
    }

    getStudentInfo() {
        return `
            <p>Фамилия: ${this.lastName}</p>
            <p>Имя: ${this.firstName}</p>
            <p>Отчество: ${this.middleName}</p>
            <p>Год рождения: ${this.birthYear}</p>
            <p>Класс: ${this.grade}</p>
            <p>Срок обучения: ${this.studyDuration} лет</p>
            <p>Любимые предметы: ${this.favoriteSubjects.join(", ")}</p>
            <p>Место прописки: страна - ${this.registrationAddress.country}, 
            город - ${this.registrationAddress.city}, 
            дом - ${this.registrationAddress.houseNumber}, 
            квартира - ${this.registrationAddress.apartmentNumber}</p>
            <p>Место проживания: страна - ${this.residentialAddress.country}, 
            город - ${this.residentialAddress.city}, 
            дом - ${this.residentialAddress.houseNumber}, 
            квартира - ${this.residentialAddress.apartmentNumber}</p>

        `;
    }

    promoteClass() {
        if (this.studyDuration === 9 && this.grade >= 9) {
            console.log("Максимальный класс достигнут (9 класс)");
        } else if (this.studyDuration === 11 && this.grade >= 11) {
            console.log("Максимальный класс достигнут (11 класс)");
        } else {
            this.grade += 1;
            console.log("Школьник переведен в " + this.grade + " класс");
        }
    }
}

let student = new Student(
    "Артемов",
    "Артем",
    "Артемович",
    1900,
    8,
    ["Математика", "Русский", "Информатика"],
    11,
);
student.setRegistrationAddress("Россия", "Кемерово", 25, 12);
student.setResidentialAddress("Россия", "Кемерово", 30, 8);

function displayInfo() {
    const output = document.getElementById("output");
    output.innerHTML = student.getStudentInfo();
}

displayInfo();