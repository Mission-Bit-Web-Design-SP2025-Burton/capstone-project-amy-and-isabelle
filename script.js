const puppeteer = require("puppeteer");

async function getTheracterAIResponse(userInput) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://character.ai");

  await page.type("#user-input-field", userInput);
  await page.click("#submit-button");

  const response = await page.$eval("#response", (el) => el.innerText);

  await browser.close();
  return response;
}

// this is what we have for the chatbot rn we need a page for it
