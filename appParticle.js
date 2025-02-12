// app.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentSection: "home",
      services: [
        {
          title: "WordPress Design & Development",
          bulletPoints: [
            "Theme customization & plugin integration",
            "Responsive layouts & performance optimization",
            "Hosting & domain management",
          ],
        },
        {
          title: "Full-Stack Web Development",
          bulletPoints: [
            "JavaScript (Vue.js), C#/.NET, SQL, Node.js",
            "API integration & database management",
            "Responsive design & cross-browser testing",
          ],
        },
        {
          title: "UX Research & Design",
          bulletPoints: [
            "User interviews, usability testing",
            "Wireframing & prototyping with Figma",
            "Accessibility & user-centric solutions",
          ],
        },
        {
          title: "Analytics & Data-Driven Insights",
          bulletPoints: [
            "Google Analytics setup & reporting",
            "Data visualization & KPI tracking",
            "Iterative improvements based on metrics",
          ],
        },
      ],
      projects: [
        {
          title: "Quixx",
          image: "assets/images/quixxScreenshot.jpg",
          shortDescription: "Real-time multiplayer online game",
          structure: "Full-Stack JavaScript with Vue.js and Node.js/Express.js",
          longDescription: `
            <p>Quixx is a real-time multiplayer online game that offers an engaging and interactive experience. Utilizing Vue.js for the frontend and Node.js/Express for the backend with WebSockets, Quixx ensures seamless gameplay and instant updates. Hosted on Netlify and Render, it demonstrates full-stack development capabilities and real-time communication.</p>
          `,
          previewImages: ["assets/images/quixxScreenshot.jpg"],
          currentImageIndex: 0,
          liveLink: "https://verdant-otter-7da637.netlify.app/",
          repoLinks: [
            {
              name: "Frontend",
              url: "https://github.com/pletourneau/quixxFront",
            },
            {
              name: "Backend",
              url: "https://github.com/pletourneau/quixxBack",
            },
          ],
          open: false,
          timeline: [
            {
              date: "November/December 2024",
              event: "Backend coding and game logic",
            },
            {
              date: "December 2024",
              event:
                "Front end designed with Vue and Tailwind CSS. Game is functional!",
            },
            {
              date: "January 2025",
              event:
                "Game testing. Render server is unreliable. Plan to change structure of game to add database",
            },
          ],
        },
        {
          title: "Custom WordPress Page/Theme",
          image: "assets/images/MDpreview.webp",
          shortDescription:
            "Custom WordPress theme development for client migration from Squarespace",
          structure: "Developed a custom child theme using WordPress and PHP",
          longDescription: `
            <p>Developed a custom child theme for a client transitioning from Squarespace to WordPress. Replicated the Squarespace design and translated it into the WordPress environment, ensuring consistency in style and functionality. Managed the migration of hosting and domain, and implemented a mobile-first responsive design to enhance user experience across all devices.</p>
          `,
          previewImages: [
            "assets/images/MDResponsive.webp",
            "assets/images/MDpreview.webp",
          ],
          currentImageIndex: 0,
          liveLink: "https://www.meganedoherty.com/",
          open: false,
        },
        {
          title:
            "Website Performance Optimization for GIVE International Volunteers",
          image: "assets/images/GIVE.jpg",
          shortDescription:
            "Optimized a WordPress website to significantly reduce load times and enhance user engagement.",
          structure: "WordPress with custom JavaScript optimizations",
          longDescription: `
            <p>
              <strong>Situation:</strong> GIVE International Volunteers' WordPress website was loading slowly...
            </p>
            <p>
              <strong>Task:</strong> Identify and implement strategies to reduce the website's load time...
            </p>
            <p>
              <strong>Action:</strong> Utilized Google Lighthouse and GA4 for performance audits...
            </p>
            <p>
              <strong>Result:</strong> Successfully reduced average load times...
            </p>
          `,
          previewImages: ["assets/images/GIVE.jpg"],
          currentImageIndex: 0,
          open: false,
        },
      ],
      isNavbarScrolled: false,
      isMobileMenuOpen: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    // Particles initialization (run once in mounted)
    initParticles() {
      particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          shape: {
            type: "polygon",
            polygon: { nb_sides: 6 },
            // If you want an image for ALL pages, you can do:
            // type: "image",
            // image: {
            //   src: "assets/images/dumbass.png",
            //   width: 100,
            //   height: 100
            // },
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 7,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "grab" },
            onclick: { enable: false, mode: "push" },
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    },

    handleScroll() {
      this.isNavbarScrolled = window.scrollY > 50;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    toggleAccordion(index) {
      this.projects.forEach((project, i) => {
        project.open = i === index ? !project.open : false;
      });
    },
    debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    prevImage(project) {
      if (project.currentImageIndex > 0) {
        project.currentImageIndex--;
      } else {
        project.currentImageIndex = project.previewImages.length - 1;
      }
    },
    nextImage(project) {
      if (project.currentImageIndex < project.previewImages.length - 1) {
        project.currentImageIndex++;
      } else {
        project.currentImageIndex = 0;
      }
    },
  },
  mounted() {
    // Initialize Particles once (the #particles-js div is never removed now)
    this.initParticles();

    // Debounced scroll event
    window.addEventListener("scroll", this.debounce(this.handleScroll, 20));
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 20));
  },
}).mount("#app");
