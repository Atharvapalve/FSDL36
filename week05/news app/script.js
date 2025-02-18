// Fetch news from News API and display them dynamically
const newsContainer = document.getElementById('news-container');

// Your News API key here (sign up at https://newsapi.org/ to get one)
const apiKey = '5b3feb27378b49a98f8f91c85300fc91';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      displayNews(data.articles);
    } else {
      newsContainer.innerHTML = '<p>Failed to fetch news. Try again later.</p>';
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    newsContainer.innerHTML = '<p>There was an error fetching the news.</p>';
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = '';
  articles.forEach((article) => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    const newsImage = article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}">` : '';
    const newsTitle = `<h2><a href="${article.url}" target="_blank">${article.title}</a></h2>`;
    const newsDescription = `<p>${article.description || 'No description available.'}</p>`;

    newsCard.innerHTML = newsImage + newsTitle + newsDescription;
    newsContainer.appendChild(newsCard);
  });
}

// Fetch the news when the page loads
fetchNews();
