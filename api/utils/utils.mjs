export const fileToBase64 = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const base64Data = data.toString("base64");
        resolve(base64Data);
      }
    });
  });
};

export const convertBase64ToFile = (base64String, filePath) => {
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(filePath, buffer);

  return filePath;
};

