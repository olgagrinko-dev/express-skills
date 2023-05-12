function isValidId(request, response, next) {
  const { id } = request.params;
  if (isNaN(id)) throw new Error('id не число');
  if (id <= 0) throw new Error('id отрицательное число');

  next();
}

module.exports = { isValidId };
