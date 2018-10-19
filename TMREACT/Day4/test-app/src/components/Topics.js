import React from 'react'
import {
  Link,
  Route
 } from 'react-router-dom'



function Topic() {
  return <h3>TOPIC 1</h3>
}



export default function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/topics/rendering'> Rendering With React</Link>
        </li>
        <li>
          <Link to='/topics/components'>Components</Link>
        </li>
        <li>
          <Link to='/topics/props-v-state'>Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path="/topics/rendering" component={Topic} />
      <Route path="/topics/components" component={Topic} />
      <Route path="/topics/props-v-state" component={Topic} />

    </div>
  )
}
