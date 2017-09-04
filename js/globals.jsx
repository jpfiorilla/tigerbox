const serialize = function(obj, excludes){
	let str = '';
	for (var prop in obj) if(!excludes.includes(prop)) str += prop + '=' + encodeURIComponent(obj[prop]) + '&';
	return str.substring(0, str.length-1);
}

const slugify = function(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
}

const titleAppend = ' | TigerBox';

const removeHash = function(){
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

let isMobile = false;
let isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let appName = isIos ? 'iOs' : 'Android';
let appUrl = globals.isIos ? 'https://itunes.apple.com/us/app/ofo-riding-your-way-in-the-us-uk-and-sg/id1190831637?mt=8' : 'https://play.google.com/store/apps/details?id=so.ofo.abroad&hl=en';
let androidUrl = "https://play.google.com/store/apps/details?id=so.ofo.abroad&hl=en";
let iosUrl = "https://itunes.apple.com/us/app/ofo-riding-your-way-in-the-us-uk-and-sg/id1190831637?mt=8";
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

let colorCodes = {
  blue: '#2673EC', // was '#2594ff'
  linkBlue: "#2593ff",
  lightBlue: "#B9DCFF",
  gold: '#FFBF25', // was '#FED64E'
  lightGrey: "#e3e3e3",
  orange: "#ec7322",
  grey: '#f7f7f7',
  textGrey: '#95989A',
  blueGrey: '#a4b0bb',
  cancelButton: '#c0c0c0',
	purple: "#7826ec",
	pink: "#ff3a7f",
	darkGrey: "#2d2e2e",
	powderBlue: "#b9dcff",
	lightGreen: "#EBF7D7",
	lightRed: "#f7d7db",
	textGrey: "#4a4a4a",
	red: "#e3828e",
	teal: "#25ffd8",
  black: "#181919",
  white: '#ffffff'
}

let icons = 'images/icons/';

const commafy = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const decommafy = (num) => {
  if (typeof(num) == 'string') return num.replace(new RegExp(',', 'g'), '');
  return num;
};
const numify = (str) => Number(str.toString().replace(/[^-.0-9]/g, ''));

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

function validateDate(testdate) { // year can be 2 or 4 digits
  var date_regex = /^\d{1,2}\/\d{1,2}\/\d{2}(?:\d{2})?$/; // year 4-only digits: /^\d{1,2}\/\d{1,2}\/\d{4}$/
  return date_regex.test(testdate);
}

const validateDateYYYY = (testdate) => /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(testdate);

const coerceYYtoYYYY = (date) => {
  let index = date.lastIndexOf('/')+1, yr = date.substring(index);
  return validateDateYYYY(date) ? date : date.substring(0, index) + (Number(yr) >= 80 ? '19' + yr : '20' + yr);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const deleteLeadingZeroes = (date) => {
  let arr = date.split('/');
  arr.forEach((ele, i) => arr[i] = ele[0] == '0' ? ele.slice(1) : ele);
  return arr.join('/')
}
const deleteTrailingZeroes = (usd) => usd.split('.')[1] == '00' ? usd.split('.')[0] : usd;

const indexLoansByLetter = (loans) => {
  let count = {}, seenNames = {}, caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  loans.forEach(loan => {
    !count[loan] ? count[loan] = 1 : count[loan]++;
    seenNames[loan] = 0;
  });
  for (var i = 0; i < loans.length; i++) if (count[loans[i]] != 1) {
    seenNames[loans[i]]++;
    loans[i] = loans[i] + ' ' + caps[seenNames[loans[i]]-1];
  }
  return loans;
}

const whatLoanTypes = (loans) => {
  let loanTypes = {};
  loans.forEach(loan => loanTypes[loan.loanType] = true);
  return loanTypes.Federal && loanTypes.Private ? 'Both' : loanTypes.Federal ? 'Federal' : loanTypes.Private ? 'Private' : undefined;
}

module.exports = {
  serialize,
	slugify,
  titleAppend,
  removeHash,
  isMobile,
  isIos,
  appName,
  appUrl,
  androidUrl,
  iosUrl,
  colorCodes,
	icons,
  commafy,
  decommafy,
  numify,
  camelize,
  validateDate,
  validateDateYYYY,
  coerceYYtoYYYY,
  validateEmail,
  deleteLeadingZeroes,
  deleteTrailingZeroes,
  indexLoansByLetter,
  whatLoanTypes
}
