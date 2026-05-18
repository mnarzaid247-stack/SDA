// TODO Day 4: replace <a href> with <Link to> from react-router-dom

export default function Header({title}) {
  return (
    <>
    <header>
      <h1>{title}</h1>
      <a href='#'>Login </a>
      <a href='#'>Register </a>
    </header>
    </>
  )
}
