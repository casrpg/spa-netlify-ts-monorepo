import { type Handler, type HandlerEvent, type HandlerContext } from '@netlify/functions'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405
    }
  }
  if (event.queryStringParameters == null) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'query parameters counterValue and action are mandatory' })
    }
  }
  const { counterValue, action } = event.queryStringParameters

  if (counterValue == null || action == null) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'query parameters counterValue and action are mandatory' })
    }
  }

  const counter = parseInt(counterValue, 10)
  switch (action) {
    case 'increase':
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ counter: counter + 1 })
      }
    case 'decrease':
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ counter: counter - 1 })
      }
    default:
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'action must be "increase" or "decrease"' })
      }
  }
}

export { handler }
