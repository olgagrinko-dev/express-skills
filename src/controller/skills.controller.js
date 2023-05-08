const express = require('express');
const { getAllSkill, getSkillById, createSkillData, upSkillData } = require('../service/skills.service');

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
    const data = createSkillData(title);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

router.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { title } = request.body;
    const data = upSkillData(id, title);
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
});

module.exports = router;
