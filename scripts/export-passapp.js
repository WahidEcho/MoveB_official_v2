/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import { fromPath } from "pdf2pic";

const pdfPath = path.resolve("./docs/Passaire (Move Beyond).pdf");
const outDir = path.resolve("./public/passapp");

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  if (!fs.existsSync(pdfPath)) {
    console.log("PDF not found:", pdfPath, "- skipping export.");
    return;
  }

  const options = {
    density: 150,
    savePath: outDir,
    format: "jpg",
    width: 1600,
    height: 0,
  };

  const convert = fromPath(pdfPath, options);
  for (let i = 1; i <= 9; i += 1) {
    const filename = String(i).padStart(2, "0");
    const outFile = path.join(outDir, `${filename}.jpg`);
    if (fs.existsSync(outFile)) {
      console.log("Exists, skipping:", outFile);
      // eslint-disable-next-line no-continue
      continue;
    }
    try {
      const res = await convert(i, { saveFilename: filename });
      console.log("Saved:", res.path);
    } catch (e) {
      console.error("Failed page", i, e);
    }
  }
}

main();






