import { SurveyFieldProps } from './SurveyField';

export const SurveyTextField = ({ name, value, label }: Omit<SurveyFieldProps, 'type'>) => (
  <div>
    <label>
      <span>{label}</span>
      <input type="text" name={name} value={value} />
    </label>
  </div>
);
