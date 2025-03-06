import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { Routes } from '@/route/routes'

const protectedRoutes = []

const authRoutes = [Routes.login, Routes.register]

export async function middleware(request) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isAuthRoute = authRoutes.includes(path)

  const cookie = (await cookies()).has('token')

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL(Routes.login, request.nextUrl))
  }

  if (isAuthRoute && cookie) {
    return NextResponse.redirect(new URL(Routes.home, request.nextUrl))
  }

  return NextResponse.next()
}
