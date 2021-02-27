const setCookie = (value) => {
  let exdate = new Date();
  exdate.setDate(exdate.getMinutes() + 10);
  document.cookie = `weather = ${JSON.stringify(value)}`;
};

const getCookie = (c_name) => {
  let i,
    x,
    y,
    ARRcookies = document.cookie.split(';');
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    if (x === c_name) {
      return y;
    }
  }
};

const checkCookie = () => {
  let w = getCookie('weather');
  if (w) {
    return w;
  } else {
    return 0;
  }
};

module.exports = { checkCookie, setCookie };
