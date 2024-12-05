// script.js
const mockData = [
  { title: "Understanding JavaScript", category: "latest" },
  { title: "10 Tips for Better CSS", category: "popular" },
  { title: "HTML Basics for Beginners", category: "latest" },
  { title: "Advanced React Techniques", category: "popular" },
  { title: "Building Mobile-Friendly Designs", category: "latest" },
];

function performSearch() {
  const query = document.getElementById("search-box").value.toLowerCase();
  const filter = document.getElementById("filter").value;
  const resultsContainer = document.getElementById("results-container");

  let filteredData = mockData.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  if (filter !== "all") {
    filteredData = filteredData.filter(item => item.category === filter);
  }

  renderResults(filteredData);
}

function renderResults(data) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = data.length
    ? data
        .map(
          item => `
          <div class="result-item">
            <span class="result-title">${item.title}</span>
            <span class="result-category">${item.category}</span>
          </div>
        `
        )
        .join("")
    : `<p class="no-results">No results found. Try a different query!</p>`;
}

// Initialize with default message
renderResults([]);
