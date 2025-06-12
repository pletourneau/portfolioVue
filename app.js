const { createApp } = Vue;

createApp({
  data() {
    return {
      isNavbarScrolled: false,
      isMobileMenuOpen: false,
      currentYear: new Date().getFullYear(),
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
            <p>Quixx is a real-time multiplayer online game that offers an engaging experience. Utilizing Vue.js for the frontend and Node.js/Express for the backend with WebSockets, Quixx ensures seamless gameplay. Hosted on Netlify and Render, it demonstrates full-stack development capabilities and real-time communication.</p>
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
                "Testing. Render server is unreliable. Plan to add a database.",
            },
            {
              date: "June 2025",
              event:
                "Still playing weekly. Calling it user testing for now instead of procrastination.",
            },
          ],
        },
        {
          title: "Custom WordPress Page/Theme",
          image: "assets/images/MDpreview.webp",
          shortDescription: "Theme development for migration from Squarespace",
          structure: "Custom child theme using WordPress and PHP",
          longDescription: `
            <p>Developed a custom child theme for a client transitioning from Squarespace to WordPress. Ensured consistent style and functionality, managed hosting and domain migration, and implemented a mobile-first responsive design.</p>
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
          title: "Website Performance Optimization for GIVE",
          image: "assets/images/GIVE.jpg",
          shortDescription: "Reduced load times and enhanced user engagement.",
          structure: "WordPress with custom JavaScript optimizations",
          longDescription: `
            <p><strong>Situation:</strong> GIVE International Volunteers' WordPress site was loading slowly, averaging over 5s/page. This hurt user engagement, particularly on mobile.</p>
            <p><strong>Task:</strong> Identify and implement strategies to reduce load time and improve performance metrics.</p>
            <p><strong>Action:</strong> Used Google Lighthouse & GA4 for audits, optimized video file sizes with custom JavaScript loading deferral, and focused on mobile performance enhancements.</p>
            <p><strong>Result:</strong> Load times dropped under 2s, page views increased by 25%, user engagement up 20%, and mobile bounce rates down 15%.</p>
          `,
          previewImages: ["assets/images/GIVE.jpg"],
          currentImageIndex: 0,
          open: false,
        },
        {
          title: "Bibliocommons Online/In-person Events Hack",
          image: "assets/images/BC.jpg",
          shortDescription:
            "Easy solution to feature 'in-person' BiblioCommons events in modules",
          longDescription: `
            <p>When featuring an events list on BiblioCommons it is easy to make a list of online only events. Biblio made a checkbox for that! What if I want to feature only 'in-person' events though? There is no check box for this, so if I copy/paste a url into one of their modules my options are: display all events, or display online events.</p>
            <p>In coding, an exclamation point is called a 'bang operator'. If placed before a statement, it negates it. So '!coolBro' translates to 'notCoolBro'.</p>
            <p><strong>Hack:</strong> To get an events module to display only 'in-person' events, start by selecting any other options for the event (location, audience, event type, etc) and also select 'online events'. Copy and paste the URL in the module, but make one small addition. At the end of the URL should be 'locations=BC_VIRTUAL'. This is where you add the bang operator so it will now read 'locations=!BC_VIRTUAL' (did you even notice the difference? LOOK AGAIN!). Your event feed shows only in person events.</p>
            <p><strong>Huzzah!</strong></p>
          `,
          previewImages: ["assets/images/!cool.webp"],
          currentImageIndex: 0,
          open: false,
        },
      ],
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
    debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = () => {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    toggleAccordion(index) {
      // Expand/collapse only one project at a time
      this.projects.forEach((project, i) => {
        project.open = i === index ? !project.open : false;
      });
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
    // Debounced scroll event listener for performance
    window.addEventListener("scroll", this.debounce(this.handleScroll, 20));
    this.handleScroll(); // Initialize on mount
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 20));
  },
}).mount("#app");
