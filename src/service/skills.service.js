const array = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkill() {
  return array;
}

function getSkillById(id) {
  const filtered = array.filter(elem => elem.id == id);
  return filtered;
}

function createSkillData(title) {
  array.push({
    "title": "JS"
  });
  return array;
}

function upSkillData(id, title) {
  const filtered = array.filter(elem => elem.id != id);
  if (filtered.length == array.length) throw new Error('такого id нет');
  filtered.push({
    "title": "JS",
  })
  return filtered;
}

module.exports = { getAllSkill, getSkillById, createSkillData, upSkillData };
