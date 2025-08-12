# Astro Minimal - GitHub Copilot Instructions

## Project Overview
Astro Minimal is an open source blog template designed and developed using **Astro** and the **Bulma CSS framework**. This project was created by DomeT99 (Domenico Tenace) as a standard, reusable foundation for blog websites with a focus on simplicity and minimalism.

**Repository**: https://github.com/DomeT99/astro-minimal
**Demo**: https://demo-astro-minimal.netlify.app

## Core Technologies & Stack

### Primary Framework
- **Astro** - Modern static site generator for building fast websites
- **Bulma CSS** - Modern CSS framework based on Flexbox for responsive design

### Key Dependencies & Integrations
- **Orama** - Full-text search engine integration
- **Markdown** - Content management for blog posts
- **TypeScript/JavaScript** - Programming languages used

## Architecture & Design Principles

### Design Philosophy
- **Minimalism First**: Extremely minimal design focused on content and readability
- **SEO Friendly**: 100% optimized for search engines
- **Performance Oriented**: Fast loading and optimized for modern web standards
- **Accessibility**: Designed to be accessible across all devices and users

### Key Features to Maintain
1. **Light/Dark Mode Toggle** - User preference theme switching
2. **Markdown Support** - Blog posts written in Markdown format
3. **100% Responsive Design** - Mobile-first approach using Bulma's responsive grid
4. **Full-Text Search** - Integrated search functionality using Orama
5. **i18n Support** - Internationalization features (not for .md files currently)

## Development Guidelines

### Code Style & Conventions
- Follow Astro's component-based architecture
- Use Bulma CSS classes for styling - avoid custom CSS when possible
- Maintain TypeScript strict mode where applicable
- Write semantic HTML for accessibility
- Use Astro's built-in optimization features

### File Organization
- Follow Astro's standard project structure
- Separate components, layouts, and pages logically
- Keep blog posts in markdown format in appropriate directories
- Maintain clean separation between content and presentation

### Component Development
- Create reusable Astro components for common UI elements
- Use Astro's component props and slots effectively
- Implement proper TypeScript interfaces for component props
- Ensure all components are responsive and follow the minimal design language

### Styling Guidelines
- Primarily use Bulma CSS utility classes
- Maintain consistency with the minimal design aesthetic
- Ensure proper contrast ratios for light/dark mode
- Follow mobile-first responsive design principles
- Use CSS custom properties for theme variables

## Search Functionality
- Integrate with Orama for full-text search capabilities
- Ensure search indexes are properly built and updated
- Maintain search performance and relevance
- Provide user-friendly search interface

## Content Management
- Support Markdown content with proper frontmatter
- Implement proper meta tags and SEO optimization
- Ensure content is accessible and semantic
- Support for categories, tags, and content organization

## Performance Considerations
- Leverage Astro's static site generation capabilities
- Optimize images and assets
- Minimize JavaScript bundle size
- Implement proper caching strategies
- Use Astro's built-in performance optimizations

## Accessibility Standards
- Follow WCAG guidelines
- Ensure proper semantic markup
- Provide appropriate ARIA labels
- Maintain keyboard navigation support
- Test with screen readers

## Theme System
- Implement robust light/dark mode switching
- Use CSS custom properties for theme variables
- Ensure theme persistence across sessions
- Maintain proper contrast ratios in both modes

## Internationalization (i18n)
- Support multiple languages where applicable
- Maintain proper locale-specific formatting
- Consider RTL language support if needed
- Note: Currently limited support for markdown files

## Testing & Quality Assurance
- Test across different devices and screen sizes
- Verify theme switching functionality
- Validate search functionality
- Check SEO optimization and meta tags
- Ensure accessibility compliance

## Contributing Guidelines
- Follow the project's CONTRIBUTING.md guidelines
- Maintain the minimal design philosophy
- Test all changes thoroughly
- Document new features and changes
- Ensure backward compatibility when possible

## Deployment & Build
- Optimize for static site deployment
- Ensure build process is reliable and fast
- Configure proper environment variables
- Test production builds before deployment

## Common Patterns & Best Practices

### When creating new components:
- Keep them minimal and focused on single responsibility
- Use Bulma classes for consistent styling
- Ensure responsive design
- Include proper TypeScript types
- Test in both light and dark modes

### When adding new features:
- Align with the minimal design philosophy
- Consider performance impact
- Ensure accessibility compliance
- Update documentation as needed
- Test across different devices

### When modifying existing functionality:
- Maintain backward compatibility
- Preserve the minimal aesthetic
- Test thoroughly in both themes
- Consider SEO implications
- Update any relevant documentation

## Notes for AI Assistant
- Focus on simplicity and minimalism in all suggestions
- Prioritize Bulma CSS classes over custom styling
- Maintain consistency with existing codebase patterns
- Consider performance and accessibility in all recommendations
- Respect the open-source nature and contributor guidelines of the project