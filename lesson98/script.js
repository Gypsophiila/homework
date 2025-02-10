const user = {
    Ivan: {
    age: 18,
    isStudent: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
        }
    }
}

user.Ivan.sayHello('Maks')

const users = [
    {
        name: 'ivan', 
        isAdmin: false
    },
    {
        name: 'dima', 
        isAdmin: true 
    },
    {
        name: 'gosha', 
        isAdmin: false
    },
    {
        name: 'kolya', 
        isAdmin: false
    }
]

let simpleUsers = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsers++
    }
}

console.log(simpleUsers)