document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');

    document.querySelector('.keys').addEventListener('click', function (event) {
       const target = event.target.closest('.key');
       if (!target) return;

       const keyType = target.dataset.key;
       const keyText = target.innerText;

       if (keyType === 'clear') {
          inputElement.innerText = '';
          outputElement.innerText = '';
       } else if (keyType === '=') {
          try {
             const result = eval(inputElement.innerText);
             outputElement.innerText = result;
          } catch (error) {
             outputElement.innerText = 'Error';
          }
       } else {
          // Handle multiplication separately
          if (keyType === '*') {
             inputElement.innerText += '*';
          } else {
             inputElement.innerText += keyText;
          }
       }
    });
 });