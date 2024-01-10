import { dates } from './dates.js';

const main = document.querySelector('main');

const sortedDates = dates.sort((a, b) => {
  if (a.data > b.data) {
    return 1;
  }
  if (a.data < b.data) {
    return -1;
  }
  return 0;
});

sortedDates.forEach(date => {
  RenderCard(date.data, date.descricao);
})

function RenderCard(
  date,
  desc
) {
  const card = document.createElement('div');
  card.classList.add('card');
  const day = date.split('-')[1];
  const month = date.split('-')[0];

  card.innerHTML = `
    <div>
      <div>
        ${getDay(day)} de
      </div>
      <div>
        ${getMonthName(month)}
      </div>
    </div>  
    
    <div>
      <p>
        ${fixName(desc)}
      </p>
    </div>
    
  `
  main.appendChild(card);
}

function fixName(name) {
  let newName = name.replace(/Ã©/g, 'é');
  newName = newName.replace(/Ã§/g, 'ç');
  newName = newName.replace(/Ã£o/g, 'ão');
  newName = newName.replace(/Ã³/g, 'ó');
  newName = newName.replace(/Ã¡/g, 'á');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Ãº/g, 'ú');
  newName = newName.replace(/Ãµ/g, 'õ');
  newName = newName.replace(/Ã¢/g, 'â');
  newName = newName.replace(/Ã/g, 'í');
  newName = newName.replace(/Ã­/g, 'í');
  newName = newName.replace(/Ã´/g, 'ô');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Ã³/g, 'ó');
  newName = newName.replace(/Ã´/g, 'ô');
  newName = newName.replace(/Ãª/g, 'ê');
  newName = newName.replace(/Âº/g, 'º');

  return newName;
}
function getMonthName(month) {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
    'Dezembro'
  ];

  return months[month - 1];
}
function getDay(day) {
  return day.split('')[0] === '0' ? day.split('')[1] : day;
}
