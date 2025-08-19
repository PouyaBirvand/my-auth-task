export const PHONE_REGEX = /^09/;

export const ERROR_MESSAGES = {
  PHONE_REQUIRED: 'شماره تلفن الزامی است',
  PHONE_LENGTH: 'شماره تلفن باید دقیقاً 11 رقم باشد',
  PHONE_INVALID: 'شماره تلفن باید با 09 شروع شود',
  LOGIN_FAILED: 'خطا در ورود به سیستم. لطفاً دوباره تلاش کنید.',
} as const;
