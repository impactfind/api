const PORT = {
  user: "30001",
  project: "30002"

};

const index = module.exports.index = (req, res) => {
  const url = req.url;
  const method = req.method;
  const service = url.split('/')[1];
  const request = require(`./${method}`)[method];
  request(req, res, url, PORT[service]);

};
