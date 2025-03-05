function search() {
    const query = document.getElementById("searchQuery").value;
    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    fetch(`https://your-backend-service.com/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Clear previous results
            
            if (!data.results || data.results.length === 0) {
                resultsDiv.innerHTML = "<p>No results found.</p>";
                return;
            }

            data.results.forEach(result => {
                const link = document.createElement("a");
                link.href = `https://your-ultraviolet-proxy.com/?url=${encodeURIComponent(result.link)}`;
                link.target = "_blank";
                link.innerText = result.title;

                const para = document.createElement("p");
                para.appendChild(link);
                resultsDiv.appendChild(para);
            });
        })
        .catch(error => {
            console.error("Search error:", error);
            alert("Failed to fetch search results.");
        });
}
