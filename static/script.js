//document.getElementById("shorten-form").addEventListener("submit", async function(event) {
//    event.preventDefault();
//    const urlInput = document.getElementById("url-input").value;
//
//    const response = await fetch("/url", {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json",
//        },
//        body: JSON.stringify({ target_url: urlInput }),
//    });
//
//    if (response.ok) {
//        const result = await response.json();
//        document.getElementById("shortened-url").href = result.url;
//        document.getElementById("shortened-url").textContent = result.url;
//        document.getElementById("result").style.display = "block";
//    } else {
//        alert("Failed to shorten the URL.");
//    }
//});
