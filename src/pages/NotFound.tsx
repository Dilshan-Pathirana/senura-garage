import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found | Dilini Motors" description="The page you requested does not exist." />
      <Container className="py-20">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black">Page not found</h1>
          <p className="mt-3 text-muted">
            The page you requested doesn’t exist. Use the navigation, or go back to the homepage.
          </p>
          <div className="mt-6">
            <Link to="/" className="no-underline">
              <Button>Go Home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
