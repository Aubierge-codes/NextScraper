const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const countries = {
    Rwanda: "https://en.wikipedia.org/wiki/List_of_universities_in_Rwanda",
    Kenya: "https://en.wikipedia.org/wiki/List_of_universities_in_Kenya",
    Canada: "https://en.wikipedia.org/wiki/List_of_universities_in_Canada"
};

async function scrapeUniversities() {
    let result = {};

    for (let country in countries) {
        try {
            console.log(`Scraping ${country}...`);

            const { data } = await axios.get(countries[country], {
                headers: {
                    "User-Agent": "Mozilla/5.0"
                }
            });
            const $ = cheerio.load(data);

            let universities = [];

            // --- TABLE SCRAPING ---
            const tableRows = $("table.wikitable tbody tr");

            if (tableRows.length > 0) {
                tableRows.each((i, row) => {
                    if (universities.length >= 30) return false;

                    const columns = $(row).find("td");
                    if (columns.length > 0) {
                        // Remove footnotes like [1], [2]
                        const name = $(columns[0]).text().trim().replace(/\[\d+\]/g, "");
                        const location = columns.length > 1 ? $(columns[1]).text().trim() : "N/A";

                        if (name) {
                            universities.push({ name, location });
                        }
                    }
                });
            } 
            // --- LIST SCRAPING (for Rwanda or other non-table pages) ---
            else {
                const content = $("#mw-content-text");

                content.find("ul li").each((i, el) => {
                    if (universities.length >= 30) return false;

                    // Remove footnotes
                    const nameRaw = $(el).text().trim().replace(/\[\d+\]/g, "");
                    
                    // Split multi-line entries (like multiple colleges in one li)
                    const items = nameRaw.split("\n");

                    items.forEach(item => {
                        const uniName = item.trim();
                        if (
                            uniName.length > 5 && // ignore tiny text
                            !uniName.toLowerCase().includes("references") &&
                            !uniName.toLowerCase().includes("external links") &&
                            !uniName.toLowerCase().includes("see also") &&
                            !uniName.toLowerCase().includes("navigation") &&
                            universities.length < 30
                        ) {
                            universities.push({
                                name: uniName,
                                location: country
                            });
                        }
                    });
                });
            }

            result[country] = universities;

        } catch (error) {
            console.log(`Error scraping ${country}:`, error.message);
        }
    }

    fs.writeFileSync("universities.json", JSON.stringify(result, null, 2));
    console.log("Scraping completed! Data saved to universities.json");
}

scrapeUniversities();