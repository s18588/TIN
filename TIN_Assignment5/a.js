let car = {
    brand: "Volvo",
    model: "XC90",
    mileage: 1000,
    horsepower: 250,

    printBrand : function() {
        console.log(brand);
    },

    printModel: function() {
        console.log(model);
    },
    printMileage : function() {
        console.log(mileage);
    }
}

function printer(object) {
    var propValue;
    for (var prop in object) {
        propValue = object[prop];
        console.log(prop,propValue);
    }
}

console.log(printer(car));