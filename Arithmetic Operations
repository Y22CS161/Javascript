<!DOCTYPE html>
<html>
<head>
    <title>Arithmetic Operations</title>
    <script>
        function performArithmeticOperation() {
            var operation = document.getElementById("operation").value;
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result;

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Cannot divide by zero";
                    }
                    break;
                default:
                    result = "Invalid operation";
                    break;
            }

            document.getElementById("result").innerHTML = "Result: " + result;
        }
    </script>
</head>
<body>
    <h1>Arithmetic Operations</h1>
    <label for="operation">Choose an operation:</label>
    <select id="operation">
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
    </select>
    <br>
    <label for="num1">Enter the first number:</label>
    <input type="number" id="num1">
    <br>
    <label for="num2">Enter the second number:</label>
    <input type="number" id="num2">
    <br>
    <button onclick="performArithmeticOperation()">Calculate</button>
    <div id="result"></div>
</body>
</html>

