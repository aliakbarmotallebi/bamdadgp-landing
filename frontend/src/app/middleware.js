import { NextResponse } from 'next/server'
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
import { Routes } from '@/route/routes'

const protectedRoutes = [Routes.about]
const publicRoutes = [
  Routes.home,
  Routes.brands,
  Routes.contact,
  Routes.feedback,
  Routes.product,
  Routes.representatives,
  Routes.store,
  Routes.survey,
]
const authRoutes = [Routes.login, Routes.register]

export function middleware(req) {
  const path = req.nextUrl.pathname
  console.log('Path ===========>', path)
  // const isProtectedRoute = protectedRoutes.includes(path)
  // const isPublicRoute = publicRoutes.includes(path)
  // const isAuthRoute = authRoutes.includes(path)

  // const cookie = (await cookies()).get('token')?.value
  // //   const session = await decrypt(cookie)
  // const session = false

  // if (isProtectedRoute && !session) {
  //   return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
  // }

  // // 6. Redirect to /dashboard if the user is authenticated
  // if (isAuthRoute && session) {
  //   return NextResponse.redirect(new URL('/', req.nextUrl))
  // }

  // return NextResponse.next()
}
export const config = {
  matcher: ['/', '/about', '/login', '/register'], // مسیرهای مورد نظر خود را اضافه کنید
}

// Routes Middleware should not run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }
