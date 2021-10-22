import * as Yup from 'yup';

import {strings} from '../constants';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required').trim(),
  password: Yup.string()
    .required('Required')
    .matches(/^.*(?=.{7,}).*$/, strings.atLeast7char)
    .matches(
      /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/,
      strings.atLeast1SpecialCaseChar,
    )
    .matches(/^.*(?=.*\d).*$/, strings.atLeast1Digit)
    .matches(/^(?=.*[A-Z])/, strings.atLeast1UppercaseChar)
    .matches(/^(?=.*[a-z])/, strings.atLeast1LowercaseChar)
    .matches(/^(?!.*(.)\1+).*$/, strings.noMoreThan2RepeatingChar)
    .trim(),
});

console.log(Yup.string());
