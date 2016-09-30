function getComment() {

	// to get the value of input
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	// set date
	var d = document.createTextNode(Date())
	var todayDate = document.createElement("P")
	todayDate.appendChild(d)
	// delete button
	var x = document.createTextNode("Delete")
	var delBtn = document.createElement("BUTTON")
	delBtn.setAttribute("id", "delBtn")
	delBtn.addEventListener("click", remove)
	delBtn.appendChild(x)
	// toggle button
	// var t = document.createTextNode("show/hide")
	// var tglBtn = document.createElement("BUTTON")
	// tglBtn.setAttribute("id", "tglBtn")
	// tglBtn.addEventListener("click", togglebox)
	// tglBtn.appendChild(t)
	// create text
	var userNameText = document.createTextNode("- " + username)
	var commentText = document.createTextNode(comment)
	// make comments list
	var newListItem = document.createElement("LI")
	newListItem.setAttribute("id", "list")
	newListItem.className = "list-group-item"
	// username comment
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	newUserName.setAttribute("id", "usVal")
	// newcomment
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)
	newComment.setAttribute("id", "comVal")
	// comment display
	var list = document.getElementById("commentList")
	
	
	// conditions if inputs are empty
	if((comment.length === 0)||(username.length === 0)) {
		alert("Please enter name and message")	
	}
	else {
		newListItem.appendChild(todayDate).style.fontSize = "10px"
		newListItem.appendChild(newComment)
		newListItem.appendChild(newUserName).style.fontSize = "medium"
		newListItem.appendChild(delBtn)
		// newListItem.appendChild(tglBtn)

	// to insert new LI on top
		list.insertBefore(newListItem, list.childNodes[0])
		document.getElementById("todoForm").reset()
		return
	}
}
// enter key function "post it"
function enter() {
	if(event.keyCode == 13) {
		document.getElementById("btn").click()
	}
}
// delete button for message/quotes
function remove() {
	this.parentNode.remove()
}








