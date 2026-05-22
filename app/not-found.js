import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page not find</h1>
      <p>Sorry, this page does not exist.</p>
      <Link href="/">Back to home</Link>
    </div>
  )
}