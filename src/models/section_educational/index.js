const dbPool = require('../../config/database');

const get = async () => {
  const SQLQuery = 'SELECT id, title, small_title, list FROM section_educational';

  const [result] = await dbPool.execute(SQLQuery, []);

  return result;
};

module.exports = {
  get,
}