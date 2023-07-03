import chromium from "chrome-aws-lambda";
import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

const LOCAL_CHROME_EXECUTABLE =
  "/Applications/Chromium.app/Contents/MacOS/Chromium";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const executablePath =
    LOCAL_CHROME_EXECUTABLE || (await chromium.executablePath);

  const randomId = Math.random().toString(36).substring(2, 15);

  const imagePath = `/tmp/screenshot-${randomId}.jpg`;

  const getScreenshot = async () => {
    const browser = await chromium.puppeteer.launch({
      args: [
        ...chromium.args,
        // "--autoplay-policy=user-gesture-required",
        // "--disable-background-networking",
        // "--disable-background-timer-throttling",
        // "--disable-backgrounding-occluded-windows",
        // "--disable-breakpad",
        // "--disable-client-side-phishing-detection",
        // "--disable-component-update",
        // "--disable-default-apps",
        // "--disable-dev-shm-usage",
        // "--disable-domain-reliability",
        // "--disable-extensions",
        // "--disable-features=AudioServiceOutOfProcess",
        // "--disable-hang-monitor",
        // "--disable-ipc-flooding-protection",
        // "--disable-notifications",
        // "--disable-offer-store-unmasked-wallet-cards",
        // "--disable-popup-blocking",
        // "--disable-print-preview",
        // "--disable-prompt-on-repost",
        // "--disable-renderer-backgrounding",
        // "--disable-setuid-sandbox",
        // "--disable-speech-api",
        // "--disable-sync",
        // "--hide-scrollbars",
        // "--ignore-gpu-blacklist",
        // "--metrics-recording-only",
        // "--mute-audio",
        // "--no-default-browser-check",
        // "--no-first-run",
        // "--no-pings",
        // "--no-sandbox",
        // "--no-zygote",
        // "--password-store=basic",
        // "--use-gl=swiftshader",
        // "--use-mock-keychain",
      ],
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();

    try {
      await page.goto(req.body.url, { waitUntil: "networkidle2" });
    } catch (error) {
      console.log("Error", error);
    }

    await page.setViewport({ height: 1024, width: 1024 });

    await page.screenshot({
      path: imagePath,
    });

    await browser.close();
  };

  await getScreenshot();

  const img = fs.readFileSync(imagePath);

  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(img, "binary");
}
