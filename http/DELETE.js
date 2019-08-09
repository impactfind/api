const DELETE = module.exports.DELETE = (req, res, url, port)=> {
  let link = `${__API}${port}${url}`;
  const token = __getAuthorizationToken(req.headers.authorization);
  console.log('ini link', link);
  __axios.delete(link, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(({data})=> res.success({payload: data}))
    .catch(err=>{
      console.log(err);
      console.log('response',err.response);
      res.error(err.response.data)
    })
};
