import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <>
    <div>
      <h2>Sayac Testi:</h2>
      <div className='counter'>
        <button onClick={() => setcount(count -1)}>azalt</button>
        <span data-testid="sayi">{count}</span>
        <button onClick={() => setcount(count +1)}>arttir</button>

      </div>
    </div>
    </>
  )
}

export default Counter
