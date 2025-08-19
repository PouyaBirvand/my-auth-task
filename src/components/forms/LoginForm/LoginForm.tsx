'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { phoneSchema } from '@/utils/validationSchemas';
import { ERROR_MESSAGES } from '@/constants';
import styles from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (values: { phoneNumber: string }) => {
    try {
      setServerError('');
      await login(values.phoneNumber);
    } catch {
      setServerError(ERROR_MESSAGES.LOGIN_FAILED);
    }
  };

  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      validationSchema={phoneSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} noValidate>
        <div className={styles.formHeader}>
          <h1 className={styles.title}>ورود به سیستم</h1>
          <p className={styles.subtitle}>شماره تلفن همراه خود را وارد کنید</p>
        </div>

        <div className={styles.formBody}>
          <Field
            as={Input}
            name="phoneNumber"
            type="tel"
            label="شماره تلفن همراه"
            placeholder="09123456789"
            fullWidth
            disabled={isLoading}
            dir="ltr"
          />

          <ErrorMessage
            name="phoneNumber"
            component="div"
            className={styles.error}
          />

          {serverError && (
            <div className={styles.serverError}>{serverError}</div>
          )}

          <Button
            type="submit"
            fullWidth
            size="large"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
