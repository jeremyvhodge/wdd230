// Defines a function named lazyLoadImages
function lazyLoadImages() {
    // Retrieves all <img> elements that have a 'data-src' attribute
    const images = document.querySelectorAll('img[data-src]');
  
    // Defines options for the intersection observer
    const observerOptions = {
      root: null, // Sets the root element to be the viewport
      rootMargin: '-10%', // No margin added to the root element
      threshold: 0.1 // Considers an image intersecting when 10% or more of it is visible
    };

    // Creates a new IntersectionObserver object
    const imageObserver = new IntersectionObserver((entries, observer) => {
    // Iterates over each entry
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Retrieves the image element from the entry
            const image = entry.target;
          // Retrieves the value of the 'data-src' attribute
            const src = image.getAttribute('data-src');
          // Replaces the 'data-src' attribute with 'src' to load the image
            image.setAttribute('src', src);

            image.style.filter = 'blur(0)'; // Removes the blur filter

          // Logs a message indicating that the image is now in view
            console.log(`Image ${image.alt} is now in view!`);
          // Stops observing the image once it's loaded
            imageObserver.unobserve(image);
        }
      });
    }, observerOptions);
    // Observes each image element
    images.forEach(image => {
      imageObserver.observe(image);
    });
  } 
  
  // Calls the lazyLoadImages function when the page has finished loading
  window.addEventListener('load', lazyLoadImages);

