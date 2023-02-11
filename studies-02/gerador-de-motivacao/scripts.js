const BTN = document.getElementById('btn')
const MQC = document.getElementById('conclusionSpace')
var x = 0

const quotes = [
    '“O homem que sofre antes de ser necessário, sofre mais que o necessário.” - Sêneca',
    '“Nada é tão lamentável e nocivo como antecipar desgraças.” - Sêneca',
    '“Podemos ser fluentes em sala de aula, mas nos leve para fora, para a realidade, e nos mostramos verdadeiros náufragos - Epicteto',    
    'Não existe obstáculo no caminho, o obstáculo é o próprio caminho.',
    '“Não tente fazer com que os fatos aconteçam como você quer, mas deseje que aconteçam como eles acontecem e você se sairá bem.” - Epicteto',
    '“Aquilo que foi doloroso suportar torna-se agradável depois de suportado; é natural sentir prazer no final do próprio sofrimento.” - Sêneca',
    'Coloque sua percepção ao seu favor.',
    '“A vida é apenas o que você julga.” - Marco Aurélio',
    '“Se eu não vejo a coisa como mal, não me importo.” - Marco Aurélio',
    '“O que importa não é o que acontece, mas como você reage.” - Epicteto',
    '“O melhor modo de vingar-se de um inimigo, é não se assemelhar a ele.” - Marco Aurélio',
    '“Mais dolorosas são as consequências da ira do que as suas causas.” - Marco Aurélio',    
    'O mais fascinante de um insulto ou elogio é que eles não provocam nenhuma alteração na realidade seja ela qual for, isso mostra que dependem da percepção de quem recebe.',
    '“A maldade bebe a maior parte do veneno que produz.” - Sêneca',
    '“Doente e ainda assim feliz, em perigo e ainda assim feliz, morrendo e ainda assim feliz, no exílio e ainda assim feliz, na desgraça e feliz.” - Epicteto',
    '“Preocupe-se mais com a sua consciência do que com sua reputação.Porque sua consciência é o que você é, e a sua reputação é o que os outros pensam de você. E o que os outros pensam, é problema deles.” - Marco Aurélio',
    '“Quanto não ganha em tranquilidade quem não se preocupa com o que o vizinho diz, faz ou pensa, mas apenas com os seus próprios atos” - Marco Aurélio',
    '“Quanto não ganha em tranquilidade quem não se preocupa com o que o vizinho diz, faz ou pensa, mas apenas com os seus próprios atos“ - Marco Aurélio',
    'Não se compare com ninguém, a não ser você mesmo.',
    '“O homem comum é exigente com os outros; o homem superior é exigente consigo mesmo.” - Marco Aurélio',
    '“É impossível para um homem aprender aquilo que ele acha que já sabe.” - Epicteto',
    '“O que você pensa de si mesmo é muito mais importante do que o que os outros pensam de você.” - Sêneca',
    '“Se pretendes fazer alguma coisa, transforme em hábito a tua pretensão. Se não pretendes, abstém-te de fazê-la” - Epicteto',
    '“A maior parte das coisas que dizemos e fazemos não é necessária; quem as eliminar da própria vida será mais tranquilo e sereno.” - Marco Aurélio',
    'Memento Mori: Lembre-se de que você é mortal.',
    '“Quando você acorda de manhã, pense no fantástico privilégio que é estar vivo - respirar, pensar, desfrutar, amar.” - Marco Aurélio',
    '“Mantenha-se simples, bom, puro, sério, livre de afetação, amigo da justiça, temente aos deuses, gentil, apaixonado, vigoroso em todas assuas atitudes. Lute para viver como a filosofia gostaria que vivesse.Reverencie os deuses e ajude os homens. A vida é curta.” - Marco Aurélio',
    '“Morremos como mortais que somos, e vivemos como se fôramos imortais.” - Sêneca',
    '“É um homem sensato aquele que não lamenta pelo que não tem, mas se alegra pelo que tem.” - Epicteto',
]

BTN.addEventListener('click', () => {
    console.log('Botão pressionado.');
    console.log(quotes);
    console.log(quotes.length);

    let x = parseInt(Math.random() * (quotes.length));
    console.log(x);

    console.log(`Sua frase é ${quotes[x]}`);

    MQC.innerHTML = (`${quotes[x]}`)


})