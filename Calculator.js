    function appendToInput(value) {
        document.getElementById('input').value += value;
    }

    function clearInput() {
        document.getElementById('input').value = '';
        document.getElementById('output').value = '';
    }

    function calculate() {
        let expression = document.getElementById('input').value;
        let result;
        try {
            result = evalExpression(expression);
            document.getElementById('output').value = result;
        } catch (error) {
            document.getElementById('output').value = 'Error';
        }
    }

    function evalExpression(expression) {
        let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
        return Function(`return ${sanitizedExpression}`)();
    }
    const box = document.querySelector('.box');
    const circle = document.querySelector('.circle');

    setInterval(() => {
      box.style.backgroundColor = getRandomColor();
      circle.style.backgroundColor = getRandomColor();
    }, 20000); // 20 seconds

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }