const dbPool = require('../../config/database');

const get = async () => {
  const SQLQuery = 'SELECT small_title, title, description, image FROM section_opening';

  const [result] = await dbPool.execute(SQLQuery, []);

  return result[0];
};

module.exports = {
  get,
}