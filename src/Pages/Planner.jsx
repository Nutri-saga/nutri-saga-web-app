import React, {useContext} from 'react'

import { DishContext } from '../Context/DishContext'
function Planner() {
    const ans = useContext(DishContext)

  return (
    <div>
      Hello
    </div>
  )
}

export default Planner