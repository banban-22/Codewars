/////////////////////////////////
// Extract the domain name from a URL
/////////////////////////////////
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"

function domainName(url) {
  let string = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split(/[/?#]/)[0];
  let domain = string.split('.')[0];
  return domain;
}

console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));
