import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required').trim(),
  password: Yup.string()
    // .min(7, 'Your password must have at least 7 characters')
    .lowercase('Lovercase')
    .required('Required')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    // )
    // .matches(/^.*(?=.{7,}).*$/, 'Your password must have at least 7 characters')
    // .matches(
    //   /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/,
    //   'Your password must have at least 1 special case character',
    // )
    // .matches(/^.*(?=.*\d).*$/, 'Your password must have at least 1 digit')
    .matches(
      /^.*[?=.* A-Z].*$/,
      'Your password must have at least 1 uppercase character',
    )

    .trim(),
});
