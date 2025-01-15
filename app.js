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
          shortDescription: "Online game",
          structure: "Made with a MERN stack",
          longDescription: `
            <p>This is a placeholder for the long description of the Quixx project. It includes details about the project's objectives, features, and the development process.</p>
            <ul>
              <li>Implemented user authentication and real-time gameplay.</li>
              <li>Designed responsive UI for seamless experience across devices.</li>
              <li>Optimized performance to handle multiple concurrent users.</li>
            </ul>
          `,
          previewImage: "assets/images/quixxScreenshot.jpg",
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
          title: "WordPress Volunteer Project",
          image: "assets/images/wordpress-project.png",
          shortDescription: "WordPress site development",
          structure: "Built using WordPress and custom PHP",
          longDescription: `
            <p>This is a placeholder for the long description of the WordPress Volunteer Project. It covers the project's goals, implementation strategies, and outcomes.</p>
            <ul>
              <li>Customized themes to match the client's branding.</li>
              <li>Integrated essential plugins for enhanced functionality.</li>
              <li>Ensured SEO optimization and mobile responsiveness.</li>
            </ul>
          `,
          previewImage: "assets/images/wordpress-preview.png", // Placeholder image
          liveLink: "#",
          repoLinks: [
            {
              name: "Repository",
              url: "https://github.com/pletourneau/wordpressVolunteer",
            },
          ],
          open: false,
        },
        {
          title: "UX Redesign Case Study",
          image: "assets/images/ux-case-study.png",
          shortDescription: "UX redesign for non-profit",
          structure: "Conducted user research and prototyping",
          longDescription: `
            <p>This is a placeholder for the long description of the UX Redesign Case Study. It highlights the research methods, design decisions, and the impact of the redesign.</p>
            <ul>
              <li>Performed user interviews to gather insights.</li>
              <li>Created wireframes and prototypes using Figma.</li>
              <li>Enhanced accessibility and user experience across the platform.</li>
            </ul>
          `,
          previewImage: "assets/images/ux-preview.png", // Placeholder image
          liveLink: "#",
          repoLinks: [
            {
              name: "Repository",
              url: "https://github.com/pletourneau/uxRedesign",
            },
          ],
          open: false,
        },
      ],
      isNavbarScrolled: false,
      isMobileMenuOpen: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    handleScroll() {
      // Handle navbar shadow
      if (window.scrollY > 50) {
        this.isNavbarScrolled = true;
      } else {
        this.isNavbarScrolled = false;
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    toggleAccordion(index) {
      this.projects.forEach((project, i) => {
        if (i === index) {
          project.open = !project.open;
        } else {
          project.open = false;
        }
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
  },
  mounted() {
    // Debounce the scroll handler for performance
    window.addEventListener("scroll", this.debounce(this.handleScroll, 20));
    this.handleScroll(); // Initialize on mount
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 20));
  },
}).mount("#app");
