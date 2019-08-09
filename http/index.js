const PORT = {
  user: "30001",
  project: "30002",
  admin: "30003"

};

const index = module.exports.index = (req, res) => {
  const url = req.url;
  const method = req.method;
  const service = url.split('/')[1];
  const request = require(`./${method}`)[method];
  console.log('request ', method)
  console.log('service ', service)
  console.log('url ', url)
  console.log(request)
  request(req, res, url, PORT[service]);


};
