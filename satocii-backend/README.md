# LinkedIn Auto-Post API

This backend API automatically posts content to LinkedIn when you create posts on your website. It integrates with the LinkedIn API to share your content seamlessly.

## Features

- ✅ Automatic LinkedIn posting
- ✅ Database tracking of all posts
- ✅ Error handling and status tracking
- ✅ LinkedIn profile integration
- ✅ RESTful API endpoints

## API Endpoints

### 1. Post to LinkedIn
**POST** `/api/post-to-linkedin`

Creates a new post and automatically shares it on LinkedIn.

**Request Body:**
```json
{
  "content": "Your post content here",
  "title": "Optional post title",
  "postUrl": "https://yourwebsite.com/post-url"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Post successfully created and shared on LinkedIn",
  "data": {
    "postId": "mongodb_post_id",
    "linkedinPostId": "linkedin_post_id",
    "content": "Your post content here",
    "status": "posted"
  }
}
```

### 2. Get All Posts
**GET** `/api/posts`

Retrieves all posts from the database.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "post_id",
      "platform": "linkedin",
      "content": "Post content",
      "title": "Post title",
      "postUrl": "https://website.com/post",
      "linkedinPostId": "linkedin_id",
      "status": "posted",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### 3. Get LinkedIn Profile
**GET** `/api/linkedin-profile`

Gets the current LinkedIn profile information.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "linkedin_user_id",
    "firstName": "John",
    "lastName": "Doe",
    "profilePicture": "profile_image_url"
  }
}
```

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure LinkedIn Credentials:**
   The LinkedIn API credentials are already configured in `index.js`:
   - Client ID: `77841xcce81r4n`
   - Client Secret: `WPL_AP1.UbcpVLBhedq7urxK.ITK5ew==`
   - Access Token: `AQWRXNGzR56JSo8FmgCpl5uoIGw1G1zX540N8_Vvzg8NF15fH8kc52fAmeIc2ohYUX8Ky29s2S3dF68eqCfSPxcriJeg4LvV7z-j_c4Ej90803MfJ_zCJK5mLQyWfnNna7x302yH6phm_4WMdZMcNnryqlPQClbr-yGb4ofUmd0V-W9C9YJNX_GF0_D-RISeGRXA9lVgE6NijkaK4qaks8r0snwyqFSUE5a8t5g4FWyZC4Tvl88QF50HHpZj68OseMbqVrD7BLJkDNyjDfZVGIiEEbYZXCAQSogPN7CpRzkkkZdSutF2JvCmyMBkqSXZ45yplOTSrFV4J1euj3P5yFGSZFdNNQ`

3. **Start the Server:**
   ```bash
   node index.js
   ```

4. **Test the API:**
   ```bash
   node test-linkedin-api.js
   ```

## Usage Examples

### JavaScript/Frontend Integration

```javascript
// Post to LinkedIn from your website
async function postToLinkedIn(content, title) {
  try {
    const response = await fetch('http://localhost:3000/api/post-to-linkedin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
        title: title,
        postUrl: window.location.href
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Posted to LinkedIn successfully!');
      return result.data;
    } else {
      console.error('Failed to post to LinkedIn:', result.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
postToLinkedIn(
  "Check out my latest blog post about web development! 🚀 #webdev #coding",
  "New Blog Post"
);
```

### cURL Examples

```bash
# Post to LinkedIn
curl -X POST http://localhost:3000/api/post-to-linkedin \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Amazing new feature on my website! Check it out! 🚀",
    "title": "Feature Launch",
    "postUrl": "https://mywebsite.com/new-feature"
  }'

# Get all posts
curl http://localhost:3000/api/posts

# Get LinkedIn profile
curl http://localhost:3000/api/linkedin-profile
```

## Database Schema

The `Post` model includes:
- `platform`: Always "linkedin"
- `content`: The post content
- `title`: Optional post title
- `postUrl`: URL to the original post
- `linkedinPostId`: LinkedIn's post ID
- `status`: "pending", "posted", or "failed"
- `createdAt`: Timestamp
- `updatedAt`: Timestamp

## Error Handling

The API includes comprehensive error handling:
- Invalid input validation
- LinkedIn API error handling
- Database error handling
- Network error handling

All errors return structured JSON responses with error details.

## Security Notes

- The access token is currently hardcoded for development
- For production, consider using environment variables
- Implement proper authentication for your API endpoints
- Consider rate limiting for LinkedIn API calls

## LinkedIn API Limits

- LinkedIn has rate limits for posting
- Free tier allows limited posts per day
- Consider implementing queuing for high-volume posting

## Support

For issues or questions, check the LinkedIn API documentation or contact the developer.
