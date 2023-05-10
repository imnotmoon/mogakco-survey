import { SurveyFieldProps } from './SurveyField';

export const SurveyRadioField = ({ name, label, value }: Omit<SurveyFieldProps, 'type'>) => (
  <div>
    <label>
      <span>{label}</span>
      <input type="radio" name={name} value={value} />
    </label>
  </div>
);
