import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const randomId = Math.random().toString(36).substring(2, 15);

  const imagePath = `public/images/sites/screenshot-${randomId}.jpg`;

  const getScreenshot = async () => {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.goto(req.body.url);

    await page.setViewport({ height: 1024, width: 1080 });

    await page.screenshot({
      path: imagePath,
    });

    await browser.close();
  };

  await getScreenshot();

  const img = fs.readFileSync(imagePath);

  const filePath = path.join(process.cwd(), imagePath);

  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }

    console.log("File deleted successfully.");
  });

  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(img, "binary");
}
