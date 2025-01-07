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
        {
          title: "Managed Chatbots & AI Solutions",
          bulletPoints: [
            "Installation & configuration of chatbots",
            "AI chatbot development with GPT-based APIs",
            "Monitoring & performance optimization",
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
        {
          title: "AI Chatbot Demo",
          image: "assets/images/chatbot-demo.png",
          description:
            "Proof of concept chatbot built using GPT for lead generation.",
          liveLink: "#",
          repoLink: "#",
        },
      ],
    };
  },
}).mount("#app");
