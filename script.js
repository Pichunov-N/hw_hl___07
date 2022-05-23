class Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }
    celebrate() {
        return "Happy Birthday, let's celebrate"
    }
}

class Employee extends Person {
    #salary;

    constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
        super(firstName, lastName, age, birthDayDate)
        this.#salary = salary;
        this.jobPosition = jobPosition;
    }

    get salary() {
        return this.#salary;
    }

    getYearSalary() {
        const yearSalary = this.salary * 12;
        return yearSalary;
    }

    isWeekend(selectedDay) {
        selectedDay = this.birthDayDate;
        const date = new Date(selectedDay);
        const weekendDay = date.getDay();
        if (weekendDay == 6 || weekendDay == 0) {
            return super.celebrate()
        } else {
            return "Happy Birthday, but I need to work"
        }
    }

    celebrate() {
        const birthDay = new Date()
        const currentYear = birthDay.getFullYear()
        const settedYear = birthDay.setFullYear(currentYear)
        return this.isWeekend(settedYear)
    }
}

const person = new Person('Diego', 'Sanchez', 40, '1981-12-31');
const employee = new Employee('Ben', 'Smith', 34, '1988-06-27', 2300, 'driver')

console.log(person)
console.log(employee)
console.log(person.celebrate())
console.log(employee.celebrate())