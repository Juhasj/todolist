const validateBody =(request, response, next) => {
  const {body} = request;
  if (body.title == undefined){
    return response.status(400).json({message: 'Você precisa inserir um nome de task'});
  };
  

  if (body.title == ''){
    return response.status(400).json({message: 'Não pode ser vazio'});
  };

  next();

};

const validateFieldStatus =(request, response, next) => {
    const {body} = request;
    if (body.status == undefined){
      return response.status(400).json({message: 'Você precisa inserir um stauts'});
    };
    
  
    if (body.status == ''){
      return response.status(400).json({message: 'Status Não pode ser vazio'});
    };
  
    next();
  
  };

module.exports = {

    validateBody,
    validateFieldStatus,
};