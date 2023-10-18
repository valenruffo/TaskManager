const server = require("./src/app");
const PORT = 80;
const { sequelize } = require("./src/db");

server.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Servidor Express en el puerto ${PORT}`);
});
