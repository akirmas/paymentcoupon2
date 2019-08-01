import { useEffect, useState } from 'react'

function useTimer(start = 10) {
  const localStorageKey = 'fc6024652c129208064fdeca6732464e'
  const savedDate = window.localStorage.getItem(localStorageKey)
  const dateNow = Date.now()
  const difference = Math.floor(new Date(dateNow - savedDate).getTime() / 1000)

  if (!(savedDate && difference < start * 60)) {
    window.localStorage.setItem(localStorageKey, `${dateNow}`)
  }

  const [timer, setTimer] = useState(
    difference > start * 60 ? start * 60 : start * 60 - difference
  )
  const minutes = Math.ceil(timer / 60)
  let seconds = 59 + (60 * (start - minutes) - (start * 60 - timer))

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000)

    if (seconds === 0 && minutes - 1 === 0) clearInterval(interval)

    return () => clearInterval(interval)
  }, [timer, start, minutes, seconds])

  return {
    seconds: seconds.toString().length === 1 ? 0 + '' + seconds : seconds,
    minutes:
      (minutes - 1).toString().length === 1
        ? 0 + '' + (minutes - 1)
        : minutes - 1,
  }
}

export default useTimer
