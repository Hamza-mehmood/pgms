let form = document.querySelector('form')

class Admin{
	constructor(mail, pass){
		this.mail = mail
		this.pass = pass
	}
}

let hamza = new Admin('hminhas1999@gmail.com','hamza12')
let zubair = new Admin('asadjani202@gmail.com','asad12')


let userInput = {
	mail : "",
	pass : ""
}

form.addEventListener('submit', e => {
	e.preventDefault()
	userInput.mail = document.getElementById('mail').value
	userInput.pass = document.getElementById('pass').value

	console.log(userInput.mail, userInput.pass)

	if(userInput.mail == hamza.mail){
		if(userInput.pass == hamza.pass){
			window.open('Home.html',"_self")
		} else alert('invalid Password')
	} else if(userInput.mail == zubair.mail){
		if(userInput.pass == zubair.pass)
			window.open('Home.html','_self')
	} else alert('invalid credentials')
})