import { client } from "./client.mjs";

export const init = async () => {
  await client.query(createTables);
};

export const createTables = `
    CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100),
        content TEXT,
        imageUrl VARCHAR(255),
        imageName VARCHAR(100),
        userId INTEGER
    );
`;
