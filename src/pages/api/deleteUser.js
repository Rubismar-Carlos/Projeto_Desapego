import userController from "<prefix>/database/controllers/UserController";

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        res.status(405).json({ message: 'Método não permitido' });
        return;
      }
    
      const { id } = req.query;
    
      try {
        const deletedUser = await userController.deleteUser(id);
        if (deletedUser) {
          res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } else {
          res.status(404).json({ message: 'Usuário não encontrado' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
      }
  }