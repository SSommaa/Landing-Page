import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'

export const handleRegister = async (email, password) => {
  if (!validateForm()) return

  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: email.value,
      password: password.value,
    })

    // Almacenar el token JWT
    localStorage.setItem('authToken', response.data.token)

    // Redirigir a área protegida
    router.push({ name: 'Profile' })
  } catch (error) {
    alertify.warning(error.response.data.error || 'Error en el registro')
  }
}

export const handleLogin = async () => {
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('authToken', response.data.token)
    router.push({ name: 'Profile' })
  } catch (error) {
    errorMessage.value = error.response.data.error || 'Error de conexión'
  }
}
