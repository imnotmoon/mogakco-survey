import { Formik } from 'formik';
import { ReactNode, useCallback } from 'react';

export type SurveyFormikProps = {
  children: ReactNode;
};

export const SurveyFormik = ({ children }: SurveyFormikProps) => {
  const onSubmit = useCallback(() => {}, []);
  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      {children}
    </Formik>
  );
};
