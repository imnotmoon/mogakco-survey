import { HTMLInputTypeAttribute } from 'react';
import { SurveyRadioField } from './SurveyRadioField';
import { SurveyTextField } from './SurveyTextField';

export type SurveyFieldProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  label: string;
};

export const SurveyField = ({ type, ...props }: SurveyFieldProps) => {
  switch (type) {
    case 'radio':
      return <SurveyRadioField {...props} />;
    case 'text':
    default:
      return <SurveyTextField {...props} />;
  }
};
