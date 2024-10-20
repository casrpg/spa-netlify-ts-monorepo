/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

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
  const { queryStringParameters:{ counterValue, action } } = event

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
