const DELETE = module.exports.DELETE = (req, res, url, port)=> {
  let link = `${__API}${port}${url}`;
  const token = __getAuthorizationToken(req.headers.authorization);
  __axios.get(link, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(({data})=> res.success({payload: data}))
    .catch(err=> res.error(err.response.data))
};
