let form = document.querySelector('form')

let hamza = {
	mail : "hminhas1999@gmail.com",
	pass : 'hamza12'
}

let zubair = {
	mail : "asadjani202@gmail.com",
	pass : "asad12"
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

	if(userInput.mail == hamza.mail || userInput.mail == zubair.mail){
		switch(userInput.mail){
			case hamza.mail:
				if(userInput.pass == hamza.pass)
					window.open('Home.html','_self')
					 else alert('invalid credentials')
			break
			 case zubair.mail:
			 	if(userInput.pass == zubair.pass)
			 		window.opne('Home.html', '_self')
			 	else alert('invalid credentials')
			break
		default:
			alert('invalid credentials')
		}
	}
})