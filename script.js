document.addEventListener('DOMContentLoaded', function () {
   const inputElement = document.querySelector('.input');
   const outputElement = document.querySelector('.output');
   let firstNumber = '';
   let currentOperator = '';

   document.querySelector('.keys').addEventListener('click', function (event) {
       const target = event.target.closest('.key');
       if (!target) return;

       const keyType = target.dataset.key;
       const keyText = target.innerText;

       if (keyType === 'clear') {
           inputElement.innerText = '';
           outputElement.innerText = '';
           firstNumber = '';
           currentOperator = '';
       } else if (keyType === '=') {
           try {
               const secondNumber = parseFloat(inputElement.innerText);
               let result;

               if (currentOperator === '+') {
                   result = parseFloat(firstNumber) + secondNumber;
               } else if (currentOperator === '-') {
                   result = parseFloat(firstNumber) - secondNumber;
               } else if (currentOperator === '*') {
                   result = parseFloat(firstNumber) * secondNumber;
               } else if (currentOperator === '/') {
                   result = parseFloat(firstNumber) / secondNumber;
               } else if (currentOperator === '%') {
                   result = (parseFloat(firstNumber) * secondNumber) / 100;
               } else {
                   outputElement.innerText = 'Error';
                   return;
               }

               outputElement.innerText = result;
               firstNumber = '';
               currentOperator = '';
           } catch (error) {
               outputElement.innerText = 'Error';
           }
       } else if (keyType === 'percentage') {
           // Save the first number for percentage calculation
           firstNumber = inputElement.innerText;
           currentOperator = '%';
           inputElement.innerText = '';
       } else if (keyType === '*' || keyType === '/' || keyType === '+' || keyType === '-') {
           // Save the current operator
           currentOperator = keyType;
           firstNumber = inputElement.innerText;
           inputElement.innerText = '';
       } else {
           inputElement.innerText += keyText;
       }
   });
});
