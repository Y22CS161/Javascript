<!DOCTYPE html>
<html>
<head>
    <title>Binary Search</title>
    <script>
        function binarySearch() {
            var inputArray = document.getElementById("inputArray").value;
            var array = inputArray.split(",").map(Number);
            var target = parseInt(document.getElementById("targetElement").value);
            var left = 0;
            var right = array.length - 1;

            while (left <= right) {
                var mid = Math.floor((left + right) / 2);
                if (array[mid] === target) {
                    document.getElementById("searchResult").innerHTML = "Element found at index: " + mid;
                    return;
                } else if (array[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            document.getElementById("searchResult").innerHTML = "Element not found";
        }
    </script>
</head>
<body>
    <h1>Binary Search</h1>
    <form>
        <label for="inputArray">Enter Array (comma separated):</label>
        <input type="text" id="inputArray"><br><br>
        <label for="targetElement">Enter Target Element:</label>
        <input type="number" id="targetElement"><br><br>
        <button type="button" onclick="binarySearch()">Search Element</button>
    </form>
    <div id="searchResult"></div>
</body>
</html>

