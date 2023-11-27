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
            } else if (keyType === 'brackets') {
                inputElement.innerText += '(';
                inputElement.focus(); // Set focus to the input element
            } else if (keyType === ')') {
                const inputText = inputElement.innerText;
                let openParenIndex = -1;

                // Find the last open parenthesis in the input text
                for (let i = inputText.length - 1; i >= 0; i--) {
                    if (inputText[i] === '(') {
                        openParenIndex = i;
                        break;
                    } else if (inputText[i] === ')') {
                        break; // Stop searching if a closing parenthesis is encountered
                    }
                }

                // Only add a closing parenthesis if there is no open parenthesis or if the last one is closed
                if (openParenIndex === -1 || (inputText.lastIndexOf(')') > openParenIndex)) {
                    inputElement.innerText += ')';
                    inputElement.focus(); // Set focus to the input element
                }
            } else {
                inputElement.innerText += keyText;
            }
        }
    });
});
