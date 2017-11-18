var kumo = SVG("kumochan").size("100%", "100%"); // "kumo" is nippon for "spider".

function post(postID, postContent, timeStamp) {
	this.ID = postID;
	this.content = postContent;
	this.timeStamp = timeStamp;
}

function drawPost(post, xpos, ypos) {
	var minWidth = 400;
	var minHeight = 200;
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
	
	var post = kumo.group().add(container).add(content).center(xpos, ypos);
}

var test1 = new post("1234567890", "this is a test string!", "timestamp");
var test2 = new post("1234567891", "this is another test string!\nthis second line is long, so the ellipse is wider!", "timestamp");
var test3 = new post("1234567892", "this is a tall string!\nss\nss\nss\nss\nss\nss\nss\nss\nss\nss\nss", "timestamp");
var test4 = new post("1234567893", "it might look better to keep a set ratio so each ellipse is the same shape.", "timestamp");

drawPost(test1, 500, 250);
drawPost(test2, 750, 500);
drawPost(test3, 1000, 250);
drawPost(test4, 1000, 750);