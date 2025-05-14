<!DOCTYPE html>
<html>
<head>
    <title>Image Generator</title>
    <script>
        function generateRandomImage() {
            var images = [
                "C:/Users/USER/Desktop/oggy.jpeg",
                "C:/Users/USER/Desktop/bob.jpeg",
                "C:/Users/USER/Desktop/cockroches.jpeg",
                "C:/Users/USER/Desktop/olly.jpeg",
                "C:/Users/USER/Desktop/jack.jpeg"
            ];
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
            var imgElement = document.createElement("img");
            imgElement.src = randomImage;
            imgElement.alt = "Random Image";
            document.getElementById("imageContainer").appendChild(imgElement);
        }
    </script>
</head>
<body>
    <h1>Random Image Generator</h1>
    <button onclick="generateRandomImage()">Generate Random Image</button>
    <div id="imageContainer"></div>
</body>
</html>

