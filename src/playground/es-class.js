class Person{
    constructor(name = 'Anonymous', age = 0)
    {
        this.name = name;
        this.age = age;
    }
    Greetings()
    {
        return (`Hi, I am ${this.name}`);
    }
    GetDescription()
    {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

class Traveller extends Person{
    constructor(name, age, location)
    {
        super(name, age);
        this.homeLocation = location;
    }
    HasLocation()
    {
        return !!this.homeLocation;
    }
    Greetings()
    {
        let greeting = super.Greetings();
        if(this.HasLocation())
        {
            greeting += `. I am visiting ${this.homeLocation}`;
        }
        console.log(greeting);
    }
}

const me = new Person('Siddharth', 24);
console.log(me.Greetings());
me.GetDescription();

const traveller = new Traveller('Andrew', 25, 'New York');
traveller.Greetings();

const anon = new Traveller();
anon.Greetings();