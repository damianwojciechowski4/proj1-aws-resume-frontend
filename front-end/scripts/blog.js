const posts = [
    {
      type: 'cloud',
      title: 'AWS EC2 Instance Scheduler',
      img: 'images/aws-icon.png',
      //excerpt: 'Automatically terminate old EC2 instances using Boto3...',
      link: 'https://medium.com/@damianwojciechowski04/building-a-poc-with-aws-instance-scheduler-automate-your-dev-instances-management-with-terraform-2cb991d3d9ff'
    }
  ];
/*
    {
      type: 'networking',
      title: 'Deep Dive: AWS Transit Gateway',
      img: 'images/blog-tgw.png',
      excerpt: 'How to architect your network with Transit Gateway for scale...',
      link: 'blog/tgw-deep-dive.html'
    },
    {
      type: 'devOps',
      title: 'CI/CD Pipelines with GitHub Actions',
      img: 'images/blog-gha.png',
      excerpt: 'Building, testing, and deploying with GitHub Actions workflows...',
      link: 'blog/github-actions.html'
    },

*/
  
const gallery = document.getElementById('blog-gallery');
const tabs    = document.querySelectorAll('.filters .tab');

function renderPosts(filter) {
  gallery.innerHTML = '';
  const filtered = filter === 'all'
    ? posts
    : posts.filter(p => p.type === filter);
  filtered.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';

    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = post.type.charAt(0).toUpperCase()+post.type.slice(1);

    const img = document.createElement('img');
    img.src = post.img;
    img.alt = post.title;

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const ex = document.createElement('p');
    ex.className = 'excerpt';
    ex.textContent = post.excerpt;

    const btn = document.createElement('a');
    btn.href = post.link;
    btn.className = 'btn';
    btn.textContent = 'Read';
    btn.target = '_blank';

    card.append(label, img, h3, ex, btn);
    gallery.append(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPosts(tab.dataset.filter);
  });
});

// On load, show all posts:
renderPosts('all');