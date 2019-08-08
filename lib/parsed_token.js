const getAuthorizationToken = function(header) {
  if(header === undefined || !header.startsWith("Bearer ")) {
    return false
  }

  return header.substr("Bearer ".length)
}

module.exports = getAuthorizationToken
