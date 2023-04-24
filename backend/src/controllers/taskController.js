const getAll = (request, response) => {
 return response.status(200).json({message: './Controle running!!'});
};

module.exports = {
    getAll
};