'use strict';
window.onload = function () {

  var listingElements = ['banan', 'apple', 'orange'];
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
  var deleteButton = document.querySelector('#delete-button');

  function deleteElements(element) {
    if (listingElements.indexOf(element) !== -1) {
      var numElement = listingElements.indexOf(element);
      listingElements.splice(numElement, 1);
    }
    if (storeElements.indexOf(element) !== -1) {
      var numElement = storeElements.indexOf(element);
      storeElements.splice(numElement, 1);
    }
  }
  deleteButton.onclick = function () {
    var selectedOption = document.querySelector('.app-select option:checked');
    deleteElements(selectedOption.innerText);
    updateUI();
  }

  function deleteAllElements() {
    listingElements.splice(0, listingElements.length);
    storeElements.splice(0, storeElements.length);
  }

  var deleteAllButton = document.querySelector('#delete-all-button');
  deleteAllButton.onclick = function () {
    deleteAllElements();
    updateUI();
  }

  var addListingButton = document.querySelector('#add-listing-button');

  addListingButton.onclick = function () {
    var element = prompt('Введите название элемента');
    listingElements.push(element);
    updateUI();
  }
  var SortListButton = document.querySelector('#sort-button');
  SortListButton.onclick = function () {
    listingElements.sort();
    storeElements.sort();
    updateUI();
  }
  updateUI();
};