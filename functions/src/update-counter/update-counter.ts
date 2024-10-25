/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Counter } from './counter'

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

  if (counterValue == null || action == null || isNotANumber(counterValue)) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'query parameters counterValue and action are mandatory' })
    }
  }

  const counter = new Counter(parseInt(counterValue, 10))
  switch (action) {
    case 'increase':
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ counter: counter.increment().getCount() })
      }
    case 'decrease':
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ counter: counter.decrement().getCount() })
      }
    default:
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'action must be "increase" or "decrease"' })
      }
  }
}

function isNotANumber(counterValue: unknown): boolean {
  return isNaN(Number(counterValue));
}

export { handler }
