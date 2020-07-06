let inputR = document.getElementById("test")

let array = inputR.split("+", "-","*", "/", "^") 

let calculadora = {

    calculoSoma: function(...params){
        return params.reduce(function(total,next){
            return total+next
        });
    },

    calculoSubt: function(...params){
        return params.reduce(function(total,next){
            return total - next
        });
    },

    calculoMult: function(...params){
        return params.reduce(function(total, next){
            return total * next
        });
    },

    calculoDiv: function(a, b){
        return a / b
    },

    calculoPot: function(a, b){
        return Math.pow(a, b)
    }
};







let calculadora = {

    calculoSoma: function(a,b,c=0,d=0,e=0,f=0){
        return a + b + c + d + e + f
    },

    calculoSubt: function(a,b,c=0,d=0,e=0,f=0){
        return a - b - c - d - e - f
    },

    calculoMult: function(a,b,c=0,d=0,e=0,f=0){
        return a * b * c * d * e * f
    },

    calculoDiv: function(a,b){
       return a / b
    },

    calculoPot: function(a,b){
        
        return Math.pow(a,b)
    },

}

calculadora.calculoSoma()
calculadora.calculoSubt()
calculadora.calculoMult()
calculadora.calculoDiv()
calculadora.calculoPot()
