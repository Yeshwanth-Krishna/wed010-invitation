import { useEffect, useRef } from 'react'

// Adds .revealed when the wrapped section scrolls into view,
// reproducing the reference fade/slide entrance.
export default function Reveal({ children, className = '', variant = '', threshold = 0.2, resetOnLeave = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('revealed')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            if (!resetOnLeave) {
              observer.unobserve(entry.target)
            }
          } else if (resetOnLeave) {
            entry.target.classList.remove('revealed')
          }
        })
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, resetOnLeave])

  return (
    <div ref={ref} className={`reveal ${variant} ${className}`}>
      {children}
    </div>
  )
}
