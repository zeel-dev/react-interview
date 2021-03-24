const fastify = require('fastify');
const faker = require('faker');
const cors = require('fastify-cors')

const PORT = 8099;
const server = fastify({ logger: true });

server.register(cors, { origin: true });

const users = createUsers(150);

function createUser() {
  return {
    id: faker.random.uuid(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
    email: faker.internet.email(),
    country: faker.address.country(),
    role: Math.random() < 0.5 ? 'admin' : 'user',
    dateCreated: faker.date.past(),
  }
}

function createUsers(limit) {
  const users = [];

  for (let i = 0; i < limit; i++) {
    users.push(createUser());
  }

  return users;
}

server.get('/users', async () => {
  return { data: users };
});

async function start() {
  try {
    await server.listen(PORT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
