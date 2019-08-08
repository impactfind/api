const PUT = module.exports.PUT = (req, res, url, port) => {
  let link = `${__API}${port}${url}`;
  const {body} = req;
  const token = __getAuthorizationToken(req.headers.authorization);
  __axios.post(link, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(({data})=> {
      res.success({
        payload: data
      })
    })
    .catch(err=> {

      console.log(err.response.data);
      res.error(err.response.data)
    })
};

