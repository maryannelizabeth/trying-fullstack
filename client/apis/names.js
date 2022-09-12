import request from 'superagent'

const rootUrl = '/api/v1'

export function getNames() {
  return request.get(rootUrl + '/names').then((res) => {
    console.log('results api', res.body.results)
    return res.body.results
  })
}

export function addName(name) {
  return request
    .post(rootUrl + '/names')
    .send({
      name: name,
    })
    .then((res) => res.body)
}
