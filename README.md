# Comprehensive Blog API

This backend is hosted on [Vercel](https://comprehensive-blog-i3olb7x7g-rahuls-projects-2c131377.vercel.app/).

The Comprehensive Blog API is a powerful Node.js application built with the Express framework and MongoDB as the database. It provides a wide range of features for managing blog posts, including Create, Read, Update, and Delete operations, as well as the ability to retrieve the latest blog post from each unique category.

## API Endpoints

### Create Post

- **Endpoint:** POST /api/posts
- **Description:** Create a new blog post.
- **Request Body:**
  - title (string): The title of the blog post.
  - content (string): The content of the blog post.
  - category (string): The category ID for the blog post.
- **Response:**
  - Status 201 Created: The blog post has been successfully created.
  - JSON Response: The newly created blog post with its unique ID and timestamps.

### Get All Posts

- **Endpoint:** GET /api/posts
- **Description:** Retrieve a list of all existing blog posts.
- **Response:**
  - Status 200 OK: The request was successful.
  - JSON Response: An array of blog posts, each containing id, title, content, created_at, updated_at, and category details.

### Get Single Post

- **Endpoint:** GET /api/posts/:id
- **Description:** Retrieve a specific blog post by its unique ID, including category details.
- **Response:**
  - Status 200 OK: The request was successful.
  - JSON Response: The blog post with its id, title, content, created_at, updated_at, and category details.

### Update Post

- **Endpoint:** PUT /api/posts/:id
- **Description:** Update an existing blog post by its ID.
- **Request Body:**
  - Title (string): The updated title of the blog post.
  - Content (string): The updated content of the blog post.
- **Response:**
  - Status 200 OK: The blog post has been successfully updated.
  - JSON Response: The updated blog post with its id, title, content, created_at, updated_at, and category details.

### Delete Post

- **Endpoint:** DELETE /api/posts/:id
- **Description:** Delete a blog post by its ID.
- **Response:**
  - Status 204 No Content: The blog post has been successfully deleted.

### Retrieve Latest Blog from Each Category

- **Endpoint:** GET /api/posts/latest
- **Description:** Retrieve the latest blog post from each unique category.
- **Response:**
  - Status 200 OK: The request was successful.
  - JSON Response: An array of blog posts, each representing the latest post in its category, including id, title, content, created_at, updated_at, and category details.

## Usage

To use this API, make requests to the specified endpoints using the provided HTTP methods. You can test the API using tools like Postman or directly integrate it into your applications. The API is hosted on Vercel for your convenience.

Please ensure you include the required request parameters and handle the responses as per the described status codes and JSON structures.

---

This README provides a brief overview of the Comprehensive Blog API and its available endpoints. For more detailed usage and examples, refer to the documentation and consider exploring the API interactively on the hosted Vercel instance.
