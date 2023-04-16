const Role = require("../models/role.model");
const User = require("../models/User");

const authService = require("../services/auth.service");
const bcryptService = require("../services/bcrypt.service");

const UserController = () => {
  const register = async (req, res) => {
    try {
      const { body } = req;
      const { password, email } = body;
      console.log("🚀 ~ register ~ body:", req);
      if (!email) {
        return res.status(400).json({ msg: "Datos requeridos faltantes" });
      }
      // if (password === password2) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        return res.status(400).json({ msg: "Correo ya esta en uso!" });
      }
      const userdb = await User.create({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        gender: body.gender,
        age: body.age,
        occupation: body.occupation,
        school: body.school,
        password: body.password,
      });
      const role = await Role.findOne({
        where: {
          name: "User",
        },
      });
      const roles = await userdb.addRole(role, {
        through: { selfGranted: false },
      });
      console.log("🚀 ~ register ~ roles:", roles);

      if (userdb) {
        return res.status(200).json({ msg: "Usuario guardado" });
      }
      return res.status(500).json({});
    } catch (err) {
      console.log("🚀 ~ register ~ err", err);
      return res
        .status(500)
        .json({ msg: "Error Interno del Servidor", error: err });
    }
    // }

    return res.status(400).json({ msg: "Bad Request: Passwords don't match" });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log("🚀 ~ login ~ req.body:", req.headers);
    if (email && password) {
      try {
        const userDb = await User.findOne({
          where: {
            email,
          },
          include: Role,
        });
        // const roles = await userDb.getRoles();
        if (!userDb) {
          return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        if (bcryptService().comparePassword(password, userDb.password)) {
          const token = authService().issue({ id: userDb.id });

          return res.status(200).json({ token, user: userDb });
        } else {
          return res.status(200).json({ msg: "Invalido" });
        }
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ msg: "Error Interno del Servidor", error: err });
      }
    }

    return res.status(400).json({ msg: "Email o contraseña invalidos" });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: "Invalid Token!" });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll({ include: Role });
      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const update = async (req, res) => {
    const { password } = req.body;
    let { uuid } = req.params;
    const user = req.body;
    try {
      const userdb = await User.findByPk(uuid);

      if (!userdb) {
        return res.status(400).json({ msg: "Usuario no encontrado" });
      }
      console.log("🚀 ~ update ~ userdb", userdb);
      console.log("🚀 ~ update ~ user", user);
      console.log("🚀 ~ update ~ uuid", uuid);

      const updateuserdb = await User.update(
        {
          name: user.name,
        },
        {
          where: {
            uuid,
          },
          returning: true,
        }
      );
      console.log("🚀 ~ update ~ updateuserdb", updateuserdb);
      if (updateuserdb) {
        return res.status(200).json({ msg: "Usuario actualizado" });
      }
      return res.status(401).json({ msg: "No autorizado" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Error Interno del Servidor", err });
    }

    return res.status(400).json({ msg: "Email o contraseña invalidos" });
  };

  const useracces = async (req, res) => {
    const { password } = req.body;
    console.log("🚀 ~ useracces ~ req.body:", req.body);
    let { uuid } = req.params;
    console.log("🚀 ~ useracces ~ uuid:", uuid);
    if (!password || !uuid) {
      return res.status(400).json({ msg: "Datos requeridos faltantes" });
    }
    // if (password === password2) {
    try {
      const userdb = await User.findOne({
        where: {
          uuid,
        },
      });
      if (!userdb) {
        return res.status(400).json({ msg: "Usuario existente" });
      }
      const updateuserdb = await User.update(
        {
          password: password,
        },
        {
          where: {
            uuid,
          },
          individualHooks: true,
          returning: true,
        }
      );
      // console.log("🚀 ~ useracces ~ updateuserdb:", updateuserdb);
      // // // const token = authService().issue({ id: user.id });
      // if (updateuserdb) {
      //   return res.status(200).json({ msg: "Acceso actualizado" });
      // }
      return res.status(500).json({ userdb });
    } catch (err) {
      console.log("🚀 ~ register ~ err", err);
      return res
        .status(500)
        .json({ msg: "Error Interno del Servidor", error: err });
    }
    // }

    return res.status(400).json({ msg: "Bad Request: Passwords don't match" });
  };

  const remove = async (req, res) => {
    let { uuid } = req.params;
    try {
      const userdb = await User.destroy({ where: { uuid: uuid } });

      if (!userdb) {
        return res.status(400).json({ msg: "Usuario no encontrado" });
      }
      return res.status(200).json({ msg: "Usuario eliminado" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Error Interno del Servidor", err });
    }
  };

  const userpic = (req, res) => {
    const path = require("path");
    const formidable = require("formidable");
    let { uuid } = req.params;
    let { body } = req;

    folder = path.join(__dirname, "../../pics");

    // if (!fs.existsSync(folder)) {
    //   fs.mkdirSync(folder);
    // }
    try {
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: folder,
        allowEmptyFiles: false,
        maxFileSize: 50 * 1024 * 1024,
      });
      form.once("error", (error) => {
        console.log("🚀 ~ promise ~ error:", error.httpCode);
        return res
          .status(error.httpCode)
          .json({ msg: "Contenido demasiado grande", error: err });
      });

      // form.on("fileBegin", (formname, file) => {
      //   console.log("🚀 ~ form.on ~ formname:", formname);
      // });

      form.on("file", async (formname, file) => {
        // console.log("🚀 ~ form.on ~ file:", file);
        // console.log("🚀 ~ form.on ~ file:", file.newFilename);
        // console.log("🚀 ~ form.on ~ file:", file.size);
        // console.log("🚀 ~ form.on ~ file:", file.originalFilename);
        // console.log("🚀 ~ form.on ~ type:", file.mimetype);
        // console.log("🚀 ~ form.on ~ type:", file.filepath);
        const updateuserdb = await User.update(
          {
            photo: file.newFilename,
          },
          {
            where: {
              uuid,
            },
            returning: true,
          }
        );
        console.log("🚀 ~ form.on ~ updateuserdb:", updateuserdb);
      });

      form.once("end", () => {
        console.log("Done!");
      });
      form.parse(req);
      return res.status(200).json({ msg: "Archivo guardado!" });
      // form.parse(req).on("file", (name, file) => {
      //   // console.log("Uploaded file", name, file);

      //   return res.status(200).json({ msg: "Archivo guardado!" });
      // });
      // form.parse(req, (err, fields, files) => {
      //   console.log("🚀 ~ form.parse ~ files:", files[0]);
      //   if (err) throw err;

      //   console.log("Received:", Object.keys(files));
      //   const file = files.PersistentFile;
      //   console.log("🚀 ~ form.parse ~ file:", file);
      //   for (const file of Object.entries(files)) {
      //     console.log(file.name);
      //   }
      //   //   // const fileName = files.newFilename;
      //   // console.log("🚀 ~ form.parse ~ fileName:", fileName);
      //   //   // const filePath = file.filepath;
      //   //   // console.log("🚀 ~ form.parse ~ filePath:", filePath);
      //   //   // const fileSize = file.size;
      //   //   // console.log("🚀 ~ form.parse ~ fileSize:", fileSize);
      //   //   resolve({ fields, files });
      // });
    } catch (error) {
      console.log("🚀 ~ userpic ~ error:", error);
    }

    return res.status(200).json({ msg: "Usuario eliminado" });
  };

  const thisworks = async (req, res) => {
    try {
      return res.status(200).json({ msg: "Funciona" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    login,
    validate,
    getAll,
    thisworks,
    update,
    remove,
    useracces,
    userpic,
  };
};

module.exports = UserController;
