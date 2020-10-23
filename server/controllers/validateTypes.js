export default (req, res, next) => {
  const { title, maker, type, price, name } = req.body;

  const errorResponse = (field) => {
    return res.status(400).send(`${field} has an Invalid Type!`);
  }

  if (typeof title !== 'string' && title) return errorResponse(title);
  if (typeof maker !== 'string' && maker) return errorResponse(maker);
  if (typeof type !== 'string' && type) return errorResponse(type); 
  if (typeof name !== 'string' && name) return errorResponse(name); 

  if (typeof parseInt(price) !== 'number' && price) return errorResponse(price);

  return next();
}