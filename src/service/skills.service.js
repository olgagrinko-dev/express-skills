const array = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkill() {
  if (!array.length) throw new Error('Array is empty');
  return array;
}

function getSkillById(id) {
  const filtered = array.filter(elem => elem.id == id);
  if (!filtered.length) throw new Error('There is no such id');
  return filtered;
}

function createSkillData(title) {
  array.push({
    id: array.length + 1,
    "title": "JS",
  });
  return array;
}

function upSkillData(id, title) {
  const filtered = array.filter(elem => elem.id != id);
  if (filtered.length == array.length) throw new Error('There is no such id');
  filtered.push({
    "title": "JS",
  })
  return filtered;
}

function upSkillData(id, title) {
  const filtered = array.filter(elem => elem.id != id);
  if (filtered.length == array.length) throw new Error('There is no such id');
  filtered.push({
    "title": "JS",
  })
  return filtered;
}

function deleteDataSkill(id) {
  const filtered = array.filter(elem => elem.id != id);
  if (filtered.length == array.length) throw new Error('There is no such id');
  return filtered;
}

module.exports = { getAllSkill, getSkillById, createSkillData, upSkillData, deleteDataSkill };
