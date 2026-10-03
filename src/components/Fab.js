'use client'

const items = [
  {
    label: 'اینستاگرام',
    href: 'https://www.instagram.com/bamdadgp',
    external: true,
    className:
      'hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700 hover:shadow-[0_8px_20px_rgba(219,39,119,0.18)]',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Z" />
        <path d="M17.5 6.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
        <path d="M12 2.5c-2.7 0-3.1.01-4.2.06-1.1.05-1.85.23-2.5.49a5 5 0 0 0-1.85 1.2 5 5 0 0 0-1.2 1.85c-.26.65-.44 1.4-.49 2.5C1.71 9.7 1.7 10.1 1.7 12.8s.01 3.1.06 4.2c.05 1.1.23 1.85.49 2.5a5 5 0 0 0 1.2 1.85 5 5 0 0 0 1.85 1.2c.65.26 1.4.44 2.5.49 1.1.05 1.5.06 4.2.06s3.1-.01 4.2-.06c1.1-.05 1.85-.23 2.5-.49a5 5 0 0 0 1.85-1.2 5 5 0 0 0 1.2-1.85c.26-.65.44-1.4.49-2.5.05-1.1.06-1.5.06-4.2s-.01-3.1-.06-4.2c-.05-1.1-.23-1.85-.49-2.5a5 5 0 0 0-1.2-1.85 5 5 0 0 0-1.85-1.2c-.65-.26-1.4-.44-2.5-.49-1.1-.05-1.5-.06-4.2-.06Zm0 1.8c2.65 0 2.96.01 4 .06.96.04 1.48.2 1.83.34.46.18.78.39 1.12.73.34.34.55.66.73 1.12.14.35.3.87.34 1.83.05 1.04.06 1.35.06 4s-.01 2.96-.06 4c-.04.96-.2 1.48-.34 1.83-.18.46-.39.78-.73 1.12-.34.34-.66.55-1.12.73-.35.14-.87.3-1.83.34-1.04.05-1.35.06-4 .06s-2.96-.01-4-.06c-.96-.04-1.48-.2-1.83-.34a3 3 0 0 1-1.12-.73 3 3 0 0 1-.73-1.12c-.14-.35-.3-.87-.34-1.83-.05-1.04-.06-1.35-.06-4s.01-2.96.06-4c.04-.96.2-1.48.34-1.83.18-.46.39-.78.73-1.12.34-.34.66-.55 1.12-.73.35-.14.87-.3 1.83-.34 1.04-.05 1.35-.06 4-.06Z" />
      </svg>
    ),
  },
  {
    label: 'واتساپ',
    href: 'https://wa.me/982166429535',
    external: true,
    className:
      'hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-[0_8px_20px_rgba(16,185,129,0.18)]',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 2.08.61 4.06 1.77 5.78L2 22l4.55-1.86a9.86 9.86 0 0 0 5.49 1.63h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.78-4.2-4.93-4.39-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .43-.07.67.51.24.6.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.29.5-.14.17-.3.39-.43.52-.14.14-.28.29-.12.57.16.28.7 1.15 1.5 1.86 1.03.91 1.9 1.2 2.17 1.33.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.24.1 1.55.73 1.81.86.27.14.44.2.51.31.07.11.07.64-.17 1.32Z" />
      </svg>
    ),
  },
  {
    label: 'پشتیبانی',
    href: 'tel:02166429535',
    className:
      'hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 hover:shadow-[0_8px_20px_rgba(217,119,6,0.18)]',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M12 3a7 7 0 0 0-7 7v1H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h2v-2H7v-8a5 5 0 0 1 10 0v8h-2v2h2a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v-1a7 7 0 0 0-7-7Z" />
      </svg>
    ),
  },
]

export default function Fab() {
  return (
    <ol className="fixed bottom-5 right-4 z-30 flex flex-col gap-3">
      {items.map(item => (
        <li key={item.label} className="group relative">
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            {item.label}
          </span>
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            aria-label={item.label}
            className={`flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 ${item.className}`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ol>
  )
}
