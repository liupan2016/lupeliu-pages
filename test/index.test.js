const lupeliuPages = require('..')

// TODO: Implement module test
test('lupeliu-pages', () => {
  expect(lupeliuPages('w')).toBe('w@zce.me')
  expect(lupeliuPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => lupeliuPages(100)).toThrow('Expected a string, got number')
})
