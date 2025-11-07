import "../Assets/Styling/Projects.css";

import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import pdf from "../Assets/Images/Ramey Resume.pdf";

const Projects = () => {
  const projects = [
    {
      title: "Kafka Performance Optimization & Multi-Region Architecture",
      company: "WEX",
      period: "2024-2025",
      description:
        "Led comprehensive error analysis and performance tuning of enterprise Kafka infrastructure. Authored technical documentation analyzing recovery time and error patterns under various configurations. Implemented static consumer group membership, optimized session timeouts, and tuned max poll intervals, reducing recovery time from baseline 45+ seconds to under 10 seconds. Architected active-active multi-region setup using MirrorMaker2 with atomic database-backed idempotency.",
      tech: [
        "Kafka",
        "Python",
        "MirrorMaker2",
        "AWS",
        "Performance Analysis",
        "Technical Writing",
      ],
      highlights: [
        "Doubled consumer processing time",
        "Reduced consumer recovery time by 78%",
        "Exactly-once processing semantics with idempotency",
        "Comprehensive test scenarios with data visualization",
        "Zero data loss during regional failover",
      ],
    },
    {
      title: "Enterprise API Deployment Manager - Angular to React Migration",
      company: "WEX",
      period: "2021",
      description:
        "Authored complete technical design document and led full rewrite of mission-critical deployment tool from Angular 6/9 to React/TypeScript. Tool manages systematic protection for development and production deployments with Okta SSO integration, request/approval workflows, and scheduling capabilities. Resolved chronic maintenance issues, enabled Sentry integration, and aligned with team&apos;s directional tech stack.",
      tech: [
        "React",
        "TypeScript",
        "Docker",
        "Okta SSO",
        "GitHub Actions",
        "Sentry",
        "Technical Architecture",
      ],
      highlights: [
        "Authored comprehensive design document with milestones",
        "User authentication with Okta SSO",
        "Request, schedule, and approve deployment workflows",
        "Deployment history with pagination and sorting",
      ],
    },
    {
      title: "Premium Puppy Profile System - Full Design & Implementation",
      company: "Freelance - Todos Translator",
      period: "2024-2025",
      description:
        "Analyzed 5 premium competitors. Designed and implemented sophisticated 7-component React system: PuppyHero with navigation pills, TrainingDetails with progress tracking, PersonalityProfile with radar charts, MediaGallery with lazy loading, InvestmentBreakdown with transparent pricing, TestimonialSection, and TrustBadges. Created premium design system with navy/gold/copper color palette justifying $6K-$15K pricing.",
      tech: [
        "React",
        "Django",
        "Python",
        "AWS S3",
        "PostgreSQL",
        "System Architecture",
        "UX Design",
      ],
      highlights: [
        "Complete technical architecture document",
        "7 modular components with responsive design",
        "Data visualization with personality radar charts",
        "Conversion-optimized user journey design",
      ],
      links: [
        { text: "BATP Site", url: "https://www.buyatrainedpuppy.com" },
        { text: "Main Site", url: "https://www.todostranslator.com" },
      ],
    },
    {
      title: "Enterprise Notification Platform",
      company: "WEX",
      period: "2021-Present",
      description:
        "Drove front-end development for a Centralized Enterprise Service Management UI, providing unified application to manage five notification types (email, webhook, SMS, push, fax). Implemented role-based access control and data segregation.",
      tech: [
        "React",
        "TypeScript",
        "Material UI",
        "Python",
        "C#",
        "Microservices",
      ],
      highlights: [
        "95%+ test coverage",
        "5 notification channels unified",
        "Granular RBAC implementation",
      ],
    },
    {
      title: "Full-Stack Infrastructure Modernization & Cost Optimization",
      company: "Freelance - Todos Translator",
      period: "2024-2025",
      description:
        "Complete backend-to-frontend modernization: converted static React puppy website to dynamic Django backend with CMS-style admin interface. Migrated 108 puppy images from hardcoded arrays to PostgreSQL with S3 storage. Implemented django-imagekit for WebP optimization improving page load by 40%. Migrated from SendGrid to AWS SES achieving 99% cost reduction. Created custom management commands for bulk image processing and S3 uploads.",
      tech: [
        "Django",
        "React",
        "PostgreSQL",
        "AWS S3",
        "AWS SES",
        "Heroku",
        "WebP",
        "Image Optimization",
      ],
      highlights: [
        "Dynamic CMS replacing hardcoded content",
        "108 images migrated with organized processing",
        "99% email cost reduction ($0.10 per 1,000 emails)",
        "Multi-image carousel support with optimization",
      ],
      links: [
        { text: "BATP Site", url: "https://www.buyatrainedpuppy.com" },
        { text: "Main Site", url: "https://www.todostranslator.com" },
      ],
    },
    {
      title: "Component Library Architecture & Shared Design System",
      company: "Freelance - Todos Translator",
      period: "2025",
      description:
        "Architected shared component library strategy to eliminate code duplication between two React frontends (BATP and main site). Designed rollup.js build configuration for npm package distribution. Identified common components (OptimizedImage, VideoPlayer, stores) for extraction into reusable library with proper versioning workflow.",
      tech: [
        "React",
        "Rollup.js",
        "npm",
        "Component Architecture",
        "Design Systems",
      ],
      highlights: [
        "Eliminated duplicate code across 2 frontends",
        "Rollup.js build configuration for library distribution",
        "Shared stores and utility functions",
        "Established component versioning strategy",
      ],
    },
    {
      title: "CI/CD & Testing Excellence",
      company: "WEX",
      period: "2021-Present",
      description:
        "Implemented comprehensive end-to-end regression testing pipelines using GitHub Actions and Azure DevOps across Dev, Stage, and Production environments. Maintained strict 95%+ code coverage requirement across all microservices. Established automated testing standards that resulted in zero production incidents from testing gaps.",
      tech: [
        "GitHub Actions",
        "Azure DevOps",
        "Python",
        "pytest",
        "BDD",
        "Selenium",
      ],
      highlights: [
        "95%+ code coverage maintained across services",
        "Zero production incidents from testing gaps",
        "Reduced QA cycle time by 50%",
        "Automated cross-environment validation",
      ],
    },
  ];

  return (
    <Container className="projects-container py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-white mb-3">Projects & Achievements</h2>
          <p className="text-black-100">
            A showcase of my technical work spanning distributed systems,
            full-stack development, and infrastructure modernization.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} lg={6}>
            <Card className="h-100 project-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="mb-0">{project.title}</Card.Title>
                </div>
                <Card.Subtitle className="mb-3 text-muted">
                  {project.company} • {project.period}
                </Card.Subtitle>
                <Card.Text className="mb-3">{project.description}</Card.Text>

                <div className="mb-3">
                  <strong className="d-block mb-2">Key Highlights:</strong>
                  <ul className="small mb-0">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-1">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} bg="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.links && (
                  <div className="mt-3">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-primary me-2"
                      >
                        {link.text}{" "}
                        <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Contact CTA Section */}
      <Row className="mt-5 pt-5">
        <Col>
          <Card className="bg-dark text-white text-center p-5">
            <Card.Body>
              <h3 className="mb-3">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="lead mb-4">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or ways I can contribute to your
                team&apos;s success.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Button
                  href="mailto:meagan.ramey@yahoo.com"
                  variant="light"
                  size="lg"
                  className="px-4"
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Get In Touch
                </Button>
                <Button
                  href="https://www.linkedin.com/in/meagan-ramey/"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-light"
                  size="lg"
                  className="px-4"
                >
                  <i className="bi bi-linkedin me-2"></i>
                  Connect
                </Button>
                <Button
                  href={pdf}
                  download="Meagan_Ramey_Resume.pdf"
                  variant="outline-light"
                  size="lg"
                  className="px-4"
                >
                  <i className="bi bi-download me-2"></i>
                  Resume
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
