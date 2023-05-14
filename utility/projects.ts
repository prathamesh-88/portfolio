import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "projects");

function parseJSONFile(filePath: string): object | null {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const object = JSON.parse(fileData);
    return object;
  } catch (error) {
    console.error(`Error parsing JSON file: ${filePath}`);
    console.error(error);
    return null;
  }
}

function parseAllFilesInDirectory(directoryPath: string): object[] {
  try {
    const fileNames = fs.readdirSync(directoryPath);
    const objectsList: object[] = [];

    fileNames.forEach((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const id = fileName.replace(/\.json$/, "");
      let object: object | null = parseJSONFile(filePath);
      if (object) {
        object = {
          id,
          ...object,
        };
        objectsList.push(object);
      }
    });

    return objectsList;
  } catch (error) {
    console.error(`Error reading directory: ${directoryPath}`);
    console.error(error);
    return [];
  }
}

export function getProjects() {
  const projects = parseAllFilesInDirectory(projectsDirectory);
  return projects;
}
