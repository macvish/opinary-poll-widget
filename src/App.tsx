import React, { useEffect, useState } from 'react';
import { Box, Card, Divider, Fade, FormLabel, Slide, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

import './App.css';
import { RadioInput } from './base/components';
import { Questions } from './index'
interface AppState {
  [name: string]: {
    value: string | number,
    id: number,
    question: string
  }
}

const App: React.FC<{ questions: Questions[] }> = ({ questions }) => {
  const [value, setValue] = React.useState<AppState>({});
  const [questionDisplayId, setQuestionDisplayId] = useState(1);

  const onChangeValue = (name: string, value: string | number, id: number) => {
    setValue(prevState => ({ ...prevState, [name]: { ...prevState?.[(name)], value, id, question: questions[id].question } }))

    const timeout = setTimeout(() => setQuestionDisplayId(questionDisplayId + 1), 2000)

    return () => clearTimeout(timeout)
  }

  const onSubmit = () => {
    localStorage.setItem('results', JSON.stringify(value))
  }

  useEffect(() => {
    if (questionDisplayId > questions.length) {
      onSubmit()
    }
  })

  return (
    <div className="poll-container">
      <Card className='form-wrapper'>
        <form>
          {questions.map((item, index) => (
            <Fade in={index + 1 === questionDisplayId} timeout={{ enter: 2000, exit: 1000 }}>
              <div key={index} className={index + 1 === questionDisplayId ? '' : 'hidden'}>
                <FormLabel>{item.question}: </FormLabel>
                <RadioInput
                  className='radio-wrapper'
                  data={item.answers}
                  name={`question-${index}`}
                  onChange={({ target }) => onChangeValue(`question${index}`, target.value, index)}
                />
              </div>
            </Fade>
          ))}
        </form>
        {questionDisplayId > questions.length &&
        (<Fade in={true} timeout={{ enter: 2000 }}>
          <Box className='greetings-wrapper' onClick={onSubmit}>
            <CheckCircleOutline color="success" sx={{ fontSize: '7rem' }} />
            <Typography>Thank you for your feedback!</Typography>
            <Divider sx={{ width: '100%', mt: '0.7rem', mb: '0.7rem' }} />
            <Box>
              <Typography variant='h5' sx={{ fontSize: '1.3rem', mb: '0.5rem' }}>Your poll results:</Typography>
              {Object.keys(value).map((key, index) => (
                <div key={index} className={index !== 1 ? 'mb' : ''}>
                  <Typography variant='subtitle1'>Q: {value[key].question}</Typography>
                  <Typography>A: {value[key].value}</Typography>
                </div>
              ))}
            </Box>
          </Box>
        </Fade>)}
      </Card>
    </div>
  );
}

export default App;
