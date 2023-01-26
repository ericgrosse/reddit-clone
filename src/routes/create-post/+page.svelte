<script>
  import Header from "../../components/Header.svelte";
  import NewPost from "../../components/NewPost.svelte";
</script>

<div class="container create-post">
  <Header />
  <h1>Create Post</h1>
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