require('dotenv').config();

function url() {
  return process.env.IPv4_PORT;
}

async function action(page) {
  await page.click('button');
}

async function back(page) {
  await page.click('button');
}

module.exports = { action, back, url };
