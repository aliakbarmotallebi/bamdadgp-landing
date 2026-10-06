export const MOCK_TOKEN = 'bamdad-static-token'
const PROFILE_KEY = 'bamdad_mock_profile'
const AUTH_COOKIE = 'token'

export function buildMockUser({ identifier, username, email } = {}) {
  const nameFromIdentifier = identifier?.includes('@')
    ? identifier.split('@')[0]
    : identifier || username || 'کاربر'

  const finalUsername = username || nameFromIdentifier
  const finalEmail =
    email ||
    (identifier?.includes('@')
      ? identifier
      : `${finalUsername}@bamdadgp.com`)

  return {
    id: 1,
    documentId: 'mock-user-1',
    username: finalUsername,
    email: finalEmail,
    fullname: 'کاربر بامداد',
    mobile: '09121234567',
    telephone: '02166429535',
    gender: 'male',
    address:
      'خیابان جمهوری، مابین خیابان فلسطین و ولیعصر، پلاک ۹۶۲، فروشگاه کوشا',
    zip_code: '1435678910',
    province: 'تهران',
    national_code: '0012345678',
    birthday: Date.now(),
  }
}

function setAuthCookie() {
  if (typeof document === 'undefined') return
  const maxAge = 60 * 60 * 48
  document.cookie = `${AUTH_COOKIE}=${MOCK_TOKEN}; path=/; max-age=${maxAge}; samesite=strict`
}

function clearAuthCookie() {
  if (typeof document === 'undefined') return
  document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0; samesite=strict`
}

export function saveMockProfile(user) {
  if (typeof window === 'undefined') return
  localStorage.setItem(PROFILE_KEY, JSON.stringify(user))
}

export function getMockProfile() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearMockProfile() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(PROFILE_KEY)
}

export function mockLogin({ identifier }) {
  const user = buildMockUser({ identifier })
  saveMockProfile(user)
  setAuthCookie()
  return user
}

export function mockRegister({ username, email }) {
  const user = buildMockUser({ username, email })
  saveMockProfile(user)
  setAuthCookie()
  return user
}

export function mockLogout() {
  clearMockProfile()
  clearAuthCookie()
  return { logout: true }
}

export function mockAuthStatus() {
  if (typeof document === 'undefined') return { isAuth: false }
  const hasToken = document.cookie
    .split(';')
    .some(part => part.trim().startsWith(`${AUTH_COOKIE}=`))
  return { isAuth: hasToken }
}

export function mockUpdateProfile(updates) {
  const current = getMockProfile() || buildMockUser({ username: 'کاربر' })
  const updated = {
    ...current,
    ...updates,
    id: current.id,
    documentId: current.documentId,
  }
  saveMockProfile(updated)
  return updated
}

export function mockSubmitComment(data) {
  return {
    data: {
      id: Date.now(),
      ...data,
      comment_status: 'pending',
      createdAt: new Date().toISOString(),
    },
  }
}
