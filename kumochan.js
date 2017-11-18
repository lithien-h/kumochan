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
	
	var finalPost = kumo.group().add(container).add(content).dmove(xpos, ypos); // dmove is used because weird stuff happens using centre()
}

var test1 = new post(
"1234567890",
"this is a test string, placed right in the middle!\nwe can put the OP post here maybe",
"timestamp");

var test2 = new post(
"1234567891",
"this ellipse is trying to hide at 0,0.",
"timestamp");

var test3 = new post(
"1234567892",
"this is a tall string!\nss\nss\nss\nss\nss\nss\nss\nss\nss\nss\nss",
"timestamp");

var test4 = new post(
"1234567893",
"all ellipses have a minimum size for consistency, but\nthey get bigger if lines are too long.\naaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaa\nthis looks bad.",
"timestamp");

drawPost(test1, window.innerWidth / 2, window.innerHeight / 2); // placed at the dead centre of the screen
drawPost(test2, 0, 0);
drawPost(test3, window.innerWidth / 4, 750);
drawPost(test4, 3 * window.innerWidth / 4, 750);