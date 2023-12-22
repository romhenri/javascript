export function formatUsername(username) {
  // No white spaces, no accents, no capital letters
  return username.replace(/\s/g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
export function formatEmail(email) {
  return email.toLowerCase();
}
export function formatCPF(number) {
  return number.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
export function formatCNPJ(number) {
  return number.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
export function formatCEP(number) {
  return number.replace(/(\d{5})(\d{3})/, '$1-$2');
}
export function formatPhone(number) {
  if (number.length === 13) {
    return number.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '$2 ($1) $3-$4');
  }
  else if (number.length === 11) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
  }
  else if (number.length === 10) {
    return number.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
  }
  else if (number.length === 8) {
    return number.replace(/(\d{4})(\d{4})/, '$1 $2');
  }
}
export function formatMoney(number) {
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export function formatMoneyToNumber(number) {
  return number.replace(/[^0-9,]/g, '').replace(',', '.');
}

// console.log(formatUsername('  João da Silva  ')); // Out: joaodasilva
// console.log(formatCPF('12345678909')); // Out: 123.456.789-09
// console.log(formatCNPJ('12345678901234')); // Out: 12.345.678/9012-34
// console.log(formatCEP('12345678')); // Out: 12345-678
// console.log(formatPhone('12345678')); // Out: 34567-890
// console.log(formatPhone('1234567890')); // Out: (12) 34567-890
// console.log(formatPhone('12345678901')); // Out: (12) 34567-8901
// console.log(formatPhone('1234567890123')); // Out: (12) 34567-8901
// console.log(formatMoney(123456789)); // Out: R$ 123.456.789,99
// console.log(formatMoneyToNumber('R$ 123.456.789,99')); // Out: 123456789.99