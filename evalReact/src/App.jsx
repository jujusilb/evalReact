import { useState } from 'react';
import Presentation from './presentation';
import FetchLevels from './fetch_levels';

function App() {
  let niveau =1

  return (
    <>
      <div>
        <Presentation />
      </div>
      <div>
        <FetchLevels niveau ={niveau} />
      </div>
    </>
  )
}

export default App
