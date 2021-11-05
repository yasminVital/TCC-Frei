import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;

import _infoa_sti_categoria from  "./infoa_sti_categoria.js";
import _infoa_sti_cliente from  "./infoa_sti_cliente.js";
import _infoa_sti_cupom from  "./infoa_sti_cupom.js";
import _infoa_sti_endereco from  "./infoa_sti_endereco.js";
import _infoa_sti_produto from  "./infoa_sti_produto.js";
import _infoa_sti_venda from  "./infoa_sti_venda.js";
import _infoa_sti_venda_item from  "./infoa_sti_venda_item.js";


export default function initModels(sequelize) {
 
  const infoa_sti_categoria = _infoa_sti_categoria.init(sequelize, DataTypes);
  const infoa_sti_cliente = _infoa_sti_cliente.init(sequelize, DataTypes);
  const infoa_sti_cupom = _infoa_sti_cupom.init(sequelize, DataTypes);
  const infoa_sti_endereco = _infoa_sti_endereco.init(sequelize, DataTypes);
  const infoa_sti_produto = _infoa_sti_produto.init(sequelize, DataTypes);
  const infoa_sti_venda = _infoa_sti_venda.init(sequelize, DataTypes);
  const infoa_sti_venda_item = _infoa_sti_venda_item.init(sequelize, DataTypes);



  
  return {
    infoa_sti_categoria,
    infoa_sti_cliente,
    infoa_sti_cupom,
    infoa_sti_endereco,
    infoa_sti_produto,
    infoa_sti_venda,
    infoa_sti_venda_item,

  };
}
