const connection = require('./connection');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;

};

router.get('/tasks', (request, response) => {
    validar
})

module.exports = {
    getAll
};


