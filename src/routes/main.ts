import { Router } from 'express';
import { createUser, createUsers, getAllUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
  const user = await createUser({
    name: 'testado 2',
    email: 'teste2@email.com',
    Posts: {
      create: {
        title: "Titulo de teste",
        body: "Corpo do post",
      }
    }
  });
  if(user) {
    return res.status(201).json({ user });
  } else {
    res.status(500).json({ error: "E-mail já cadastrado" });
  }
});

mainRouter.post('/users', async (req, res) => {
  const result = await createUsers([
    { name: "Alice", email: "alice@email.com" },
    { name: "Bob", email: "bob@email.com"},
    { name: "Bob 2", email: "bob@email.com"},
    { name: "Charlie", email: "charlie@email.com"}
  ]);
  res.json({ result })
});

mainRouter.get('/users', async (req, res) => {
  const result = await getAllUsers();
  res.json({ result });
});