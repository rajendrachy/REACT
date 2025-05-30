interface User {
    id: number,
    name: string,
    isActive: boolean,
}



function printUser(user: User) {
        console.log( `${user.id} - ${user.name} - ${user.isActive}`);
}

const ans: User = {
    id: 2311981617,
    name: "Rajendra Chaudhary",
    isActive: true,
}

printUser(ans);
