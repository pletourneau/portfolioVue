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
          title: "WordPress Volunteer Project",
          image: "assets/images/wordpress-project.png",
          description:
            "A WordPress site built for MN350 featuring custom theme updates.",
          liveLink: "#",
          repoLink: "#",
        },
        {
          title: "UX Redesign Case Study",
          image: "assets/images/ux-case-study.png",
          description:
            "User research and a redesigned interface for a non-profit registration flow.",
          liveLink: "#",
          repoLink: "#",
        },
      ],
      isDarkMode: false,
      isNavbarScrolled: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    handleScroll() {
      if (window.scrollY > 50) {
        this.isNavbarScrolled = true;
      } else {
        this.isNavbarScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // Initialize dark mode based on user's preference or system settings
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.isDarkMode = true;
      document.documentElement.classList.add("dark");
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}).mount("#app");
