import { server, response } from 'packages/Dione'

server({
  port: 8080,
  onRequest: [
    request => {
      console.log(request)
    },
    request => response.serialize({
      status: 200,
      payload: 'OK'
    })
  ]
})
