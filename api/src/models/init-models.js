import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infoa_sti_categoria from  "../../models/infoa_sti_categoria.js";
import _infoa_sti_cliente from  "../../models/infoa_sti_cliente.js";
import _infoa_sti_endereco from  "../../models/infoa_sti_endereco.js";
import _infoa_sti_produto from  "../../models/infoa_sti_produto.js";
import _infoa_sti_venda from  "../../models/infoa_sti_venda.js";
import _infoa_sti_venda_item from  "../../models/infoa_sti_venda_item.js";


export default function initModels(sequelize) {
  const infoa_sti_categoria = _infoa_sti_categoria.init(sequelize, DataTypes);
  const infoa_sti_cliente = _infoa_sti_cliente.init(sequelize, DataTypes);
  const infoa_sti_endereco = _infoa_sti_endereco.init(sequelize, DataTypes);
  const infoa_sti_produto = _infoa_sti_produto.init(sequelize, DataTypes);
  const infoa_sti_venda = _infoa_sti_venda.init(sequelize, DataTypes);
  const infoa_sti_venda_item = _infoa_sti_venda_item.init(sequelize, DataTypes);
 

 
  infoa_sti_produto.belongsTo(infoa_sti_categoria, { as: "id_categoria_infoa_sti_categorium", foreignKey: "id_categoria"});
  infoa_sti_categoria.hasMany(infoa_sti_produto, { as: "infoa_sti_produtos", foreignKey: "id_categoria"});
  infoa_sti_endereco.belongsTo(infoa_sti_cliente, { as: "id_cliente_infoa_sti_cliente", foreignKey: "id_cliente"});
  infoa_sti_cliente.hasMany(infoa_sti_endereco, { as: "infoa_sti_enderecos", foreignKey: "id_cliente"});
  infoa_sti_venda.belongsTo(infoa_sti_endereco, { as: "id_endereco_infoa_sti_endereco", foreignKey: "id_endereco"});
  infoa_sti_endereco.hasMany(infoa_sti_venda, { as: "infoa_sti_vendas", foreignKey: "id_endereco"});
  infoa_sti_venda.belongsTo(infoa_sti_produto, { as: "id_produto_infoa_sti_produto", foreignKey: "id_produto"});
  infoa_sti_produto.hasMany(infoa_sti_venda, { as: "infoa_sti_vendas", foreignKey: "id_produto"});
  infoa_sti_venda_item.belongsTo(infoa_sti_venda, { as: "id_venda_infoa_sti_venda", foreignKey: "id_venda"});
  infoa_sti_venda.hasMany(infoa_sti_venda_item, { as: "infoa_sti_venda_items", foreignKey: "id_venda"});
 
  return {

    infoa_sti_categoria,
    infoa_sti_cliente,
    infoa_sti_endereco,
    infoa_sti_produto,
    infoa_sti_venda,
    infoa_sti_venda_item,
   
  };
}
