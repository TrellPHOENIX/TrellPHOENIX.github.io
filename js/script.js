const form = document.getElementById('loginForm')
const passwordInput = document.getElementById('password')
const errorMessage = document.getElementById('errorMessage')
const content = document.getElementById('content')
const loginContainer = document.getElementById('loginContainer')

const correctPassword = 'njazONvaNjh=22L/?iPTTD}XDK[P2L'

form.addEventListener('submit', function (event) {
	event.preventDefault()

	const enteredPassword = passwordInput.value

	if (enteredPassword === correctPassword) {
		content.style.display = 'block'
		loginContainer.remove()
	} else {
		errorMessage.style.display = 'block'
		passwordInput.value = ''
		passwordInput.focus()
	}
})
