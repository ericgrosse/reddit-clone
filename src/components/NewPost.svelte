<script>
  import { navigate } from 'svelte-routing';
  
  let title;
  let author;
  let body;

  function createNewRedditPost(title, author, body) {
    // Create a new object to hold the post data
    let newPost = {
      title: title,
      author: author,
      body: body,
      upvotes: 0,
      downvotes: 0,
      comments: [],
      date_created: new Date()
    };

    // Get the existing posts from local storage
    let subredditPosts = JSON.parse(localStorage.getItem('subreddit')) || [];

    // Add the new post to the list of posts
    subredditPosts.push(newPost);

    // Save the updated list of posts to local storage
    localStorage.setItem('subreddit', JSON.stringify(subredditPosts));

    // Return the new post object
    return newPost;
  }

  function handleClick() {
    console.log(title);
    console.log(author);
    console.log(body);

    createNewRedditPost(title, author, body);
    navigate('/'); // After creating the reddit post, navigate back to the homepage
  }

  function handleTitle(evt) {
    title = evt.target.value;
  }

  function handleAuthor(evt) {
    author = evt.target.value;
  }

  function handleBody(evt) {
    body = evt.target.value;
  }
</script>

<form>
  <input on:input={handleTitle} type="text" placeholder="Title"><br>
  <input on:input={handleAuthor} type="text" placeholder="Author"><br>
  <input on:input={handleBody} type="text" placeholder="Body"><br><br>
  <button on:click={handleClick}>Submit</button>   
</form>