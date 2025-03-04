import * as z from 'zod'

export const registerValidation = z
  .object({
    username: z
      .string()
      .nonempty('نام کاربری الزامی است')
      .min(3, 'نام کاربری نمی تواند کمتر از 3 کاراکتر باشد.'),
    email: z.string().nonempty(' ایمیل الزامی است').email('ایمیل معتبر نیست'),
    password: z
      .string()
      .nonempty('رمز عبور الزامی است')
      .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
    confirmPassword: z.string().nonempty('تکرار رمز عبور الزامی است'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'پسورد یکسان نمی باشد',
    path: ['confirmPassword'],
  })
