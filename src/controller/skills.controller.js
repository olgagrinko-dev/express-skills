const express = require('express');
const { isValidId } = require('../helpers/validator.js');
const { getAllSkill, getSkillById, createSkillData, upSkillData, deleteDataSkill } = require('../service/skills.service');

const router = express.Router();

router.get('/', (request, response) => {
  try {
    const data = getAllSkill();
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

router.get('/:id', isValidId, (request, response) => {
  try {
    const { id } = request.params;
    const data = getSkillById(id);
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

router.post('/', (request, response) => {
  try {
    const { title } = request.body;
    const data = createSkillData(title);
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

router.put('/:id', isValidId, (request, response) => {
  try {
    const { id } = request.params;
    const { title } = request.body;
    const data = upSkillData(id, title);
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

router.delete('/:id', isValidId, (request, response) => {
  try {
    const { id } = request.params;
    const data = deleteDataSkill(id);
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

module.exports = router;
