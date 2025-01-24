import { ref } from 'vue'
import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import { useRouter } from 'vue-router'
const router = useRouter()
const number = 0

export const handleRegister = async (email, password) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: email.value,
      password: password.value,
    })

    const storedUsers = JSON.parse(localStorage.getItem('users')) || []

    const user = storedUsers.find((user) => user.email === email.value)
    if (user) {
      alertify.error('El email ya está registrado. Intenta con otro.')
      return
    }

    const newUser = {
      email: email.value,
      password: password.value,
    }

    storedUsers.push(newUser)

    localStorage.setItem('users', JSON.stringify(storedUsers))

    localStorage.setItem('authToken', response.data.token)

    alertify.success('Registro exitoso')
  } catch (error) {
    alertify.warning(error.response?.data?.error || 'Error en el registro')
  }
}

export const handleLogin = async (email, password) => {
  try {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []

    const user = storedUsers.find((user) => user.email === email.value)

    if (user) {
      if (user.password === password.value) {
        const response = await axios.post('https://reqres.in/api/login', {
          email: email.value,
          password: password.value,
        })

        localStorage.setItem('authToken', response.data.token)

        alertify.success('Inicio de sesión exitoso')
      } else {
        alertify.error('Email o contraseña incorrectos')
      }
    } else {
      alertify.error('El usuario no está registrado')
    }
  } catch (error) {
    alertify.error(error.response?.data?.error || 'Error de conexión')
  }
}
