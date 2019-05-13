let form = document.querySelector('form')

let credentials = {
	mail : "guru@itdunya.com",
	pass : 'qwerty123'
}

let userInput = {
	mail : "",
	pass : ""
}

form.addEventListener('submit', e => {
	e.preventDefault()
	userInput.mail = document.getElementById('mail').value
	userInput.pass = document.getElementById('pass').value

	console.log(userInput.mail, userInput.pass)

	if(userInput.mail == credentials.mail && userInput.pass == credentials.pass){
		window.open('Home.html','_self')
	} else alert('invalid credentials')
})