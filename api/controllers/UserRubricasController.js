const UserRubricas = require("../models/asociation.model");
const Rubrica = require("../models/rubricas.model");
const User = require("../models/User");
const authService = require("../services/auth.service");
const sequelize = require("../../config/database");
const { QueryTypes } = require("sequelize");

const UserRubricasController = () => {
  const register = async (req, res) => {
    try {
      const { body } = req;
      console.log("🚀 ~ register ~ body:", body);
      // const { UserUuid, RubricaUuid, date, value } = req.body;
      await UserRubricas.bulkCreate(body);
      // await body.forEach(async (ele) => {
      //   const { UserUuid, RubricaUuid, date, value } = ele;
      //   const datadb = await UserRubricas.create({
      //     UserUuid,
      //     RubricaUuid,
      //     date,
      //     value,
      //   });
      //   if (!datadb) {
      //     return res.status(500).json({ msg: "Error Interno del Servidor" });
      //   }
      // });
      return res.status(200).json({ msg: "UserRubica guardada." });
    } catch (err) {
      console.log("🚀 ~ register ~ err", err);
      return res
        .status(500)
        .json({ msg: "Error Interno del Servidor", error: err });
    }
  };

  const getDates = async (req, res) => {
    try {
      let { uuid, startdate, enddate } = req.body;
      if (!uuid || !startdate || !enddate) {
        return res.status(300).json({ msg: "Parametros faltantes." });
      }
      let sqlstring =
        "SELECT date FROM UserRubricas where UserUuid  = $1 AND (DATE(date) BETWEEN STR_TO_DATE($2, '%d/%m/%Y') AND STR_TO_DATE($3, '%d/%m/%Y')) GROUP by `date`";
      const userubricas = await sequelize.query(sqlstring, {
        bind: [uuid, startdate, enddate],
        type: QueryTypes.SELECT,
      });
      // const userubricas = await User.findByPk(uuid, {
      //   include: [
      //     {
      //       model: Rubrica,
      //       attributes: ["name"],
      //       through: {
      //         attributes: ["value", "date"],
      //         order: [["date", "DESC"]],
      //         group: "date",
      //       },
      //     },
      //   ],
      // });
      return res.status(200).json({ userubricas });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error", error });
    }
  };

  const getData = async (req, res) => {
    let { uuid, date } = req.body;
    try {
      // const userubricas = await UserRubricas.findAll({
      //   where: {
      //     date,
      //   },
      //   include: [
      //     {
      //       model: Rubrica,
      //       attributes: ["name"],
      //     },
      //   ],
      // });
      let sqlstring =
        "SELECT r.name, ur.value  FROM UserRubricas ur JOIN Rubricas r on ur.RubricaUuid = r.uuid WHERE UserUuid = $1 and date = $2 ORDER BY r.`type`";
      const userubricas = await sequelize.query(sqlstring, {
        bind: [uuid, date],
        type: QueryTypes.SELECT,
      });
      return res.status(200).json({ userubricas });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error", error });
    }
  };

  const getAvg = async (req, res) => {
    let { uuid, startdate, enddate } = req.body;
    try {
      let sqlstring =
        "SELECT r.name as name, FORMAT(AVG(value),2) `promedio`  FROM UserRubricas ur JOIN Rubricas r on ur.RubricaUuid = r.uuid WHERE UserUuid = $1 AND (DATE(date) BETWEEN STR_TO_DATE($2, '%d/%m/%Y') AND STR_TO_DATE($3, '%d/%m/%Y')) GROUP by name ";
      const userubricas = await sequelize.query(sqlstring, {
        bind: [uuid, startdate, enddate],
        type: QueryTypes.SELECT,
      });
      return res.status(200).json({ userubricas });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error", error });
    }
  };
  const getAll = async (req, res) => {
    try {
      // const userubricas = await User.findAll({
      //   include: [
      //     {
      //       model: Rubrica,
      //       attributes: ["name"],
      //       through: {
      //         attributes: ["value", "date"],
      //         order: [["date", "DESC"]],
      //         group: "date",
      //       },
      //     },
      //   ],
      // });
      // const userubricas = await User.findAll({
      // attributes: ["value", "date"],
      // where: {
      //   uuid: "ccfab656-1978-4fea-960a-ff38908c7729",
      // },
      // include: [
      // {
      // model: UserRubricas,
      // model: Rubrica,
      //     attributes: [
      //       "name",
      //       "email",
      //       "gender",
      //       "age",
      //       "occupation",
      //       "school",
      //       "password",
      //       "lastname",
      //     ],
      //   },
      //   {
      //     model: Rubrica,
      //     attributes: ["name"],
      //     },
      //   ],
      // });
      // const userubricas = await sequelize.query(
      //   "SELECT `User`.`name`, `User`.`lastname`, `User`.`email`, `User`.`age`, `User`.`gender`, `User`.`occupation`, `User`.`school`, `Rubricas`.`name` as `Rubricaname`, `value` as `Rubricas.UserRubrica.value`, `date` as `UserRubricaDate`, `id` as `Rubricasid`, `UserUuid`, `RubricaUuid` from `users` as `User` left outer join ( `UserRubricas` as `Rubricas->UserRubrica` inner join `Rubricas` as `Rubricas` on `Rubricas`.`uuid` = `Rubricas->UserRubrica`.`RubricaUuid`) on `User`.`uuid` = `Rubricas->UserRubrica`.`UserUuid` order by `User`.`name`, UserRubricaDate ;",
      //   {
      //     type: QueryTypes.SELECT,
      //   }
      // );
      const user = await User.findAll({});
      const rubri = await user.getRubrica();
      console.log("🚀 ~ getAll ~ user", user);
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error", error });
    }
  };
  const getrubricasuser = async (req, res) => {
    let { uuid } = req.params;
    try {
      const userubricas = await sequelize.query(
        "SELECT `User`.`name`, `User`.`lastname`, `User`.`email`, `User`.`age`, `User`.`gender`, `User`.`occupation`, `User`.`school`, `Rubricas`.`name` as `Rubricaname`, `value` as `Rubricas.UserRubrica.value`, `date` as `UserRubricaDate`, `id` as `Rubricasid`, `UserUuid`, `RubricaUuid` from `users` as `User` left outer join ( `UserRubricas` as `Rubricas->UserRubrica` inner join `Rubricas` as `Rubricas` on `Rubricas`.`uuid` = `Rubricas->UserRubrica`.`RubricaUuid`) on `User`.`uuid` = `Rubricas->UserRubrica`.`UserUuid` where `User`.`uuid` = ? order by `User`.`name`, UserRubricaDate;",
        {
          replacements: [uuid],
          type: QueryTypes.SELECT,
        }
      );
      // const userubricas = await User.findByPk(uuid, {
      //   include: [
      //     {
      //       model: Rubrica,
      //       attributes: ["name"],
      //       through: {
      //         attributes: ["value", "date"],
      //         order: [["date", "DESC"]],
      //         group: "date",
      //       },
      //     },
      //   ],
      // });
      return res.status(200).json({ userubricas });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal server error", error });
    }
  };

  return {
    register,
    getAll,
    getrubricasuser,
    getDates,
    getData,
    getAvg,
  };
};

module.exports = UserRubricasController;
