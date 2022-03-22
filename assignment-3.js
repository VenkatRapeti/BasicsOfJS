orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

var total = Object.values(orderData).reduce((a, b) => a + b);


//var total = 0;
//for (var n of Object.values(orderData)) {
//  total += n;
//}

console.log(`sum = ${total}`)


var leng = Object.keys(orderData).length;

console.log(`total length = ${leng}`)



let required = Object.keys(orderData).map((key, index) => ({
    'id': index + 1,
    "order": key,
    "order percentage": (orderData[key] / total * 100).toFixed(2),
    'restaurant': "Punjabi "
}))
console.log(required)

// question-1 

class restaurantManager {
    constructor(intiate) {
        this.restaurantList = intiate;
    }

    printAllRestaurantNames = () => {
        return this.restaurantList.map(item => item.name);
    }
    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(item => item.city == cityName);
    }
}

var restaurantObj = new restaurantManager([
    {
        name: 'restaurant1',
        address: 'shalimar bagh,delhi',
        city: 'delhi'
    }, {
        name: 'restaurant2',
        address: 'near post office,bangalore',
        city: 'bangalore'
    }, {
        name: 'restaurant3',
        address: 'shalimar bagh,delhi',
        city: 'delhi'
    }, {
        name: 'restaurant4',
        address: "chandanagar,delhi",
        city: 'delhi'
    }
])

console.log(restaurantObj.printAllRestaurantNames());

console.log(restaurantObj.filterRestaurantByCity("delhi"));