
<h3>Story:<br></h3>
There is apprehension that Youtube servers will be unavailable since It’s hard to predict the
nearest future. Your company has been engaged to provide internal service so Youtube data
can be stored as a backup.<br>
<h3>Requirements<br></h3>
Important: For the sake of simplicity focus on the backend side - your primary job is to prepare
suitable API. The requirements assume an existing page but for now it is not obligatory - you
can test your API with Postman.<br>

For the sake of make this assignment easier to understand, each User Story represents an
API endpoint in the web application:<br><br>

<h3>Get random videos [ GET /api/videos?random=true ]<br></h3>

• It should return a list of 5 random videos.<br><br>

<h3>Add new video [ POST /api/videos ]<br></h3>

• Request validation rules:<br><br>

<h5>• Video url:<br></h5>
• single line text<br>
• required<br>
• has to fit url syntax<br>
<h5>• Video title:<br></h5>
• single line text<br>
• required<br>
• minimum length: 3 characters<br>
<h5>• Video description:<br></h5>
• multi-line text<br>
• required<br>
<h5>• Tags:<br></h5>
• single line text input with value(s) starting with #, separated by whitelines<br>
• optional<br>
<h5>• Uploaded by:<br></h5>
• single line number input<br>
• minimum length: 3 characters<br>
• optional<br>
<h5>• Contact email:<br></h5>
• single line input<br>
• has to fit email syntax<br>• optional<br>
• When the user clicks the "Add new Video" (sends POST request) button, the form
should submit it's data<br>
• Id for new video is auto-generated<br>
• ... and the server should add these data to the csv storage.<br>
<h3>Update existing Video [ PUT /video/{{video_id}} ]<br></h3>
• The same form as the add page, but filled in with data of the given Video.<br>
• This data should be read from the csv file.<br>
• An additional checkbox with “archive” label<br>
• Archived videos should not be visible whenever I’m retrieving data<br>
