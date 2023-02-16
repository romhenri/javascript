// Atribuições 
const BTN = document.getElementById('btn')
const MQC = document.getElementById('conclusionSpace')
const HT = document.getElementById('title')
var used = []
var x = 0

console.log(used);

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
    '“Preocupe-se mais com a sua consciência do que com sua reputação. Porque sua consciência é o que você é, e a sua reputação é o que os outros pensam de você. E o que os outros pensam, é problema deles.” - Marco Aurélio',
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
    '“Mantenha-se simples, bom, puro, sério, livre de afetação, amigo da justiça, temente aos deuses, gentil, apaixonado, vigoroso em todas assuas atitudes. Lute para viver como a filosofia gostaria que vivesse. Reverencie os deuses e ajude os homens. A vida é curta.” - Marco Aurélio',
    '“Morremos como mortais que somos, e vivemos como se fôramos imortais.” - Sêneca',
    '“É um homem sensato aquele que não lamenta pelo que não tem, mas se alegra pelo que tem.” - Epicteto',
    '“A felicidade de sua vida depende da qualidade de seus pensamentos.” - Marco Aurélio',
    '“As dificuldades fortalecem a mente, assim como o trabalho o faz com o corpo.” - Sêneca',
    '“Quem não se contenta com pouco, não se contenta com nada.” - Epicuro',
    '“Você tem poder sobre sua mente, não sobre eventos externos. Perceba isso e você encontrará a sua força.” - Marco Aurélio',
    '“O homem não se preocupa tanto com problemas reais quanto com as ansiedades imaginadas sobre problemas reais.” - Epicteto',
    '“A morte, portanto, o mais terrível dos males, não é nada para nós, visto que, quando existimos, a morte não chegou e, quando a morte chegou, nós não existimos.” - Epicuro',
    '“É loucura um homem orar aos deuses por aquilo que ele tem o poder de obter por si mesmo.” - Epicuro',
    '“Lembre-se: não basta ser agredido ou insultado para ser ferido, você deve acreditar que está sendo prejudicado. Se alguém conseguir provocá-lo, perceba que a sua própria mente é cúmplice da provocação.” - Epicteto',
    '“Nada, na minha opinião, é uma prova melhor de uma mente bem organizada do que a capacidade de um homem parar exatamente onde está e passar algum tempo em sua própria companhia.” - Sêneca',
    '“A alma é tingida com a cor de seus pensamentos.” - Marco Aurélio',
    'Foco não é sobre dizer "Sim" para uma coisa, mas dizer "Não" para todas as outras.'
]

console.log(`Disponível: ${quotes.length} opções de citações.`);

// BTN.addEventListener('click', () => {

function generate() {
    console.log('Botão pressionado.');

    HT.style.color = 'rgba(240, 248, 255, 0.704)';

    var x = parseInt(Math.random() * (quotes.length));
    console.log(x);

// Sistema Anti-Repetição

    if (used.length == quotes.length) {

        console.log('Todas as frases foram usadas!');
        used = []

    } else if (used.includes(x)) {

        console.log('Repetição detectada!');
        return generate()

    } else if (2 > 1){
        used.push(x)
        
        used = used.sort(function(a, b) {
            return a - b;
        });

        console.log(used);

        console.log(`Citação: ${quotes[x]}`);

        MQC.innerHTML = (`${quotes[x]}`)
    }
}