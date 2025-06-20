async function fetchCommits() {
    let para = document.querySelector('p');

    let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

    if (response.ok) {
        // You can only use one body-parsing method per response object
        // Uncomment one of the following lines as needed

        let text = await response.text();
        console.log("Text:", text);

        let json = await response.json();
        console.log("JSON:", json);

        let formData = await response.formData();
        console.log("FormData:", formData);

        let blob = await response.blob();
        console.log("Blob:", blob);

        let arrayBuffer = await response.arrayBuffer();
        console.log("ArrayBuffer:", arrayBuffer);

        para.innerHTML = "Check the console for output.";
    } else {
        alert("HTTPS-Error: " + response.status);
    }
}

fetchCommits();
