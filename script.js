  let dictionary = [];
  function addWord() {
   let word = document.getElementById("words").value;
   dictionary.push(word);
   let list = document.getElementById("list");
   list.innerHTML += `<li class="list-group-item">${word}</li>`;
  }

  function checkWord() {
    let checkWord = document.getElementById("check_word").value;
    if (dictionary.includes(checkWord)) {
      alert("This word is already in the dictionary!");
    } else {
      alert("This word is missing!");
    }
  }
