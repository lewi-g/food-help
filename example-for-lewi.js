//What we shouldn't do:
let RESULT_HTML_TEMPLATE = (
	`<div class='youtube-video-result'>
			<p class="center">
				<a href = '' target="_blank">
					<img src = '' class = 'youtube-thumbnail'>
					<p class="video-title"></p>
				</a>
			</p>
			<p class="user-name"></p>
			<p class="description"></p>
	</div>`
	);

function renderResult(videoData) {
	const template = $(RESULT_HTML_TEMPLATE);
	const thumbnailSource = videoData.snippet.thumbnails.medium.url;
	const videoId = 'https://www.youtube.com/watch?v=' + videoData.id.videoId;
	const videoTitle = videoData.snippet.title;
	const videoDesc = videoData.snippet.description;
	const userName = videoData.snippet.channelTitle;
	console.log(template);
	//thumbnail
	template.find('.youtube-thumbnail').attr('src', thumbnailSource);
	//thumbnail link
	template.find('a').attr('href', videoId);
	//video title
	template.find('.video-title').text(videoTitle);
	//username
	template.find('.user-name').text(userName);
	//video description
	template.find('.description').text(videoDesc);

	return template;
}

//What we should do instead:

function resultHtmlTemplate() {
	const template = $(RESULT_HTML_TEMPLATE);
	const thumbnailSource = videoData.snippet.thumbnails.medium.url;
	const videoId = 'https://www.youtube.com/watch?v=' + videoData.id.videoId;
	const videoTitle = videoData.snippet.title;
	const videoDesc = videoData.snippet.description;
	const userName = videoData.snippet.channelTitle;
	return `<div class='youtube-video-result'>
			<p class="center">
				<a href = ${videoId} target="_blank">
					<img src = ${thumbnailSource} class = 'youtube-thumbnail'>
					<p class="video-title">${videoTitle}</p>
				</a>
			</p>
			<p class="user-name">${userName}</p>
			<p class="description">${videoDesc}</p>
	</div>`

}








