const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ingredientRepository = require('./ingredientsRepo');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/ingredients', async (req, res) => {
  try {
    const loadedIngredients = await ingredientRepository.loadAllRecipesForList();
    const formattedResult = JSON.stringify(loadedIngredients);
    res.send(formattedResult);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.listen(3000);