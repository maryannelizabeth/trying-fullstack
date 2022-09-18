import request from 'superagent'

const rootUrl = '/api/v1'

export function getNames(token) {
  return request
    .get(rootUrl + '/names')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body.results
    })
}

// export function addName(name) {
//   return request
//     .post(rootUrl + '/names')
//     .send({
//       name: name,
//     })
//     .then((res) => res.body)
// }

// eaovupi;bhudpisorbvuipoaersdbvjkfhbgdsjklgvhy$AGHRFDOIUBVGIORS%DEBHVOUIA$R%HVBLDFVJOIUHSDFKOLVJNFDLSKJVHGLRKDJSNGO$IQANVIPO$RSND*)(OVFINSDOLKIVBNFOIDSHJOIRGNTKLSNGHLKRDNSVBFIKODHJBNIO)
// const token = await getAccessTokenSilently()
export function addName(name, token) {
  return request
    .post(rootUrl + '/names')
    .set('Authorization', `Bearer ${token}`)
    .send({
      name: name,
    })
    .then((res) => res.body)
}
