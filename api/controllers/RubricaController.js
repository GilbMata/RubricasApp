// const Rubrica = require("../models/asociation.model");
const Rubrica = require("../models/rubricas.model");
const authService = require("../services/auth.service");

const RubricaController = () => {
  const register = async (req, res) => {
    const { name } = req.body;
    try {
      const rubrica = await Rubrica.create({
        name,
      });
      // const token = authService().issue({ id: user.id });

      return res.status(200).json({ msg: "Rubrica guardada." });
    } catch (error) {
      console.log("🚀 ~ register ~ error", error);
      return res
        .status(500)
        .json({ msg: "Error Interno del Servidor", error: error });
    }
  };

  const getAll = async (req, res) => {
    try {
      const { type } = req.params;
      const rubricas = await Rubrica.findAll({
        where: {
          type,
        },
        attributes: ["uuid", "name"],
      });
      return res.status(200).json({ rubricas });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const update = async (req, res) => {
    let { uuid } = req.params;
    const { name } = req.body;
    try {
      const userdb = await Rubrica.findByPk(uuid);
      if (!userdb) {
        return res.status(400).json({ msg: "Usuario no encontrado" });
      }
      const updatedb = await Rubrica.update(
        {
          name,
        },
        {
          where: {
            uuid,
          },
          returning: true,
        }
      );
      console.log("🚀 ~ update ~ updateuserdb", updatedb);
      if (updatedb) {
        return res.status(200).json({ msg: "Rubrica actualizado" });
      }
      return res.status(401).json({ msg: "No autorizado" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Error Interno del Servidor", err });
    }
  };

  const destroy = async (req, res) => {
    try {
      let { uuid } = req.params;
      const rubrica = await Rubrica.destroy({ where: { uuid } });
      console.log("🚀 ~ destroy ~ rubrica", rubrica);
      if (rubrica) {
        return res.status(200).json({ msg: "Rubrica eliminada." });
      }

      return res.status(400).json({ msg: "No se pude eliminar" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    destroy,
    getAll,
    update,
  };
};

module.exports = RubricaController;
