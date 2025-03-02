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

export async function middleware(request) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  const isAuthRoute = authRoutes.includes(path)

  const cookie = (await cookies()).get('token')?.value
  //   const session = await decrypt(cookie)
  const session = false

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL(Routes.login, request.nextUrl))
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}
