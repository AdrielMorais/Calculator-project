let simb = []

let som = document.getElementById("som").addEventListener("click", function(){
    return "+"
});
let subt =document.getElementById("subt").addEventListener("click", function(){
    return "-"
});
let mult =document.getElementById("mult").addEventListener("click", function(){
    return "*"
});
let div =document.getElementById("div").addEventListener("click", function(){
    return "/"
});
let pot =document.getElementById("pot").addEventListener("click", function(){
    return "^"
});
let por =document.getElementById("por").addEventListener("click", function(){
    return "%"
});
let n1 =document.getElementById("1").addEventListener("click", function(){
    return 1
});
let n2 =document.getElementById("2").addEventListener("click", function(){
    return 2
});
let n3 =document.getElementById("3").addEventListener("click", function(){
    return 3
});
let n4 =document.getElementById("4").addEventListener("click", function(){
    return 4
});
let n5 =document.getElementById("5").addEventListener("click", function(){
    return 5
});
let n6 =document.getElementById("6").addEventListener("click", function(){
    return 6
});
let n7 =document.getElementById("7").addEventListener("click", function(){
    return 7
});
let n8 =document.getElementById("8").addEventListener("click", function(){
    return 8
});
let n9 =document.getElementById("9").addEventListener("click", function(){
    return 9
});
let n0 =document.getElementById("0").addEventListener("click", function(){
    return 0
});
let ac =document.getElementById("ac").addEventListener("click", function(){
    return "ac"
});
let c = document.getElementById("c").addEventListener("click", function(){
    return "c"
});


let array = inputR.split("+", "-","*", "/", "^", "") 

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

calculadora.calculoSoma()
calculadora.calculoSubt()
calculadora.calculoMult()
calculadora.calculoDiv()
calculadora.calculoPot()
calculadora.calculoPot()

// diminuir = em espera
//ligação = em espera
// substituição = em espera
// variavel do conteudo = em espera