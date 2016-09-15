function getComment() {

	// to get the value of input
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	// set date
	var d = document.createTextNode(Date())
	var todayDate = document.createElement("P")
	todayDate.appendChild(d)
	// create text
	var userNameText = document.createTextNode("- " + username)
	var commentText = document.createTextNode(comment)
	// make comments list
	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	// username comment
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	// newcomment
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)
	// comment display
	
	// conditions if inputs are empty
	if((username.length === 0)||(comment.length === 0)) {
		alert("You must create an alias and a comment.")
	}
	else {
	newListItem.appendChild(todayDate).style.fontSize = "small"
	newListItem.appendChild(newComment)
	newListItem.appendChild(newUserName)
	document.getElementById("commentList").appendChild(newListItem)
	}
	return
}