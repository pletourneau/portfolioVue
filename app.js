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
          previewImages: [
            "assets/images/quixxScreenshot1.jpg",
            "assets/images/quixxScreenshot2.jpg",
            "assets/images/quixxScreenshot3.jpg",
          ],
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
              <strong>Situation:</strong> GIVE International Volunteers' WordPress website was loading slowly, averaging over 5 seconds per page. This sluggish performance was negatively impacting user experience, leading to high bounce rates and decreased user engagement, especially among mobile users.
            </p>
            <p>
              <strong>Task:</strong> Identify and implement strategies to reduce the website's load time to enhance user engagement and improve overall performance metrics.
            </p>
            <p>
              <strong>Action:</strong> Utilized Google Lighthouse and GA4 for performance audits, optimized video file sizes, implemented video facades with custom JavaScript to defer video loading, focused on mobile performance enhancements, and targeted optimizations on landing and home pages.
            </p>
            <p>
              <strong>Result:</strong> Successfully reduced average load times from 5 seconds to under 2 seconds, increased page views by 25%, boosted user engagement by 20%, and decreased mobile bounce rates by 15%.
            </p>
          `,
          previewImages: [
            "assets/images/GIVE.jpg",
            // "assets/images/give-international-volunteers-preview2.jpg",
          ],
          currentImageIndex: 0,
          // liveLink and repoLinks are omitted as per your earlier request
          open: false,
        },
        // {
        //   title: "UX Redesign Case Study",
        //   image: "assets/images/ux-case-study.png",
        //   shortDescription: "UX redesign for non-profit",
        //   structure: "Conducted user research and prototyping",
        //   longDescription: `
        //     <p>Led a UX redesign for a non-profit organization, conducting user interviews and usability testing. Created wireframes and prototypes using Figma, resulting in enhanced accessibility and user experience across their platform.</p>
        //   `,
        //   previewImages: [
        //     "assets/images/ux-preview1.png",
        //     "assets/images/ux-preview2.png",
        //     "assets/images/ux-preview3.png",
        //   ],
        //   currentImageIndex: 0,
        //   liveLink: "#",
        //   repoLinks: [
        //     {
        //       name: "Repository",
        //       url: "https://github.com/pletourneau/uxRedesign",
        //     },
        //   ],
        //   open: false,
        // },
      ],
      isNavbarScrolled: false,
      isMobileMenuOpen: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    handleScroll() {
      // Toggle navbar shadow based on scroll position
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
    // New Methods for Image Navigation
    prevImage(project) {
      if (project.currentImageIndex > 0) {
        project.currentImageIndex--;
      } else {
        // If at the first image, loop to the last image
        project.currentImageIndex = project.previewImages.length - 1;
      }
    },
    nextImage(project) {
      if (project.currentImageIndex < project.previewImages.length - 1) {
        project.currentImageIndex++;
      } else {
        // If at the last image, loop back to the first image
        project.currentImageIndex = 0;
      }
    },
  },
  mounted() {
    // Debounced scroll event listener for performance
    window.addEventListener("scroll", this.debounce(this.handleScroll, 20));
    this.handleScroll(); // Initialize on mount
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 20));
  },
}).mount("#app");
