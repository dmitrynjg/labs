function replace() {
  let searchText = document.querySelector('input#search').value;
  let replaceText = document.querySelector('input#replace').value;
  let textContent = document.querySelector('div.text').innerHTML;
  function replaceString(text, searchStr, newStr) {
    if (text.indexOf(searchStr) !== -1) {
      text = text.replace(RegExp(searchStr, 'g'), newStr);
      document.querySelector('div.text').innerHTML = text;
    }
    else {
      alert('В тексте ничего не найдено');
    }
  }
  replaceString(textContent, searchText, replaceText);
}


