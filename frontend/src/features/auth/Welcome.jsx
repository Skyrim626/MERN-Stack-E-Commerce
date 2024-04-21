import React from 'react'
import { Link } from 'react-router-dom';

export default function Welcome() {

  const date = new Date();
  const today = new Intl.DateTimeFormat('en-Us', { dateStyle: 'full', timeStyle: 'long' }).format(date);

  return (
    <section>
      <p>{today}</p>
      <h1>Welcome</h1>
      <p><Link to={"/"}>Insert Link</Link></p>
      <p><Link to={"/"}>Insert Link</Link></p>
    </section>
  )
}
