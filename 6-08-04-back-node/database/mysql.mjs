import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://root:root@localhost:3306/veiculos");

export default sequelize;