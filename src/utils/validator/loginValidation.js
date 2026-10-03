import * as z from 'zod'

export const loginValidation = z.object({
  identifier: z
    .string()
    .nonempty('نام کاربری الزامی است')
    .min(3, 'نام کاربری نمی تواند کمتر از 3 کاراکتر باشد.'),
  password: z
    .string()
    .nonempty('رمز عبور الزامی است')
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
})
