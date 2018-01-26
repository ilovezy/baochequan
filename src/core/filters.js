export function formatDate(timestamp, format) {
  if (!timestamp) {
    return '';
  }
  const date = new Date(Number.parseInt(timestamp, 10));
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let i = date.getMinutes();
  let s = date.getSeconds();
  const w = date.getDay();
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  i = i < 10 ? '0' + i : i;
  s = s < 10 ? '0' + s : s;

  return format.replace('YYYY', y)
    .replace('MM', m)
    .replace('DD', d)
    .replace('H', h)
    .replace('i', i)
    .replace('s', s)
    .replace('WW', week[w]);
}


export function timeFormat(time, defaultValue = 0) {
  const stringTime = time ? (time / window.CONFIG.timeUnit).toFixed(2) : defaultValue;
  return Number(stringTime);
}

export function moneyFormat(money, defaultValue = 0) {
  const stringMoney = money ? (money / window.CONFIG.moneyUnit).toFixed(2) : defaultValue;
  return Number(stringMoney);
}

export function oppenent(money, defaultValue) {
  return 0 - Number(money);
}

export function signStatus(status) {
  return window.ENUM.SignType[status];
}

export function desc(value, field) {
  const descs = window.ENUM[field];
  return descs && descs[value] || '';
}

export function timeToDates(value) {
  const date = Math.floor(value / 24 / 60 / 60 / 1000);
  return date;
}

export function formatContent(value) {
  const regRN = /[↵]/g;
  console.log(value.replace(regRN, '<br/>'));
  return value.replace(regRN, '<br/>');
}
