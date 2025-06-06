fetch('blog-data.json')
  .then(response => response.json())
  .then(data => {
    // Sort by newest first
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById('blog-container');
    data.forEach(post => {
      const blog = document.createElement('a'); // make it a clickable block
      blog.href = `blog/${post.slug}.html`;
      blog.className = 'blog-post';

      blog.innerHTML = `
        <h2>${post.title}</h2>
        <p><em>${post.date}</em> | <strong>${post.category || "General"}</strong></p>
        <p>${post.preview}</p>
      `;
      container.appendChild(blog);
    });
  });
