function countProfit(buyer) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var result = []
    var resultObj = {}
    if(buyer.length === 0 || buyer === undefined){
        return result
    }
    for(i = 0; i < listBarang.length; i++){
        // console.log(listBarang[i])
        if(resultObj[listBarang[i][0]] === undefined){
            resultObj[listBarang[i][0]] = {
                product: listBarang[i][0],
                shoppers: [],
                leftOver:  listBarang[i][2],
                totalProfit: 0
            }
        }
        
        for(j = 0; j < buyer.length; j++){
            if(buyer[j].product === listBarang[i][0] && buyer[j].amount <= listBarang[i][2]){
                listBarang[i][2] -= buyer[j].amount
                resultObj[listBarang[i][0]].shoppers.push(buyer[j].name)
                resultObj[listBarang[i][0]].leftOver -= buyer[j].amount
                var profit = listBarang[i][1] * buyer[j].amount
                resultObj[listBarang[i][0]].totalProfit += profit
            }
            //sampek buyer mau masuk lewat push
        }


    }
    var keys = Object.keys(resultObj)
    // console.log(keys)
    for(i = 0; i < keys.length; i++){
        result.push(resultObj[keys[i]])
    }
    return result
    // return resultObj
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]



