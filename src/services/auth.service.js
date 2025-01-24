import { ref } from 'vue'
import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import { useRouter } from 'vue-router'
const router = useRouter()

export const handleRegister = async (email, password) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('authToken', response.data.token)
  } catch (error) {
    alertify.warning(error.response.data.error || 'Error en el registro')
  }
}

export const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      email: email.value,
      password: password.value,
    })

    localStorage.setItem('authToken', response.data.token)
  } catch (error) {
    alertify.error(error.response.data.error || 'Error de conexión')
  }
}
