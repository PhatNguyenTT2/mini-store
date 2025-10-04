# Admin Components Structure

This directory contains all reusable components for the admin panel, organized following a standardized structure pattern.

## Organization Pattern

Each major component follows this structure:

```
ComponentName/
  ├── ComponentName.jsx       # Main component file
  ├── index.js               # Export file for clean imports
  ├── sections/              # Sub-components folder
  │   ├── SectionName/
  │   │   ├── SectionName.jsx
  │   │   └── index.js
  │   └── ...
  └── README.md (optional)   # Component documentation
```

## Components Overview

### Header
Main header bar with search, notifications, and actions.

**Sections:**
- `SearchNotificationSection` - Search bar, notification bell, and cart icons
- `ActionSection` - Action buttons (e.g., Add Product)

**Usage:**
```jsx
import { Header } from '../components/Header';

<Header />
```

### Sidebar
Navigation sidebar with logo, user profile, and menu items.

**Sections:**
- `LogoSection` - Company logo
- `UserProfileSection` - User avatar and info
- `NavigationMenuSection` - Navigation menu items grouped by category

**Usage:**
```jsx
import { Sidebar } from '../components/Sidebar';

<Sidebar />
```

### Footer
Footer with copyright and useful links.

**Sections:**
- `CopyrightSection` - Copyright text and credits
- `LinksSection` - Footer navigation links

**Usage:**
```jsx
import { Footer } from '../components/Footer';

<Footer />
```

### Layout
Main layout wrapper that combines Sidebar, Header, Footer, and content area.

**Sections:**
- `SidebarSection` - Wrapper for sidebar component
- `MainContentSection` - Main content area with Header and Footer

**Usage:**
```jsx
import { Layout } from '../components/Layout';

<Layout>
  <YourPageContent />
</Layout>
```

### SalesChart
Sales chart display component (previously in HomePageAdmin).

**Usage:**
```jsx
import { SalesChart } from '../components/SalesChart';

<SalesChart />
```

## Benefits of This Structure

1. **Modularity**: Each component is self-contained with its sub-components
2. **Reusability**: Components can be easily imported and reused
3. **Maintainability**: Clear separation of concerns makes updates easier
4. **Scalability**: Easy to add new sections or components
5. **Consistency**: Follows the same pattern as the client (mart) project
6. **Clean Imports**: Use named exports for better IDE support

## Migration Notes

Old structure files have been refactored:
- `HeaderAdmin/HeaderAdmin.jsx` → `Header/Header.jsx` with sections
- `Sidebar/Sidebar.jsx` → Split into multiple section components
- `FooterAdmin/FooterAdmin.jsx` → `Footer/Footer.jsx` with sections
- `HomePageAdmin/SalesChart.jsx` → `SalesChart/SalesChart.jsx`
- `Layout/LayoutAdmin.jsx` → `Layout/Layout.jsx` with sections

## Adding New Components

When adding a new component, follow this pattern:

1. Create component folder: `components/NewComponent/`
2. Create main file: `NewComponent.jsx`
3. Create export file: `index.js`
4. If component is complex, create `sections/` folder with sub-components
5. Use named exports: `export const NewComponent = () => { ... }`
6. Export in index.js: `export { NewComponent } from "./NewComponent";`

## Example Component Template

```jsx
// ComponentName.jsx
import React from 'react';
import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';

export const ComponentName = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

// index.js
export { ComponentName } from "./ComponentName";
```
