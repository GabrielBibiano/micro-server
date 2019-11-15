import React from 'react';
import express from 'express'
import ReactDomServer from 'react-dom/server'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('running');
})

app.post('/:component', async (req, res) => {
  const { component } = req.params
  const { props } = req.body
  
  try {
    const GettedComponent = await import(`./components/${component}`)

    res.send(ReactDomServer.renderToString(
      <GettedComponent.default {...props}/>
    ));
  } catch(e) {
    console.log('ERROR: ', e)
    res.send('Component not found').status(404)
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`APP LISTEN IN PORT ${PORT}`)
})
