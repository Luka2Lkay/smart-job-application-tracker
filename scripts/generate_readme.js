import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const packageJsonPath = path.join(ROOT_DIR, "package.json");
const readmeTemplatePath = path.join(ROOT_DIR, "README.template.md");
const readmePath = path.join(ROOT_DIR, "README.md");
const technologiesPath = path.join(
  ROOT_DIR,
  "scripts",
  "data",
  "technologies.json",
);

const readJson = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const getInstalledPackages = (packageJson) => {
  return new Set([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
  ]);
};

const packageJson = readJson(packageJsonPath);
const technologies = readJson(technologiesPath);

const installedPackages = getInstalledPackages(packageJson);

const generateTechnologyList = (installedPackages, technologyMap) => {
  return Object.entries(technologyMap)
    .filter(([packageName]) => installedPackages.has(packageName))
    .map(([, technologyName]) => `- ${technologyName}`)
    .join("\n");
};

const generateTree = (directory, prefix = "") => {
  const ignored = new Set([
    "node_modules",
    "dist",
    "build",
    ".git",
    ".github",
    ".next",
    ".gitignore",
    "AGENTS.md",
    "CLAUDE.md",
    "eslint.config.mjs",
    "next-env.d.ts",
    "next.config.ts",
    "package-lock.json",
    "package.json",
    "postcss.config.mjs",
    "README.md",
    "README.template.md",
    "tsconfig.json",
  ]);

  const entries = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !ignored.has(entry.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) {
        return -1;
      }

      if (a.isDirectory() && b.isDirectory()) {
        return 1;
      }

      return a.name.localeCompare(b.name);
    });

  return entries
    .map((entry, index) => {
      const isLast = index === entries.length - 1;
      const connector = isLast ? "└──" : "├──";
      const nextPrefix = prefix + (isLast ? "   " : "|   ");

      if (entry.isDirectory()) {
        return (
          `${prefix}${connector}${entry.name}/\n` +
          generateTree(path.join(directory, entry.name), nextPrefix)
        );
      }

      return `${prefix}${connector}${entry.name}\n`;
    })
    .join("");
};

const stack = generateTechnologyList(installedPackages, technologies);
const version = packageJson.version;

const tree = generateTree(ROOT_DIR);

let readme = fs.readFileSync(readmeTemplatePath, "utf-8");

readme = readme
  .replaceAll("{{VERSION}}", version)
  .replaceAll("{{STACK}}", stack)
  .replaceAll("{{TREE}}", tree);

fs.writeFileSync(readmePath, readme);

console.log("README.md generated successfully!");
