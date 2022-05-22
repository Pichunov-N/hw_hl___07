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
    #salary = 2300;

    constructor(firstName, lastName, age, birthDayDate, jobPosition) {
        super(firstName, lastName, age, birthDayDate)
        // this.#salary = salary;
        this.jobPosition = jobPosition;
    }

    get salary() {
        return this.#salary;
    }

    getYearSalary() {
        const yearSalary = this.salary * 12;
        return yearSalary;
    }
    celebrate() {
        const birthDay = new Date(this.birthDayDate)
        const workOrWeekend = birthDay.getDay()
        if (workOrWeekend == 6 || workOrWeekend == 0) {
            return "Happy Birthday, let's celebrate"
        } else {
            return "Happy Birthday, but I need to work"
        }
    }
}

const person = new Person('Diego', 'Sanchez', 40, '1981-12-31');
const employee = new Employee('Ben', 'Smith', 34, '1988-06-27', 2300, 'driver')

console.log(person)
console.log(employee)
console.log(person.celebrate())
console.log(employee.celebrate())

// employee.salary = 3000;
// console.log(employee.salary)