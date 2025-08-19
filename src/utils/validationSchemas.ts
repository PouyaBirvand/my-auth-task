import * as Yup from 'yup';
import { ERROR_MESSAGES, PHONE_REGEX } from '@/constants';

export const phoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required(ERROR_MESSAGES.PHONE_REQUIRED)
    .matches(PHONE_REGEX, ERROR_MESSAGES.PHONE_INVALID)
    .length(11, ERROR_MESSAGES.PHONE_LENGTH),
});
