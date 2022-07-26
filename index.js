//imoport express library
import express from 'express'

//initialize express server
const app = express()

//telling express to expect things getting pused to be json
app.use(express.json())

//add new student (in theory)
app.post('/students', (request, response) => {
  const newStudent = request.body
  students.push(newStudent)
  response.status(201).send(students)
})

// list requests that we want express to respond too
// ROUTES ALWAYS NEED A / AT THE BEGINNING
app.get('/hello', (request, response) => {
  //do something when we get a request to this route
  response.send('Hello World!')
})

const students = [
  { firstName: 'Jonathan', lastName: 'Vegas' },
  { firstName: 'Bridgette', lastName: 'Lemus' },
  { firstName: 'Mason', lastName: 'Madaras' },
  { firstName: 'Logan', lastName: 'McCalley' },
  { firstName: 'James', lastName: 'Etchberger' },
]

app.get('/students', (request, response) => {
  response.send(students)
})

//this will return the first value from the array that equals true
app.get('/students/:fName', (request, response) => {
  const student = students.find(
    (stud) => stud.firstName === request.params.fName
  )
  if (!student) {
    response.status(404).send({ message: 'Student not found', success: false })
    return
  }
  response.send(student)
})

//start listening on a port
//this must always go at the END
app.listen(3001, () => {
  console.log(`now listening on port 3001`)
})
