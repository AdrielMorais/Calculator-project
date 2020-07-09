function calculoSubt(...params){
    return params.reduce(function(total, next){
        return total- next
    });
}

console.log(calculoSubt(15,5))