# Simple Poll Widget

This is a simple poll widget made with reactjs and embedded in a html test file.

## Technologies
- ReactJs
- Yarn
- TypeScript
- Material UI
- React Testing Library

## Node Version
`v16.0.0`

## React Version
`v17.0.2`

## Typescript Version
`v4.4.2`
## Final work

In the project directory, you can find the folder `final-work` where the minified js/css file is located and both html files.

Below is how to configure the questions:

```
const questions = [
    {
      question: 'How do you feel today',
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
      question: 'How do you like the Opinary test',
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
```

## Setup Poll Widget
In the project directory, you can run:

### Install Dependencies
Clone/download project, when done, you'd have to install all the dependancies of the project by runing the following command on your cmd or terminal:
`yarn`
or
`yarn install`

### Start Project
`yarn start`

### Run Unit Test
`yarn test`

### Build Project
`yarn build`

### Eject React
`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
