document.addEventListener("DOMContentLoaded", () => {
  // Navigation buttons functionality
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  // Placeholder for image carousel functionality
  let currentSlide = 0
  const totalSlides = 3 // Assuming we have 3 slides

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateSlide()
  })

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides
    updateSlide()
  })

  function updateSlide() {
    // This would update the visible slide in a real implementation
    console.log("Current slide:", currentSlide)
    // In a real implementation, you would change the src of the image
    // or transform a container to show different slides
  }

  // Play button functionality
  const playButton = document.querySelector(".play-button")

  playButton.addEventListener("click", () => {
    // This would play a video in a real implementation
    alert("Video would play here")
  })

  // Arrow button functionality
  const arrowBtn = document.querySelector(".arrow-btn")

  arrowBtn.addEventListener("click", () => {
    // This would navigate to a properties page in a real implementation
    alert("Navigating to all properties page")
  })

  // Property filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      // In a real implementation, you would filter the properties based on the selected filter
      const filterType = btn.textContent.trim().toLowerCase()
      console.log("Filtering by:", filterType)
    })
  })


  // Add mobile menu functionality for responsive design
  const header = document.querySelector(".header-content")
  const nav = document.querySelector(".main-nav")

  if (window.innerWidth <= 768) {
    header.insertBefore(mobileMenuBtn, nav)
    nav.style.display = "none"

    mobileMenuBtn.addEventListener("click", () => {
      if (nav.style.display === "none") {
        nav.style.display = "block"
        nav.style.position = "absolute"
        nav.style.top = "80px"
        nav.style.left = "0"
        nav.style.width = "100%"
        nav.style.backgroundColor = "#0a1629"
        nav.style.padding = "20px"

        const ul = nav.querySelector("ul")
        ul.style.flexDirection = "column"
      } else {
        nav.style.display = "none"
      }
    })
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = newsletterForm.querySelector("input").value

      if (email) {
        alert(`Thank you for subscribing with: ${email}`)
        newsletterForm.reset()
      }
    })
  }

  // Remove the mobile hero search creation code
  const heroSection = document.querySelector(".hero-section")
  const heroContent = document.querySelector(".hero-content")

  // Handle mobile bottom menu
  const bottomMenuItems = document.querySelectorAll(".bottom-menu-item")

  bottomMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // Remove active class from all items
      bottomMenuItems.forEach((i) => i.classList.remove("active"))
      // Add active class to clicked item
      item.classList.add("active")
    })
  })

  // Remove window resize handler for mobile components
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      // Show mobile bottom menu
      document.querySelector(".mobile-bottom-menu").style.display = "flex"
    } else {
      // Hide mobile bottom menu
      document.querySelector(".mobile-bottom-menu").style.display = "none"
    }
  })
})

