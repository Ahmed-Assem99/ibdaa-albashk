import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-gold-gradient text-6xl font-bold">404</h1>
      <p className="text-charcoal-600">This page doesn&apos;t exist.</p>
      <Link to="/" className="text-gold-600 font-semibold underline-offset-4 hover:underline">
        Back home
      </Link>
    </section>
  )
}
