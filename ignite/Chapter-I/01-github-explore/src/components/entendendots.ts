type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}
function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}`
}

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  adress: {
    city: 'New York',
    state: 'NY'
  }
}