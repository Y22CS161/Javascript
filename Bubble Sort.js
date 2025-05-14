<!DOCTYPE html>
<html>
<head>
    <title>Bubble Sort</title>
    <script>
        function bubbleSort() {
            var array = [5, 3, 8, 4, 2];
   
            var len = array.length;
            var i, j, stop;

            for (i = 0; i < len; i++) {
                for (j = 0, stop = len - i; j < stop; j++) {
                    if (array[j] > array[j + 1]) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }

            document.getElementById("sortedArray").innerHTML = "Sorted Array: " + array;
        }
    </script>
</head>
<body>
    <h1>Bubble Sort</h1>
    <button onclick="bubbleSort()">Sort Array</button>
    <div id="sortedArray"></div>
</body>
</html>

