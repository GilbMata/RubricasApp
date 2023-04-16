const bcrypt = require("bcrypt-nodejs");

const bcryptService = () => {
  const password = (user) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user, salt);
    console.log("🚀 ~ password ~ salt:", salt);
    console.log("🚀 ~ password ~ hash:", hash);
    console.log("🚀 ~ password ~ user:", user);

    return hash;
  };

  const comparePassword = (pw, hash) => {
    return bcrypt.compareSync(pw, hash);
  };
  return {
    password,
    comparePassword,
  };
};

module.exports = bcryptService;
