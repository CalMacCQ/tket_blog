<script>
(async () => {
  const res = await fetch(
    "https://api.github.com/repos/calmacCQ/tket_blog/contents/blog1_intro_to_qc.html"
  );
  const data = await res.json();
  document.querySelector("iframe").src = `data:text/html;base64,${data["content"]}`;
})();
</script>