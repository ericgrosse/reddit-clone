<script>
  import PostList from '../components/PostList.svelte';
  import NewPost from '../components/NewPost.svelte';
</script>

<div class="container">
  <h1>Reddit Clone</h1>
  <NewPost />
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