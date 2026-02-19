import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  const params = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // optional
    })
  }, [pathname,params ])

  return null
}

export default ScrollToTop
