<script>
  import Post from './Post.svelte';
  import axios from 'axios';
  
  let posts = [];
  let error = null;
  
  // Use this when testing a mock API from the web
  async function getDataFromJSONPlaceholder() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    }
    catch (err) {
      error = err.message;
    }
  }

  async function getData() {
    try {
      const subreddit = localStorage.getItem('subreddit');
      if(subreddit) {
        posts = JSON.parse(subreddit);
      }
      else {
        throw new Error("No subreddit found in local storage");
      }
    }
    catch (err) {
      error = err.message;
    }
  }

  getData();
</script>

<div>
  {#each posts as post}
    <Post post={post}/>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
  }
</style>