import userController from "<prefix>/database/controllers/UserController";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Método não permitido' });
      return;
    }
  
    try {
      const users = await userController.getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  }