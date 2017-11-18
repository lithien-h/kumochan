var kumo = SVG("kumochan").size("100%", "100%"); // "kumo" is nippon for "spider".

var rectangle = kumo.rect(100,100).attr( {fill: "#FF0000"} );

function drawPost(postID, postContent, timeStamp, xpos, ypos) {
	
	// draw the post's text content
	var content = kumo.text(postContent).fill("#EEEEEE");
	content.center(0, 0);
	
	// grab the width and height of the text we just drew...
	var width = content.bbox().width;
	var height = content.bbox().height;
	console.log(width + ", " + height);
	
	// ...and use it to make the container
	var container = kumo.ellipse(width + 100, height + 100).fill("#444444");
	container.center(0, 0).back();
	
	var post = kumo.group().add(container).add(content);
	post.center(xpos, ypos);
}

drawPost("1234567890", "this is a test string!", "timestamp", 500, 250);
drawPost("1234567891", "this is another test string!\nthis second line is long, so the ellipse is wider!", "timestamp", 750, 500);
drawPost("1234567892", "this is the final string!\nthere's a bunch\nof line breaks\nso the ellipse\nis taller\nto compensate.", "timestamp", 1000, 250);
drawPost("1234567893", "it might look better to keep a set ratio so each ellipse is the same shape.", "timestamp", 1000, 750);