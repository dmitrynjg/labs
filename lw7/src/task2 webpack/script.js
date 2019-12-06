window.onload = function () {

    var listingElements = ['apple', 'orange'];
      var storeElements = [];
   
      function addToStoreElements(element) {
        var elementPosition = listingElements.indexOf(element);
        if (elementPosition > -1) {
          storeElements.push(element);
          listingElements.splice(elementPosition, 1);
        }
      }
   
      function updateUI() {
           var storeSelect = document.querySelector('.store-select');
      var listingSelect = document.querySelector('.listing-select');
          storeSelect.innerHTML = '';
          listingSelect.innerHTML = '';
      
      for (var i = 0; i < listingElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = listingElements[i];
        listingSelect.append(newOption);
      }
      
      for (var i = 0; i < storeElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = storeElements[i];
        storeSelect.append(newOption);
      }
      }
  
      var addButton = document.querySelector('#add-button');
    
    addButton.onclick = function () {
      var selectedOption = document.querySelector('.listing-select option:checked');
      addToStoreElements(selectedOption.innerText);
      updateUI();
      }
      function deleteElement(arg){
        if(listingElements.indexOf(arg) !== -1){
            var numElement = listingElements.indexOf(arg);
            listingElements.splice(numElement,1);
        }
      }
      var deleteButton = document.querySelector('#delete-button');
      deleteButton.onclick = function(){
      var selectedOption = document.querySelector('.app-select option:checked');
      deleteElement(selectedOption.innerText);
      updateUI();
      }

      var deleteAllButton = document.querySelector('#delete-all-button');

      deleteAllButton.onclick = function(){
          listingElements.splice(0,listingElements.length);
          storeElements.splice(0,storeElements.length);
          updateUI();
      }

      var addListingButton = document.querySelector('#add-listing-button');
       
      addListingButton.onclick = function(){
      var elementList = prompt('Введите название элемента списка');
      listingElements.push(elementList);
      updateUI(); 
      }

      var sortButton = document.querySelector('#sort-button');

      sortButton.onclick = function(){
        listingElements.sort();
        storeElements.sort();
        updateUI();
      }
      updateUI();
  };