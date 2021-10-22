import React, {useState} from 'react';
import {Formik, yupToFormErrors} from 'formik';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';

import {Colors, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';
import ShowPass from '../../assets/svg/show-pass.svg';
import HidePass from '../../assets/svg/hide-pass.svg';
import CheckMark from '../../assets/svg/check-mark.svg';
import ErrorCheckMark from '../../assets/svg/check-mark-error.svg';
import {LoginSchema} from '../../utils';
import {InputRequirementComponent} from '../../components';

export const LoginScreen = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  return (
    <StyledBox>
      <StyledBox
        bgColor={Colors.orange}
        height="300px"
        justifyContent="center"
        alignItems="center"
      >
        <StyledBox flexDirection="row" alignItems="flex-start">
          <StyledText
            color={Colors.white}
            fontSize="120px"
            textTransform="uppercase"
          >
            {strings.d}
          </StyledText>
          <StyledText color={Colors.white} fontSize="40px">
            {strings.rinRound}
          </StyledText>
        </StyledBox>
      </StyledBox>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={values => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/*{yupToFormErrors(errors.password).forEach(i => console.log(i))}*/}
            <View
              style={{
                width: '90%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'uppercase',
                  color: Colors.greyForText,
                  paddingTop: 25,
                }}
              >
                {strings.username}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.separatorGrey,
                }}
              >
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={{
                    paddingVertical: 0,
                    height: 30,
                    marginTop: 8,
                    paddingBottom: 8,
                    fontSize: 18,
                    marginBottom: 5,
                    width: '100%',
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'uppercase',
                  color: Colors.greyForText,
                  paddingTop: 25,
                }}
              >
                {strings.password}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.separatorGrey,
                }}
              >
                <TextInput
                  secureTextEntry={isVisiblePass}
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={{
                    paddingVertical: 0,
                    height: 30,
                    marginTop: 8,
                    paddingBottom: 8,
                    fontSize: 18,
                    marginBottom: 5,
                    width: '100%',
                    flex: 1,
                  }}
                />
                <TouchableOpacity
                  style={{marginRight: 5}}
                  onPress={() => setIsVisiblePass(!isVisiblePass)}
                >
                  {isVisiblePass ? (
                    <ShowPass
                      width={30}
                      height={30}
                      color={Colors.separatorGrey}
                    />
                  ) : (
                    <HidePass
                      width={30}
                      height={30}
                      color={Colors.separatorGrey}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View>
                {/*<View*/}
                {/*  style={{*/}
                {/*    flexDirection: 'row',*/}
                {/*    paddingVertical: 5,*/}
                {/*  }}*/}
                {/*>*/}
                <InputRequirementComponent
                  touched={touched.email}
                  value={'Require'}
                  isMatched={values.email.match(/^(?=.*[a-z])/)}
                />
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.password}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.email}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.email}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.email}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.email}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*<InputRequirementComponent*/}
                {/*  touched={touched.password}*/}
                {/*  value={values.password}*/}
                {/*  valueType="password"*/}
                {/*/>*/}
                {/*  <View style={{paddingRight: 15}}>*/}
                {/*    {errors.email && touched.email && (*/}
                {/*      <ErrorCheckMark*/}
                {/*        width={20}*/}
                {/*        height={20}*/}
                {/*        color={Colors.red}*/}
                {/*      />*/}
                {/*    )}*/}
                {/*    {!errors.email && touched.email && (*/}
                {/*      <CheckMark width={20} height={20} color={Colors.green} />*/}
                {/*    )}*/}
                {/*  </View>*/}
                {/*  <Text*/}
                {/*    style={[*/}
                {/*      errors.email && touched.email && {color: 'red'},*/}
                {/*      !errors.email && touched.email && {color: 'green'},*/}
                {/*    ]}*/}
                {/*  >*/}
                {/*    {errors.email && touched.email && errors.email}*/}
                {/*    {!errors.email && touched.email && strings.validEmail}*/}
                {/*    {!errors.email && !touched.email && strings.validEmail}*/}
                {/*  </Text>*/}
                {/*</View>*/}

                {/*<View*/}
                {/*  style={{*/}
                {/*    flexDirection: 'row',*/}
                {/*    paddingVertical: 5,*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <View style={{paddingRight: 15}}>*/}
                {/*    {errors.password && touched.password && (*/}
                {/*      <ErrorCheckMark*/}
                {/*        width={20}*/}
                {/*        height={20}*/}
                {/*        color={Colors.red}*/}
                {/*      />*/}
                {/*    )}*/}
                {/*    {!errors.password && touched.password && (*/}
                {/*      <CheckMark width={20} height={20} color={Colors.green} />*/}
                {/*    )}*/}
                {/*  </View>*/}
                {/*  <Text*/}
                {/*    style={[*/}
                {/*      errors.password && touched.password && {color: 'red'},*/}
                {/*      !errors.password && touched.password && {color: 'green'},*/}
                {/*    ]}*/}
                {/*  >*/}
                {/*    {errors.password && touched.password && errors.password}*/}
                {/*    {!errors.password && touched.password && strings.validEmail}*/}
                {/*    {!errors.email && !touched.email && strings.validPassword}*/}
                {/*  </Text>*/}
                {/*</View>*/}
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    marginTop: 15,
                    backgroundColor: Colors.darkBlueGrey,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: Colors.white,
                      textTransform: 'uppercase',
                      fontSize: 20,
                      paddingVertical: 15,
                    }}
                  >
                    {strings.login}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    marginTop: 5,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: Colors.darkBlueGrey,
                      textTransform: 'uppercase',
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    {strings.forgotPass}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </StyledBox>
  );
};
