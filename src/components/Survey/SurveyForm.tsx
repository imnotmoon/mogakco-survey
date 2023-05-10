import { Form } from 'formik';
import { SurveyField } from './Field/SurveyField';
import { SurveyFormik } from './SurveyFormik';

export const SurveyForm = () => (
  <SurveyFormik>
    <Form>
      <div>
        <h3>모각코 만족도</h3>
        <ul>
          <li>
            <SurveyField type="radio" name="satisfaction" value={1} label="1" />
          </li>
          <li>
            <SurveyField type="radio" name="satisfaction" value={2} label="2" />
          </li>
          <li>
            <SurveyField type="radio" name="satisfaction" value={3} label="3" />
          </li>
          <li>
            <SurveyField type="radio" name="satisfaction" value={4} label="4" />
          </li>
          <li>
            <SurveyField type="radio" name="satisfaction" value={5} label="5" />
          </li>
        </ul>
      </div>
      <div>
        <h3>모각코 인원</h3>
        <ul>
          <li>
            <SurveyField type="radio" name="participants" value={1} label="5명이 적당하다" />
          </li>
          <li>
            <SurveyField
              type="radio"
              name="participants"
              value={2}
              label="인원이 더 추가되면 좋을 것 같다"
            />
          </li>
          <li>
            <SurveyField type="radio" name="participants" value={3} label="도편제 도입하자" />
          </li>
        </ul>
      </div>
      <div>
        <h3>모각코 시간</h3>
        <ul>
          <li>
            <SurveyField type="radio" name="length" value="1h" label="1시간" />
          </li>
          <li>
            <SurveyField type="radio" name="length" value="1.5h" label="1시간 30분" />
          </li>
          <li>
            <SurveyField type="radio" name="length" value=">1.5h" label="1시간 30분 초과" />
          </li>
        </ul>
      </div>
    </Form>
  </SurveyFormik>
);
