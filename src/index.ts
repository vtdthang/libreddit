import { MikroORM } from '@mikro-orm/core';

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'libreddit',
        type: 'postgresql',
        user: 'postgres',
        password: 'postgres',
        debug: true
    });
};

main();