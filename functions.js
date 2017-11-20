function post(postID, postContent, timeStamp) {
	this.ID = postID;
	this.content = postContent;
	this.timeStamp = timeStamp;
}

function drawPost(post, xpos, ypos) {
	var minWidth = 350;
	var minHeight = 175;
	// draw the post's text content
	var content = kumo.text(post.content).fill("#EEEEEE").center(0, 0);
	
	// grab the width and height of the text we just drew...
	var width = content.bbox().width;
	var height = content.bbox().height;
	
	// check if the width and height are less than the minimums, set them if they are.
	width = (width < minWidth) ? minWidth : width + 50;
	height = (height < minHeight) ? minHeight: height + 50;
	
	console.log(width + ", " + height);
	
	// ...and use them to make the container
	var container = kumo.ellipse(width, height).fill("#444444").center(0, 0).back();
	
	var finalPost = kumo.group().add(container).add(content).dmove(xpos, ypos); // dmove is used because weird stuff happens using centre()
}

function drawCatalog(catalog) {
	console.log("This should be the post ID of /g/'s sticky:");
	console.log( catalog[0]["threads"][0]["no"] );
	
	console.log("Here's a list of all the current OP posts in the catalog:");
	var count = 0;
	
	// the catalog JSON from 4chan is formatted like this:
	// array of page numbers (i've called it the "catalog" variable) > page > array of OP posts > post > associative array of post data.
	// this following code iterates through the pages, then iterates through the OP posts on each, and prints each post's ID to the console.
	
	for (page in catalog) {
		for (thread in catalog[page]["threads"]) {
			var postID = catalog[page]["threads"][thread]["no"]
			console.log("No." + postID);
			count++;
		}
	}
	console.log("There's " + count + " threads on /g/ currently.");
}