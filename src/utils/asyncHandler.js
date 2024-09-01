const asyncHandller = (reqHnadller) => {
  return (req, res, next) => {
    Promise.resolve(reqHnadller(req, res, next)).catch((err) => next(err));
  };
};

export {asyncHandller};
