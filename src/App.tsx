import { ReactElement, lazy, useState, Suspense } from 'react'
import './App.scss'
const Index = lazy(() => import('./components/Index'))
const Work = lazy(() => import('./components/Work'))
const Contact = lazy(() => import('./components/Contact'))

export default function App():ReactElement<any> {

  const [page, setPage] = useState("index");

  return (
    <>
      <Suspense>
          {
            Switch(page)
          }
      </Suspense>
    </>
  )
}

function Switch(page: string):ReactElement<any> {
  switch(page) {
    case "index": return <Index/>
    case "work": return <Work/>
    case "contact": return <Contact/>
    default: return <></>
  }
}
