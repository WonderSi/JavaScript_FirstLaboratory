class Student {
    constructor(lastName, firstName, middleName, year, grade, favoriteSubjects) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthYear = year;
        this.grade = grade;
        this.favoriteSubjects = favoriteSubjects;
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
}

let student = new Student(
    "Артемов",
    "Артем",
    "Артемович",
    1998,
    9,
    ["Математика", "Русский", "Информатика"]
);
student.setRegistrationAddress("Россия", "Кемерово", 25, 12);
student.setResidentialAddress("Россия", "Кемерово", 30, 8);

function displayInfo() {
    const output = document.getElementById("output");
    output.innerHTML = student.getStudentInfo();
}

displayInfo();