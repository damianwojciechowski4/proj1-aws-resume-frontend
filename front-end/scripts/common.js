document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');
  
    if (btn && sidebar) {
      btn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        document.body.classList.toggle('sidebar-open');
      });
  
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
          sidebar.classList.remove('open');
          document.body.classList.remove('sidebar-open');
        }
      });
  
      document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('open');
          document.body.classList.remove('sidebar-open');
        });
      });
    }
  });