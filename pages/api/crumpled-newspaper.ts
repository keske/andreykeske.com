import chromium from "chrome-aws-lambda";
import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("Start", new Date());

  console.log("Init chronium path", new Date());
  const executablePath = await chromium.executablePath;

  const randomId = Math.random().toString(36).substring(2, 15);

  const imagePath = `/tmp/screenshot-${randomId}.jpg`;

  const getScreenshot = async () => {
    console.log("Get screenshot", new Date());
    const browser = await chromium.puppeteer.launch({
      args: [
        ...chromium.args,
        "--autoplay-policy=user-gesture-required",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-breakpad",
        "--disable-client-side-phishing-detection",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-dev-shm-usage",
        "--disable-domain-reliability",
        "--disable-extensions",
        "--disable-features=AudioServiceOutOfProcess",
        "--disable-hang-monitor",
        "--disable-ipc-flooding-protection",
        "--disable-notifications",
        "--disable-offer-store-unmasked-wallet-cards",
        "--disable-popup-blocking",
        "--disable-print-preview",
        "--disable-prompt-on-repost",
        "--disable-renderer-backgrounding",
        "--disable-setuid-sandbox",
        "--disable-speech-api",
        "--disable-sync",
        "--hide-scrollbars",
        "--ignore-gpu-blacklist",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-default-browser-check",
        "--no-first-run",
        "--no-pings",
        "--no-sandbox",
        "--no-zygote",
        "--password-store=basic",
        "--use-gl=swiftshader",
        "--use-mock-keychain",
      ],
      executablePath,
      headless: true,
    });

    console.log("Before new page", new Date());
    const page = await browser.newPage();

    console.log("Before page.goto", new Date());
    try {
      await page.goto(req.body.url, { waitUntil: "networkidle2" });
    } catch (error) {
      console.log("Error", error);
    }

    console.log("Before setviewpost", new Date());
    await page.setViewport({ height: 10, width: 10 });

    console.log("Before screenshot", new Date());
    await page.screenshot({
      path: imagePath,
    });

    console.log("Before close", new Date());
    await browser.close();
  };

  await getScreenshot();

  console.log("Before read file sync", new Date());
  const img = fs.readFileSync(imagePath);

  console.log("Before path.join", new Date());
  // const filePath = path.join(process.cwd(), imagePath);

  // console.log("Before unlink", new Date());
  // fs.unlink(filePath, (err) => {
  //   if (err) {
  //     throw err;
  //   }

  //   console.log("File deleted successfully.");
  // });

  console.log("Before write head", new Date());

  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(img, "binary");
}
