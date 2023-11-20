const carouselImages = [
  "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666353535582-9268ce1a981c?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584531482079-af3f1a796744?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1689344315074-cacf97d7e592?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Anytown, USA",
    profilePicture: "https://i.pravatar.cc/150?u=1",
    testimonials: [
      {
        id: 101,
        text: "I recently purchased a fantastic product from this e-commerce site. The quality exceeded my expectations, and the delivery was super fast. I'm a happy customer and will definitely shop here again!",
        timestamp: "2023-11-20T10:30:00Z",
      },
      {
        id: 102,
        text: "Great experience shopping here! The customer service was excellent, and the product I ordered is exactly what I was looking for. Highly recommend this e-commerce platform.",
        timestamp: "2023-11-19T15:45:00Z",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Avenue, Anothercity, USA",
    profilePicture: "https://i.pravatar.cc/150?u=2",
    testimonials: [
      {
        id: 201,
        text: "I've been a loyal customer for years, and the quality of products and service has never disappointed me. This e-commerce site is my go-to for all my shopping needs.",
        timestamp: "2023-11-18T08:15:00Z",
      },
      {
        id: 202,
        text: "The variety of products available here is impressive. The website is easy to navigate, and the checkout process is smooth. Two thumbs up!",
        timestamp: "2023-11-17T11:00:00Z",
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+1 (555) 567-8901",
    address: "789 Pine Street, Yetanothercity, USA",
    profilePicture: "https://i.pravatar.cc/150?u=3",
    testimonials: [
      {
        id: 301,
        text: "I am impressed with the speed of delivery. My order arrived earlier than expected, and the product quality is top-notch. Will recommend to friends!",
        timestamp: "2023-11-16T14:20:00Z",
      },
      {
        id: 302,
        text: "The customer support team was very helpful when I had a question about my order. Their responsiveness made my shopping experience pleasant.",
        timestamp: "2023-11-15T09:45:00Z",
      },
    ],
  },
];
function manageCarousel() {
  let currentImageIndex = 0;
  // Get the images from the array and add them to the DOM
  function getAndAddImagesToDOM() {
    for (let i = 0; i < carouselImages.length; i++) {
      let imgElement = document.createElement("img");
      imgElement.src = carouselImages[i];
      imgElement.className = "carousel__image";
      document.querySelector("#carousel_section").appendChild(imgElement);
      if (currentImageIndex === i) {
        imgElement.classList.add("active");
      }
    }
  }
  getAndAddImagesToDOM();

  setInterval(() => {
    const element = document.getElementById("carousel_section");
    element.style.transform = `translate(-${(currentImageIndex + 1) * 50}%)`;
    if (
      currentImageIndex == carouselImages.length - 2 ||
      currentImageIndex == carouselImages.length - 1
    ) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
  }, 3000);
}

function manageTestimonials() {
  testimonialsData.forEach((testimonial) => {
    const testimonials = document.getElementById("testimonials");
    const testimonialContainer = document.createElement("div");
    testimonialContainer.className = "testimonial_container";
    const profilePicture = document.createElement("img");
    const name = document.createElement("span");
    const testimonialData = document.createElement("p");

    profilePicture.src = testimonial.profilePicture;
    name.innerText = testimonial.name;
    testimonialData.innerText = testimonial.testimonials[0].text;

    testimonialContainer.appendChild(profilePicture);
    testimonialContainer.appendChild(name);
    testimonialContainer.appendChild(testimonialData);
    testimonials.appendChild(testimonialContainer);
  });
}

manageCarousel();
manageTestimonials();
