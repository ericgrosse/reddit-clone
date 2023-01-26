<script>
  import Post from '../components/Post.svelte';
</script>

<div class="container">
  <h1>Reddit Clone</h1>
  <p>A reddit clone written in svelte (frontend) and backend TBD</p>
  <Post />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>