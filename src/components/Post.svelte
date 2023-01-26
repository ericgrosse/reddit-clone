<script>
  export let post;
</script>

<div class="post">
  <h2>{post.title}</h2>
  <h3>Written by {post.author}</h3>
  <p>{post.body}</p>
</div>

<style>
  .post {
    border: 1px solid gray;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>