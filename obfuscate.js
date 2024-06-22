// obfuscate.js
const fs = require("fs");
const path = require("path");
const obfuscator = require("javascript-obfuscator");

const buildDir = path.join(__dirname, "dist");

function obfuscateFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const obfuscatedCode = obfuscator
    .obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArray: true,
      stringArrayEncoding: ["base64"],
      stringArrayThreshold: 1,
    })
    .getObfuscatedCode();
  fs.writeFileSync(filePath, obfuscatedCode, "utf8");
}

function obfuscateDirectory(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      obfuscateDirectory(filePath);
    } else if (path.extname(filePath) === ".js") {
      obfuscateFile(filePath);
    }
  });
}

obfuscateDirectory(buildDir);
