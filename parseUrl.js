import queryString from 'query-string'

const parseUrl = ({ url = '' }) => {
  const splitUrl = url.split('?')
  const pathname = splitUrl[0]
  const queryStr = splitUrl[1] || ''
  const query = queryString.parse(queryStr)

  return {
    pathname,
    query,
  }
}

export default parseUrl
