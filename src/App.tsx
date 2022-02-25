import React, { useState } from 'react';

import './App.css';
import { RadioInput } from './base/components';

const questions = [
  {
    question: 'How you feel today:',
    answers: [
      {
        value: 'Brilliant! I have so much energy',
        label: 'Brilliant! I have so much energy'
      },
      {
        value: 'Always can be worse',
        label: 'Always can be worse'
      },
      {
        value: 'Please, end my misery',
        label: 'Please, end my misery'
      }
    ]
  },
  {
    question: 'How you like the Opinary test:',
    answers: [
      {
        value: 'It was great and so challenging',
        label: 'It was great and so challenging'
      },
      {
        value: 'Not bad, but you can improve',
        label: 'Not bad, but you can improve'
      },
      {
        value: 'It was a nightmare, never again',
        label: 'It was a nightmare, never again'
      }
    ]
  }
]

interface AppState {
  [name: string]: string | number | undefined
  id?: number
  question?: string
}

function App() {
  const [value, setValue] = React.useState<AppState>({});
  const [questionDisplayId, setQuestionDisplayId] = useState(1);

  const onChangeValue = (name: string, value: string | number, id: number) => {
    setValue(prevState => ({ ...prevState, [name]: value, id, question: questions[id].question }))

    const timeout = setTimeout(() => setQuestionDisplayId(questionDisplayId + 1), 2000)

    return () => clearTimeout(timeout)
  }

  return (
    <div>
      <form>
        {questions.map((item, index) => (
          <div key={index} className={index + 1 === questionDisplayId ? '' : ''}>
            <p>{item.question}</p>
            <RadioInput
              className='radio-wrapper'
              data={item.answers}
              name={`question-${index}`}
              onChange={({ target }) => onChangeValue(`question${index}`, target.value, index)}
            />
            {value?.[(`question${index}`)] && <p>"{value?.[(`question${index}`)]}" was selected</p>}
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
