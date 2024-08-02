(() => {
    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) {
        }
    }
    const newPerson = new Person('Clara', 'F', new Date('1983-05-07'));
    console.log(newPerson);
})();