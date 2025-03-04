'use server'

import { cookies } from 'next/headers'

export async function setCookie(name, value, httpOnly = false, path = '/') {
  const cookieStore = await cookies()

  cookieStore.set({
    name: name,
    value: value,
    httpOnly: httpOnly,
    path: path,
  })
}
