const express = require('express');
const routes = require('./Routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*rotas e recursos
*/

/**
 * metodos http
 * 
 * get: buscar uma informação do back end
 * post:cria uma informação  no back end
 * put:alterar informação do back end
 * delete:para deletar uma informação do back ent
 */



/**
 * tipos de parametros
 * 
 * query parms:parametros nomeados enviados na rota apos "?"(filtros,paginação)
 * rote parms:parametros utilizados para identificar recursos
 * request body:corpo da requisição-metodo utiizado para utilizar ou alterar recursos
 */

/**
 * sql:mysql,sqlLite,oracle,microsoft sql server
 * noSQL:MongoDB,choiceDb
 */

 /**
  * driver:select * from users( e o drive da linguagem sql)
  * Query builder:table('users').select('*').where() melhor opção pois se adapta a todos os bancos relacionais 
  * linguagem javascript
  */

app.listen(3333);

