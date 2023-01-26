<script>
  import Header from '../components/Header.svelte';
  import PostList from '../components/PostList.svelte';
  import NewPost from '../components/NewPost.svelte';
</script>

<div class="container">
  <Header />
  <h1>Reddit Clone</h1>
  <h2>Today's Top Posts</h2>
  <PostList />
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