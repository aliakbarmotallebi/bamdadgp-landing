'use client'
import useModalStore from '@/stores/modal'
import react from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, setIsOpen, children }) {
  const [mounted, setMounted] = react.useState(false)

  react.useEffect(() => {
    setMounted(true)
    const handleEscape = event => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  if (!mounted) {
    return <></>
  }

  return createPortal(
    <div
      className={`flex fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm items-center justify-center transition-all duration-300 z-50`}
    >
      <div className="max-w-sm w-full relative bg-white rounded-3xl transition-all duration-500">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between border-b rounded-t border-gray-200 p-4">
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">{children}</div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              onClick={handleClose}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}
