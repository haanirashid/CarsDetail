console.log("testing");

var toyota = [
    {
        serialNumber : 1,
        model : "Toyota Fortuner",
        price : 10000000,
        unitSold : 20 
    },
    {
        serialNumber : 2,
        model : "Toyota Land Cruiser",
        price : 20000000,
        unitSold : 8 
    },
    {
        serialNumber : 3,
        model : "Toyota Corolla",
        price : 7500000,
        unitSold : 12 
    },
    {
        serialNumber : 4,
        model : "Toyota Prius",
        price : 8000000,
        unitSold : 16 
    },
    {
        serialNumber : 5,
        model : "Toyota 4Runner",
        price : 12600000,
        unitSold : 11 
    }
];
var mercedes = [
    {
        serialNumber : 1,
        model : "Mercedes-Benz C-Class",
        price : 10000000,
        unitSold : 20 
    },
    {
        serialNumber : 2,
        model : "Mercedes-Benz E-Class",
        price : 20000000,
        unitSold : 8 
    },
    {
        serialNumber : 3,
        model : "Mercedes-maybach",
        price : 25000000,
        unitSold : 12 
    },
    {
        serialNumber : 4,
        model : "Mercedes-amg Gt",
        price : 12000000,
        unitSold : 16 
    },
    {
        serialNumber : 5,
        model : "Mercedes-Benz Sprinter",
        price : 12600000,
        unitSold : 11 
    }
];
var audi = [
    {
        serialNumber : 1,
        model : "Audi E-tron",
        price : 10000000,
        unitSold : 20 
    },
    {
        serialNumber : 2,
        model : "Audi E-tron Gt",
        price : 20000000,
        unitSold : 8 
    },
    {
        serialNumber : 3,
        model : "Audi Q8",
        price : 25000000,
        unitSold : 12 
    },
    {
        serialNumber : 4,
        model : "Audi Q7",
        price : 12000000,
        unitSold : 16 
    },
    {
        serialNumber : 5,
        model : "Audi RS5",
        price : 12600000,
        unitSold : 11 
    }
];

var tesla = [
    {
        serialNumber : 1,
        model : "Tesla Model S",
        price : 10000000,
        unitSold : 20 
    },
    {
        serialNumber : 2,
        model : "Tesla Model X",
        price : 20000000,
        unitSold : 8 
    },
    {
        serialNumber : 3,
        model : "Tesla Model Y",
        price : 25000000,
        unitSold : 12 
    },
    {
        serialNumber : 4,
        model : "Tesla Cybertruck",
        price : 12000000,
        unitSold : 16 
    },
    {
        serialNumber : 5,
        model : "Tesla Semi",
        price : 12600000,
        unitSold : 11 
    }
];



// Print on DOM
function display(a,target){
    var target = document.getElementById(target);
    for(let i=0; i < a.length; i++){
        console.log(i);
        target.innerHTML +=
        `
        <tr>
            <td>${a[i].serialNumber}</td> 
            <td>${a[i].model}</td> 
            <td>${a[i].unitSold}</td> 
            <td>${a[i].price}</td> 
            <td>${a[i].price * a[i].unitSold}</td> 
        </tr>
        `   
    }
};


//Function Run
display(toyota,"toyota_target");
display(mercedes,"mercedes_target");
display(audi,"audi_target");
display(tesla,"tesla_target");

//End