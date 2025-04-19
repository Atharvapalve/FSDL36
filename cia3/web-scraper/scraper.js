// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://news.ycombinator.com/';

async function scrapeData() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results = [];

    $('.athing').each((i, element) => {
      const title = $(element).find('.titleline > a').text();
      const link = $(element).find('.titleline > a').attr('href');
      results.push({ title, link });
    });

    console.log(results);
  } catch (error) {
    console.error('Error scraping data:', error);
  }
}

scrapeData();
