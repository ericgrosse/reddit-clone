<script>
  import Post from './Post.svelte';
  import axios from 'axios';
  
  let posts = [];
  let error = null;
  
  async function getData() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
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