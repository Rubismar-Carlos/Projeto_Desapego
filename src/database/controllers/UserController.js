import User from "../schemas/UserSchema";

import database from "../database";

//creat
const saveUser = async(queryUser) => {

    if(!database.connect()) {
        return false
    }

    const newUser = new User(queryUser)
    return await newUser.save()

}

// buscando usuários
const getUsers = async () => {
    if (!database.connect()) {
      return [];
    }
  
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error(error);
      return [];
    } 
    
  };

  // deletar usuario
  const deleteUser = async (userId) => {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar usuário');
    }
  };

const userController = {
    
    saveUser,
    getUsers,
    deleteUser

}



export default userController;