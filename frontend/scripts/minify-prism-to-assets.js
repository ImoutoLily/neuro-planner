import { dirname } from 'path';
import { join, resolve } from "path";
import { ensureDir } from "fs-extra"
import { glob } from "glob";
import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";
import { fileURLToPath } from 'url';
import * as terser from "terser";

async function copyAndMinify() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourceDir = resolve(__dirname, "../node_modules/prismjs/components");
  const destDir = resolve(__dirname, "../src/assets/prismjs");

  const files = glob.sync("prism-*.js", { cwd: sourceDir });

  await ensureDir(destDir);

  for (const file of files) {
    const srcPath = join(sourceDir, file);
    const destPath = join(destDir, file.replace(/\.js$/, ".min.js"));

    const code = await readFile(srcPath, "utf8");
    const minified = await terser.minify(code);

    if (minified.code) {
      await writeFile(destPath, minified.code, "utf8");
      console.log(`✔ Minified ${file}`);
    } else {
      console.warn(`⚠ Skipped ${file}, minification failed.`);
    }
  }

  console.log("✅ Prism components copied & minified.");
}

copyAndMinify().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
