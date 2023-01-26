<script>
  export let post;
</script>

<div class="post">
  <h2>Title: {post.title}</h2>
  <p>Content: {post.body}</p>
  <p>User ID: {post.userId}</p>
  <p>Post ID: {post.id}</p>
</div>

<style>
  .post {
    border: 1px solid gray;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>