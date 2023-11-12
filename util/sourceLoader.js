import fs from "fs";

const readdirPromise = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (error, files) => {
            if (error) {
                reject(error.message);
            }

            resolve(files);
        });
    });
};

export default async (dirPath) => {
    const fileArr = await readdirPromise(dirPath);
    const filteredArr = fileArr.filter(
        (filename) => !filename.includes("demo")
    );
    const idx = Math.floor(Math.random() * filteredArr.length);

    return `${dirPath}${filteredArr[idx]}`;
};
