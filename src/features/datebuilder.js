module.exports = function (d) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];
  return `${day},  ${String(d).slice(3, 15)}`;
};
