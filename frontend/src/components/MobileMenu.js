export default function MobileMenu() {
  return (
    <div className="hidden">
      <div className="fixed w-full h-full bg-stone-600/40 backdrop-blur-[1px] top-0 z-20"></div>
      <div className="w-1/2 md:w-1/3 top-0 bg-white/90 border-r-4 border-yellow-300 backdrop-blur-md fixed left-0 h-screen min-h-screen z-40">
        <button className="size-10 bg-yellow-300 group right-0 top-0 rounded-bl-md flex relative">
          <span className="size-full p-1 pr-0 text-yellow-500 group-hover:text-yellow-600/80 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
