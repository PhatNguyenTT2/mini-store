# Development Principles

This document outlines the core principles for developing new pages and components in the Mini Store project.

## Component-Based Architecture

To maintain a clean, scalable, and maintainable codebase, we follow a principle of creating small, reusable components before assembling them into larger pages.

### Workflow for Creating a New Page:

1.  **Analyze the Design**: Break down the page design (e.g., from Figma) into logical, self-contained UI blocks. These will become your components.
2.  **Create Child Components**: For a new page (e.g., `NewPage.jsx`), create a corresponding folder in `src/components/` (e.g., `src/components/NewPage/`). Inside this folder, build each UI block as a separate React component (e.g., `ComponentA.jsx`, `ComponentB.jsx`).
3.  **Assemble the Page**: Create the main page file (e.g., `src/pages/NewPage.jsx`).
    *   This page should use the global `Layout.jsx` to ensure a consistent header and footer.
    *   Import the child components created in the previous step.
    *   Arrange the components to form the body of the page.
4.  **Add Routing**: Update the main router (in `src/main.jsx`) to include a path for the new page.

By following this principle, we ensure that our components are decoupled and our pages are simple, declarative assemblies of those components.
