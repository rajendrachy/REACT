function printValue(value: string |  number) : void {

    if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(typeof value === 'number'){
            console.log(value * 2);
    }
}

printValue(10);
printValue("Rajendra");
