import userController from "<prefix>/database/controllers/UserController"

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Método não permitido' });
    return;
  }

  try {
    const newUser = await userController.saveUser(req.body);
    res.status(201).json({ id: newUser.id, message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }

}
