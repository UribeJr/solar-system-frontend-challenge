    // Function to scroll to the next section
    function scrollToContent() {
        let target;
        if (event.target.classList.contains ('scroll-down-btn-overview')){
          target = 'planets';
        }
        else if (event.target.classList.contains ('scroll-down-btn-planets')){
            target = 'moons';
        }
        else {
          target = 'overview';
        }
          const nextSection = document.getElementById(target);
          nextSection.scrollIntoView({ behavior: 'smooth' });
      }
  
      // Add event listeners to all dropdown buttons
  const dropdowns = document.querySelectorAll('.dropdown-btn');
  const dropdowns_moons = document.querySelectorAll('.dropdown-btn-moons');
  const dropdowns_objects = document.querySelectorAll('.dropdown-btn-objects');
  
  dropdowns.forEach(button => {
    button.addEventListener('click', function () {
      // Find the associated planet info div
      const planetInfo = this.nextElementSibling;
  
      // Toggle visibility
      if (planetInfo.style.display === 'block') {
        planetInfo.style.display = 'none'; // Close if already open
      } else {
        planetInfo.style.display = 'block'; // Open if closed
      }
    });
  });
  
  dropdowns_moons.forEach(button => {
    button.addEventListener('click', function () {
      // Find the associated planet info div
      const moonsInfo = this.nextElementSibling;
  
      // Toggle visibility
      if (moonsInfo.style.display === 'block') {
        moonsInfo.style.display = 'none'; // Close if already open
      } else {
        moonsInfo.style.display = 'block'; // Open if closed
      }
    });
  });
  
  dropdowns_objects.forEach(button => {
    button.addEventListener('click', function () {
      // Find the associated planet info div
      const objectsInfo = this.nextElementSibling;
  
      // Toggle visibility
      if (objectsInfo.style.display === 'block') {
        objectsInfo.style.display = 'none'; // Close if already open
      } else {
        objectsInfo.style.display = 'block'; // Open if closed
      }
    });
  });
  