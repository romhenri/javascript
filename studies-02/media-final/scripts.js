var num = 0
var dem = 0

function Executar() {
    // Coleta de Valores

    console.log('Executou!');

    var averageScoreGlobal = document.getElementById('averageScoreGlobal')


    // var averageGoalFinal = document.getElementById('averageGoalFinal')
    // var ASGp = document.getElementById('ASGp')
    // var AGFp = document.getElementById('AGFp')

     var ASG = averageScoreGlobal.value
    // var AGF = averageGoalFinal.value
    // var ASGp = ASGp.value
    // var AGFp = AGFp.value

    console.log(typeof ASG)
    console.log(typeof AGF)
    console.log(typeof ASGp)
    console.log(typeof AGFp)

    ASGp = 6
    AGFp = 4
    AGF = 5

    console.log('Valores:');
    console.log(ASG);
    console.log(ASGp);
    console.log(AGF);
    console.log(AGFp);

    
    var ASG = Number(ASG.value)
    var AGF = Number(AGF.value)
    var ASGp = Number(ASGp.value)
    var AGFp = Number(AGFp.value)
    
    console.log(typeof ASG)
    console.log(typeof AGF)
    console.log(typeof ASGp)
    console.log(typeof AGFp)

    // Calculo 

    console.log('Calculo:');

    // num = AGF * ASG * AGFp * ASGp
    num = 6.8 * 6 + 5 * 4

    console.log(num)

    den = 10

    console.log(den)

    var x = num / den

    console.log(x)

    var con = document.getElementById('conclusion')
    con.innerHTML= (x)
}