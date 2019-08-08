const POST = module.exports.POST = (req, res, url, port) => {
  console.log("working");
  let link = `${__API}${port}${url}`;
  const token = __getAuthorizationToken(req.headers.authorization);
  const {body} = req;
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

