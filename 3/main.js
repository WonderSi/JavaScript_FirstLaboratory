function numberFactorial(number) {
    if (number < 0) {
        return "Ошибка! Факториал отрицательного числа не определен";
    }

    let result = 1;
    for (let i = 2; i <= number; i+=1) {
        result *= i;
    }

    return result;
}

function numberArithmetic(number) {
    let result = 0;
    for (let i = 1; i<=number; i+=1) {
        console.log(i)
        result += i;
    }

    return result / number ;
}

function displayNumber() {
    const input = document.getElementById("numberInput").value;

    const number = parseFloat(input);
    if (!isNaN(number)) {
        document.getElementById('outputFirst').textContent = `Вы ввели число: ${number}`;
        if (number % 2 == 0) {
            let factorial = numberFactorial(number);
            document.getElementById('outputSecond').textContent = `Число четное! Факториал: ${factorial}`;
        } else {
            const arithmetic = numberArithmetic(number);
            document.getElementById('outputSecond').textContent = `Число нечетное! Среднее арифметическое: ${arithmetic}`;
        }
    } else {
        document.getElementById('outputFirst').textContent = 'Пожалуйста, введите корректное число.';
    }
}