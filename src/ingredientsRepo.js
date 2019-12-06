const db = require('./db');

const loadAllRecipesForList = async () => {
  const query = {
    text: 'SELECT IdIngredient AS ID, Name, KCal FROM Ingredient ORDER BY Name'
  };
  const dbResult = await db.query(query);
  const rows = dbResult.rows;
  return rows;
};

module.exports = {
  loadAllRecipesForList,
}