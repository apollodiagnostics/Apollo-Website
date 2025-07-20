import { redirect } from 'next/navigation'
import { getNotFoundData } from '@query/not-found'
import { NotFound } from '@components/feature/NotFound'

async function NotFoundPage() {
  const { notFound } = await getNotFoundData()
  redirect('/')

  return <NotFound {...notFound} />
}

export default NotFoundPage
