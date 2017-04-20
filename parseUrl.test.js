import parseUrl from './parseUrl'

describe('Test parseUrl ::', () => {
  describe('Given a url with pathname and query ::', () => {
    it('should return them separated', () => {
      const url = 'abc/1234?id=1'

      const { pathname, query } = parseUrl({ url })

      expect(pathname).to.equal('abc/1234')
      expect(query.id).to.equal('1')
    })
  })

  describe('Given a url with pathname ::', () => {
    it('should return pathname', () => {
      const url = 'abc/1234'

      const { pathname, query } = parseUrl({ url })

      expect(pathname).to.equal('abc/1234')
      expect(query).to.eql({})
    })
  })

  describe('Given a url with pathname and 2 query ::', () => {
    it('should return them separated', () => {
      const url = 'abc/1234?id=1&test=test'

      const { pathname, query } = parseUrl({ url })

      expect(pathname).to.equal('abc/1234')
      expect(query.id).to.equal('1')
      expect(query.test).to.equal('test')
    })
  })
})
