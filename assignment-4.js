
ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

let sumData = {};

for (let element of ratingData) {
    if (sumData[element.restaurant]) {
        sumData[element.restaurant].sum = sumData[element.restaurant].sum + element.rating;
        sumData[element.restaurant].n++;
    } else {
        sumData[element.restaurant] = {
            sum: element.rating,
            n: 1
        };
    }
}
//console.log(sumData)

let averageData = [];

for (let element of Object.keys(sumData)) {
    averageData.push({
        restaurant: element,
        rating: sumData[element].sum / sumData[element].n
    });
}

console.log(averageData)


//question-2

let filterData = averageData.filter(item => item.rating > 4);

console.log(filterData);


//another way to get unique list
var uniquelist = [];

for (item of ratingData) {
    if (uniquelist.indexOf(item.restaurant) === -1) {
        uniquelist.push(item.restaurant);
    }
}


// second method

ratingData1 = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

var uniqueList = ratingData1.map(item => item.restaurant).filter((item, index, unique) => {
    return unique.indexOf(item) == index;
})

console.log(uniqueList);

var averageInfo = uniqueList.map((rest) => {
    var sameList = ratingData1.filter((item) => {
        return item.restaurant == rest;
    })
    return {
        restaurant: rest,
        rating: (sameList.reduce((a, b) => a + b.rating, 0) / sameList.length).toFixed(2)
    }
})

console.log(averageInfo);

var filterInfo = averageInfo.filter(item => item.rating > 4);

console.log(filterInfo);