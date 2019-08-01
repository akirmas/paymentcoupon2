import { useEffect, useState } from 'react'

function useTimer(start = 10) {
  const [timer, setTimer] = useState(start * 60)
  const minutes = Math.ceil(timer / 60)
  let seconds = 60 + (60 * (start - minutes) - (start * 60 - timer))

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 100)
    console.log(minutes)
    if (seconds === 1 && minutes - 1 === 0) clearInterval(interval)

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
