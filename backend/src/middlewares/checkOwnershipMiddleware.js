
const checkOwnershipMiddleware = (req, res, next) => {
  
//sena buraya kullanıcının tekne sahibi olup olmadığını kontrolü vb yapılacak
  next(); 
};

module.exports = checkOwnershipMiddleware;
