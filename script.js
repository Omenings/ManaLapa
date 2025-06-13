document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Novērš pārlādēšanu
  alert("Paldies par ziņu! Es ar tevi sazināšos.");
});
<script>
  const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
    }
  });

  // Load saved preference
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    }
  });
</script>

