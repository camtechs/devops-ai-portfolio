
const projects = [
  {
    title: "Secure AWS Infrastructure",
    description:
      "A reusable AWS infrastructure deployment with Terraform, CI/CD and security controls.",
    tools: ["AWS", "Terraform", "GitHub Actions"],
    github: "https://github.com/camtechs/secure-aws-platform"
  },
  {
    title: "AI Incident Assistant",
    description:
      "An AI application that analyses sample incident logs and suggests investigation steps.",
    tools: ["Python", "LLM", "Streamlit"],
    github: "https://github.com/camtechs/ai-incident-assistant"
  },
  {
    title: "Cloud Cost Analyser",
    description:
      "A Python tool that identifies cloud cost anomalies and generates recommendations.",
    tools: ["AWS", "Python", "FinOps"],
    github: "https://github.com/camtechs/cloud-cost-analyser"
  }
];

// Add projects here only after completing them.
const completedProjects = [];

const grid = document.getElementById("project-grid");

if (completedProjects.length === 0) {
  const message = document.createElement("p");
  message.className = "muted";
  message.textContent = "Projects and case studies coming soon.";
  grid.appendChild(message);
}

completedProjects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "tags";
  tags.textContent = project.tools.join(" · ");

  const link = document.createElement("a");
  link.href = project.github;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "View GitHub Project";

  card.append(title, description, tags, link);
  grid.appendChild(card);
});

