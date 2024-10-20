import { useState } from 'react'

type CounterAction = 'increase' | 'decrease'

interface CounterResponse {
  counter: number
}

export type Action = () => Promise<void>
const initialCounterValue = 0
export const useCounter = (): [number, Action, Action] => {
  const [count, setCount] = useState<number>(initialCounterValue)
  const updateCounter = async (action: CounterAction) => {
    const response = await fetch(`/api/update-counter?counterValue=${count}&action=${action}`)
    const data: CounterResponse = (await response.json()) as CounterResponse
    console.log(data)
    setCount(data.counter)
  }

  const handleIncrease = async () => {
    await updateCounter('increase')
  }

  const handleDecrease = async () => {
    await updateCounter('decrease')
  }

  return [count, handleIncrease, handleDecrease]
}
