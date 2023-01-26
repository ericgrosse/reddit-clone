<script>
  let title;
  let author;
  let body;

  function handleClick() {
    console.log(title);
    console.log(author);
    console.log(body);
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