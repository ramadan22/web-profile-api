const dbPool = require('../../config/database');

const get = async () => {
  const SQLQuery = 'SELECT id, logo, title, description, sort FROM section_career_experience ORDER BY sort ASC';

  const [result] = await dbPool.execute(SQLQuery, []);

  return result;
};

module.exports = {
  get,
}