const express = require('express');
const { getAllSkill, getSkillById, createSkill } = require('../service/skills.service');

const router = express.Router();

router.get('/', (request, response) => {
  try {
    const data = getAllSkill();
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

router.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const data = getSkillById(id);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

router.post('/', (request, response) => {
  try {
    const { title } = request.body;
    const data = createSkill(title);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

module.exports = router;
