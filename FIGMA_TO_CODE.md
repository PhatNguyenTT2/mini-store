# FIGMA TO CODE - Admin Panel Conversion Guide# Figma to Code Conversion Guide



## 🎨 Color Scheme Mapping## Project Structure Overview



### ⚠️ CRITICAL: Color Conversion RuleThis document outlines the standard structure and conventions for converting Figma designs into React code for this project.



**Figma designs sử dụng màu TÍM (Purple), nhưng project admin sử dụng màu XANH LÁ (Emerald)**---



Khi convert từ Figma sang code, **LUÔN LUÔN** thay đổi màu sắc theo bảng sau:## Table of Contents

1. [Project Architecture](#project-architecture)

| Figma Design (Purple) | Admin Code (Emerald) | Usage |2. [File Structure Standards](#file-structure-standards)

|----------------------|---------------------|-------|3. [Naming Conventions](#naming-conventions)

| `purple-50` | `emerald-50` | Background light, hover states |4. [Component Development Guidelines](#component-development-guidelines)

| `purple-100` | `emerald-100` | Background subtle |5. [Styling Guidelines](#styling-guidelines)

| `purple-200` | `emerald-200` | Borders, dividers |6. [Step-by-Step Conversion Process](#step-by-step-conversion-process)

| `purple-500` | `emerald-500` | Primary buttons, badges |7. [Best Practices](#best-practices)

| `purple-600` | `emerald-600` | Primary text, links, icons |8. [Common Patterns](#common-patterns)

| `purple-700` | `emerald-700` | Hover states, focus |

| `purple-800` | `emerald-800` | Active states |---

| `purple-900` | `emerald-900` | Dark text |

## Project Architecture

### Visual Color Mapping

### Core Files Structure

``````

FIGMA (Purple) → ADMIN (Emerald)src/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━├── main.jsx              # Entry point - DO NOT modify structure

├── App.jsx               # Root component - imports main screens

🟪 purple-50   →  🟩 emerald-50├── App.css               # App-level styles

🟪 purple-100  →  🟩 emerald-100├── index.css             # Global styles (Tailwind directives, resets)

🟪 purple-200  →  🟩 emerald-200├── assets/               # Static assets (images, icons, fonts)

🟪 purple-300  →  🟩 emerald-300├── screens/              # Main screen components

🟪 purple-400  →  🟩 emerald-400│   └── [ScreenName]/

🟪 purple-500  →  🟩 emerald-500  ← Primary│       ├── [ScreenName].jsx

🟪 purple-600  →  🟩 emerald-600  ← Most used│       ├── index.js

🟪 purple-700  →  🟩 emerald-700│       └── sections/     # Screen sections/sub-components

🟪 purple-800  →  🟩 emerald-800│           └── [SectionName]/

🟪 purple-900  →  🟩 emerald-900│               ├── [SectionName].jsx

```│               └── index.js

└── components/           # Reusable components (future)

### Example Conversions```



```jsx### Technology Stack

// ❌ WRONG (từ Figma - Purple)- **Framework**: React 18

className="bg-purple-600 text-white"- **Build Tool**: Vite

className="text-purple-600 hover:text-purple-700"- **Styling**: TailwindCSS + Custom CSS

className="border-purple-500"- **Utilities**: clsx, tailwind-merge

className="focus:ring-purple-500"

---

// ✅ CORRECT (cho Admin - Emerald)

className="bg-emerald-600 text-white"## File Structure Standards

className="text-emerald-600 hover:text-emerald-700"

className="border-emerald-500"### 1. Entry Point (`main.jsx`)

className="focus:ring-emerald-500"**Purpose**: Application bootstrap - renders the root App component

```

```jsx

## 📁 Project Structureimport { StrictMode } from "react";

import { createRoot } from "react-dom/client";

```import App from "./App.jsx";

admin/import "./index.css";

├── src/

│   ├── pages/              # Các trang/màn hình (Screen components)createRoot(document.getElementById("app")).render(

│   │   ├── Home.jsx        # Dashboard (/)  <StrictMode>

│   │   ├── ViewProduct.jsx # Product List (/product/view)    <App />

│   │   └── index.js        # Export tất cả pages  </StrictMode>,

│   ├── components/         # Components tái sử dụng);

│   │   ├── Layout/         # Layout wrapper```

│   │   │   ├── Layout.jsx

│   │   │   ├── index.js**Rules**:

│   │   │   └── sections/- ✅ DO: Keep this file minimal

│   │   │       ├── SidebarSection/- ❌ DON'T: Add business logic or additional imports

│   │   │       └── MainContentSection/

│   │   ├── Header/         # Header component---

│   │   │   ├── Header.jsx

│   │   │   ├── index.js### 2. Root Component (`App.jsx`)

│   │   │   └── sections/**Purpose**: Main application component that orchestrates screens

│   │   ├── Sidebar/        # Sidebar navigation

│   │   │   ├── Sidebar.jsx```jsx

│   │   │   ├── index.jsimport { Header } from "./screens/Header";

│   │   │   └── sections/import "./App.css";

│   │   ├── Footer/         # Footer component

│   │   ├── Breadcrumb/     # Breadcrumb navigationfunction App() {

│   │   │   ├── Breadcrumb.jsx  return (

│   │   │   └── index.js    <>

│   │   └── [ComponentName]/      <Header />

│   │       ├── [ComponentName].jsx      {/* Add more screens here */}

│   │       ├── index.js    </>

│   │       └── sections/   # Sub-components nếu cần  );

│   ├── App.jsx             # Router configuration}

│   ├── App.css             # App styles

│   ├── index.css           # Global styles (Tailwind)export default App;

│   └── main.jsx            # Entry point```

```

**Rules**:

## 🎯 Component Structure Pattern- ✅ DO: Use default export

- ✅ DO: Import screen-level components

### Standard Component Template- ✅ DO: Import App.css for app-level styles

- ❌ DON'T: Add complex logic here

```jsx

// components/[ComponentName]/[ComponentName].jsx---

import React from 'react';

import { Section1 } from './sections/Section1';### 3. Global Styles (`index.css`)

import { Section2 } from './sections/Section2';**Purpose**: Global CSS, Tailwind directives, and CSS resets



export const ComponentName = ({ prop1, prop2 }) => {```css

  return (@tailwind base;

    <div className="container-classes">@tailwind components;

      <Section1 />@tailwind utilities;

      <Section2 />

    </div>* {

  );  -webkit-font-smoothing: antialiased;

};  box-sizing: border-box;

}

// components/[ComponentName]/index.js

export { ComponentName } from "./ComponentName";/* Global resets and base styles */

```html,

body {

### Page Template  margin: 0px;

  height: 100%;

```jsx}

// pages/[PageName].jsx

import React from 'react';/* Add global utility classes here */

import { Layout } from '../components/Layout';```

import { Breadcrumb } from '../components/Breadcrumb';

**Rules**:

const PageName = () => {- ✅ DO: Include Tailwind directives at the top

  const breadcrumbItems = [- ✅ DO: Add global resets and base styles

    { label: 'Dashboard', href: '/' },- ✅ DO: Define global utility classes

    { label: 'Current Page', href: null }, // Current page - no link- ❌ DON'T: Add component-specific styles

  ];

---

  return (

    <Layout>### 4. App Styles (`App.css`)

      <div className="space-y-6">**Purpose**: App-level component styles

        {/* Breadcrumb - Always include except Dashboard */}

        <Breadcrumb items={breadcrumbItems} />```css

        /* App-specific styles */

        {/* Page content */}#root {

        <div className="bg-white p-6 rounded-lg shadow-sm">  width: 100%;

          {/* Your content here */}  margin: 0 auto;

        </div>}

      </div>

    </Layout>/* Add app-level layout styles here */

  );```

};

---

export default PageName;

## Naming Conventions

// pages/index.js

export { default as PageName } from "./PageName";### Files and Folders

```- **Screens**: PascalCase (e.g., `Header`, `ProductListing`, `UserProfile`)

- **Sections**: PascalCase with "Section" suffix (e.g., `NavigationSection`, `SearchBarSection`)

## 🎨 Styling Guidelines- **Components**: PascalCase (e.g., `Button`, `Card`, `Modal`)

- **Files**: Match component name (e.g., `Header.jsx`, `NavigationSection.jsx`)

### Primary Color Classes (Emerald)- **Index files**: Always lowercase `index.js` or `index.jsx`



```jsx### Components

// Backgrounds- **Named exports**: Use PascalCase and match filename

bg-emerald-50       // Very light background, subtle highlights  ```jsx

bg-emerald-100      // Light background, hover states  export const NavigationSection = () => { ... }

bg-emerald-500      // Primary buttons, badges, active states  ```

bg-emerald-600      // Primary dark, stronger emphasis- **Default exports**: Use for App.jsx only

  ```jsx

// Text Colors  export default App;

text-emerald-600    // Primary text, links, icons (most used)  ```

text-emerald-700    // Hover text, stronger emphasis

---

// Borders

border-emerald-500  // Primary borders## Component Development Guidelines

border-emerald-600  // Stronger borders

### Screen Component Structure

// Focus/Ring

focus:ring-emerald-500  // Input focus rings```

```src/screens/[ScreenName]/

├── [ScreenName].jsx      # Main screen component

### Neutral Colors (Gray Scale)├── index.js              # Export file

└── sections/             # Screen sections

```jsx    ├── [Section1]/

// Backgrounds    │   ├── [Section1].jsx

bg-white            // Cards, containers, main backgrounds    │   └── index.js

bg-gray-50          // Subtle background, table headers    └── [Section2]/

bg-gray-100         // Section backgrounds, hover states        ├── [Section2].jsx

bg-gray-200         // Dividers, borders        └── index.js

```

// Text Colors

text-gray-500       // Placeholder text, muted labels**Example: Header Screen**

text-gray-600       // Secondary text, descriptions```jsx

text-gray-700       // Body text, normal content// src/screens/Header/Header.jsx

text-gray-800       // Headings, important textimport React from "react";

text-gray-900       // Strong headings, emphasisimport { HeaderSection } from "./sections/HeaderSection";

import { NavigationSection } from "./sections/NavigationSection";

// Bordersimport { SearchBarSection } from "./sections/SearchBarSection";

border-gray-200     // Light borders

border-gray-300     // Standard bordersexport const Header = () => {

```  return (

    <div className="flex flex-col items-center gap-[30px] relative">

### Status Colors (Keep Original - Don't Convert!)      <NavigationSection />

      <SearchBarSection />

```jsx      <HeaderSection />

// Info (Blue)    </div>

bg-blue-50, text-blue-600, border-blue-500  );

};

// Success (Green)```

bg-green-50, text-green-600, border-green-500

```jsx

// Error (Red)// src/screens/Header/index.js

bg-red-50, text-red-600, border-red-500export { Header } from "./Header";

```

// Warning (Yellow)

bg-yellow-50, text-yellow-600, border-yellow-500---

```

### Section Component Structure

## 🧩 Common Component Patterns

**Example: NavigationSection**

### 1. Breadcrumb```jsx

// src/screens/Header/sections/NavigationSection/NavigationSection.jsx

```jsximport React from "react";

import { Breadcrumb } from '../components/Breadcrumb';

export const NavigationSection = () => {

const breadcrumbItems = [  // Component logic and state

  { label: 'Dashboard', href: '/' },  const navItems = [

  { label: 'Products', href: '/products' },    { label: "About Us", href: "#about" },

  { label: 'Product List', href: null }, // Current page    { label: "My Account", href: "#account" },

];  ];



<Breadcrumb items={breadcrumbItems} />  return (

```    <nav className="flex flex-col items-start pt-2.5 pb-[11px] px-[154px] relative">

      {/* Component JSX */}

**Colors Used:**    </nav>

- Icon & Links: `text-emerald-600 hover:text-emerald-700`  );

- Current page: `text-gray-600`};

- Separator: `text-gray-400````



### 2. Buttons```jsx

// src/screens/Header/sections/NavigationSection/index.js

```jsxexport { NavigationSection } from "./NavigationSection";

// Primary Button (Emerald)```

<button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">

  Primary Action---

</button>

## Styling Guidelines

// Secondary Button (Emerald Outline)

<button className="border border-emerald-500 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors">### TailwindCSS Usage

  Secondary Action

</button>#### 1. Layout Classes

```jsx

// Danger Button (Red - keep original)// Flexbox

<button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">className="flex flex-col items-center justify-between gap-4"

  Delete

</button>// Grid

className="grid grid-cols-3 gap-6"

// Text Button

<button className="text-emerald-600 hover:text-emerald-700 hover:underline">// Positioning

  View MoreclassName="relative absolute top-0 left-0"

</button>```

```

#### 2. Spacing

### 3. Cards```jsx

// Padding

```jsxclassName="p-4 px-6 py-2 pt-8 pb-4 pl-2 pr-3"

// Standard Card

<div className="bg-white p-6 rounded-lg shadow-sm">// Margin

  <h2 className="text-xl font-semibold mb-4 text-gray-800">Card Title</h2>className="m-4 mx-auto my-6 mt-8 mb-4 ml-2 mr-3"

  <div className="text-gray-600">

    Card content// Gap

  </div>className="gap-4 gap-x-6 gap-y-2"

</div>```



// Card with Header Actions#### 3. Sizing

<div className="bg-white p-6 rounded-lg shadow-sm">```jsx

  <div className="flex items-center justify-between mb-4">// Width

    <h2 className="text-xl font-semibold text-gray-800">Title</h2>className="w-full w-1/2 w-[600px] max-w-[1920px]"

    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">

      + Add// Height

    </button>className="h-full h-screen h-[52.17px] min-h-[400px]"

  </div>```

  {/* Content */}

</div>#### 4. Typography

``````jsx

// Font family (defined in Tailwind config or custom)

### 4. TablesclassName="[font-family:'Lato',Helvetica]"



```jsx// Font size and weight

<div className="bg-white p-6 rounded-lg shadow-sm">className="text-[13px] font-normal font-bold"

  <div className="overflow-x-auto">

    <table className="min-w-full divide-y divide-gray-200">// Line height and tracking

      {/* Header */}className="leading-[13px] tracking-[0]"

      <thead className="bg-gray-50">

        <tr>// Text alignment and decoration

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">className="text-center text-left whitespace-nowrap"

            Column Header```

          </th>

        </tr>#### 5. Colors

      </thead>```jsx

      // Text color

      {/* Body */}className="text-[#7e7e7e] hover:text-[#3bb77e]"

      <tbody className="bg-white divide-y divide-gray-200">

        <tr className="hover:bg-gray-50 transition-colors">// Background color

          <td className="px-6 py-4 whitespace-nowrap">className="bg-white bg-[#3bb77e]"

            <div className="text-sm font-medium text-gray-900">Data</div>

            <div className="text-sm text-gray-500">Subtext</div>// Border color

          </td>className="border-[#ececec] border-2 border-solid"

        </tr>```

      </tbody>

    </table>#### 6. Effects

  </div>```jsx

  // Shadow

  {/* Pagination */}className="shadow-lg shadow-md"

  <div className="flex items-center justify-between mt-4">

    <div className="text-sm text-gray-700">// Rounded corners

      Showing <span className="font-medium">1</span> to <span className="font-medium">10</span>className="rounded rounded-lg rounded-[8px]"

    </div>

    <div className="flex gap-2">// Opacity

      <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">className="opacity-50 hover:opacity-100"

        Previous

      </button>// Transitions

      <button className="px-3 py-1 bg-emerald-600 text-white rounded">1</button>className="transition-colors transition-all duration-300"

      <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">```

        Next

      </button>### Custom CSS Usage

    </div>**When to use custom CSS:**

  </div>- Complex animations

</div>- Specific browser hacks

```- Styles not easily achievable with Tailwind



### 5. Status Badges**Where to place:**

- Component-specific: Create a separate `.css` file next to component

```jsx- Reusable: Add to `index.css` or `App.css`

// Active/Success (Green - original)

<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">---

  Active

</span>## Step-by-Step Conversion Process



// Pending/Warning (Yellow - original)### Step 1: Analyze Figma Design

<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">1. Identify main screens (pages)

  Pending2. Break down each screen into logical sections

</span>3. Identify reusable components

4. Note design system elements (colors, fonts, spacing)

// Inactive/Error (Red - original)

<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">### Step 2: Create Screen Structure

  Inactive```bash

</span># Create new screen folder

src/screens/[ScreenName]/

// Primary/New Badge (Emerald)```

<span className="bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-1">

  New1. Create main screen component file: `[ScreenName].jsx`

</span>2. Create index.js export file

3. Create `sections/` folder for sub-components

// Count Badge (Emerald)

<span className="bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-1">### Step 3: Create Section Components

  2For each major section in the Figma design:

</span>

```1. Create section folder: `sections/[SectionName]/`

2. Create component file: `[SectionName].jsx`

### 6. Form Elements3. Create index.js export file



```jsx### Step 4: Extract Design Tokens from Figma

// Input

<input#### Colors

  type="text"```jsx

  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"// Copy exact hex codes from Figma

  placeholder="Enter text"text-[#7e7e7e]

/>bg-[#3bb77e]

border-[#ececec]

// Select```

<select className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">

  <option>Option 1</option>#### Typography

</select>```jsx

// Font families (add to tailwind.config.js if needed)

// Checkbox[font-family:'Lato',Helvetica]

<input

  type="checkbox"// Font sizes - use exact px values from Figma

  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"text-[13px]

/>text-[16px]



// Radio// Line heights

<inputleading-[13px]

  type="radio"leading-[20px]

  className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"```

/>

#### Spacing

// Textarea```jsx

<textarea// Use exact px values from Figma

  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"gap-[30px]

  rows="4"px-[154px]

  placeholder="Enter description"pt-2.5

/>pb-[11px]

``````



### 7. Links### Step 5: Implement Component Structure



```jsx#### Basic Component Template

// Regular Link (Emerald)```jsx

<Link import React from "react";

  to="/products" 

  className="text-emerald-600 hover:text-emerald-700 hover:underline"export const ComponentName = () => {

>  // 1. State management

  View Products  const [state, setState] = React.useState();

</Link>

  // 2. Event handlers

// Nav Link (Active State)  const handleClick = (e) => {

<Link     // Handle events

  to="/products"  };

  className={`${isActive 

    ? 'bg-emerald-500 text-white'   // 3. Data (from Figma)

    : 'text-gray-700 hover:bg-emerald-50'  const items = [

  }`}    { label: "Item 1", href: "#item1" },

>    { label: "Item 2", href: "#item2" },

  Products  ];

</Link>

```  // 4. JSX return

  return (

## 🔄 Step-by-Step Conversion Process    <div className="flex flex-col">

      {/* Component content */}

### Step 1: Analyze Figma Design    </div>

  );

```markdown};

1. ✅ Identify main sections and components```

2. ✅ List all colors used (especially purples!)

3. ✅ Note spacing (padding, margins, gaps)### Step 6: Extract Images and Assets

4. ✅ Identify text sizes and weights

5. ✅ Check hover states and interactions#### From Figma:

6. ✅ Note responsive breakpoints1. Export images at 2x resolution for Retina displays

7. ✅ Identify icons needed (lucide-react)2. Use PNG for images with transparency

```3. Use JPG for photos

4. Use SVG for icons when possible

### Step 2: Plan Component Structure

#### In Code:

```jsx```jsx

// Determine if it's a Page or Component// Place in public/ or src/assets/

Is it a full page?<img 

  → Create in pages/[PageName].jsx  src="https://c.animaapp.com/YP0auJCm/img/nest@2x.png"

  → Include Layout wrapper  alt="Descriptive alt text"

  → Include Breadcrumb  className="w-[170px] h-[52.17px] object-cover"

  />

Is it a reusable component?```

  → Create in components/[ComponentName]/

  → Create sections/ if complex### Step 7: Implement Interactions

  → Export via index.js

```#### Hover States

```jsx

### Step 3: Convert Colors (MOST IMPORTANT!)className="hover:text-[#3bb77e] transition-colors"

```

```jsx

// Scan Figma for purple colors#### Click Handlers

Find: purple-50, purple-100, purple-500, purple-600, etc.```jsx

<button onClick={handleClick} className="...">

// Replace with emerald  Click me

purple-50  → emerald-50</button>

purple-100 → emerald-100```

purple-500 → emerald-500

purple-600 → emerald-600#### Form Handling

purple-700 → emerald-700```jsx

const [value, setValue] = useState("");

// Keep status colors original

blue-*, green-*, red-*, yellow-* → NO CHANGEconst handleSubmit = (e) => {

```  e.preventDefault();

  // Handle form submission

### Step 4: Apply Tailwind Classes};



```jsx<form onSubmit={handleSubmit}>

// Layout  <input 

flex, flex-col, grid, items-center, justify-between, gap-4    value={value}

    onChange={(e) => setValue(e.target.value)}

// Spacing  />

p-4, p-6, px-4, py-2, space-y-6, space-x-4, gap-4</form>

```

// Typography

text-sm, text-base, text-lg, text-xl, text-2xl### Step 8: Add Accessibility

font-normal, font-medium, font-semibold, font-bold

```jsx

// Colors (Emerald!)// Semantic HTML

bg-emerald-500, text-emerald-600, border-emerald-500<nav role="navigation" aria-label="Main navigation">

  <ul role="list">

// Effects    <li>...</li>

shadow-sm, rounded-lg, hover:bg-emerald-50, transition-colors  </ul>

```</nav>



### Step 5: Add Interactions// Alt text for images

<img src="..." alt="Descriptive text" />

```jsx

// Hover effects// ARIA labels

hover:bg-emerald-50<button aria-label="Close menu">X</button>

hover:text-emerald-700```

hover:underline

hover:shadow-md### Step 9: Test Responsiveness

```jsx

// Focus states (for inputs)// Use Tailwind responsive prefixes

focus:outline-noneclassName="px-4 md:px-[154px] lg:px-[200px]"

focus:ring-2className="text-sm md:text-base lg:text-lg"

focus:ring-emerald-500```

focus:border-transparent

### Step 10: Import to App.jsx

// Active states (for navigation)```jsx

className={`${isActive import { NewScreen } from "./screens/NewScreen";

  ? 'bg-emerald-500 text-white' 

  : 'text-gray-700 hover:bg-emerald-50'function App() {

}`}  return (

    <>

// Transitions      <Header />

transition-colors      <NewScreen />

transition-all    </>

duration-200  );

ease-in-out}

``````



### Step 6: Add Router Integration---



```jsx## Best Practices

// Use Link instead of <a>

import { Link } from 'react-router-dom';### Code Organization

✅ **DO:**

<Link to="/products">Products</Link>- Keep components small and focused

- Extract repeated logic into custom hooks

// Detect active route- Use meaningful variable and function names

import { useLocation } from 'react-router-dom';- Group related styles together

- Comment complex logic

const location = useLocation();

const isActive = location.pathname === '/products';❌ **DON'T:**

```- Create monolithic components

- Hardcode values that could be variables

### Step 7: Test & Refine- Mix business logic with presentation

- Nest components more than 3 levels deep

```markdown

1. ✅ Check in browser### Performance

2. ✅ Verify all colors (NO PURPLE!)✅ **DO:**

3. ✅ Test hover states- Use React.memo for expensive components

4. ✅ Test click interactions- Lazy load images with loading="lazy"

5. ✅ Check responsive design- Optimize images before using

6. ✅ Test navigation/routing- Use CSS transforms for animations

7. ✅ Verify spacing matches Figma

8. ✅ Check accessibility❌ **DON'T:**

```- Create new objects/arrays in render

- Use inline functions in loops

## 📋 Conversion Checklist- Forget to clean up effects



### Before Starting### Accessibility

✅ **DO:**

- [ ] Study Figma design thoroughly- Use semantic HTML elements

- [ ] Take screenshots for reference- Add ARIA labels when needed

- [ ] List all sections and components- Ensure keyboard navigation works

- [ ] **Identify ALL purple colors to convert**- Provide alt text for images

- [ ] Check if similar component exists- Use sufficient color contrast

- [ ] Plan folder structure

- [ ] Identify required icons (lucide-react)❌ **DON'T:**

- Use divs for everything

### During Conversion- Remove focus outlines without replacement

- Forget about screen readers

- [ ] Create folder structure correctly

- [ ] **Convert ALL purple → emerald**---

- [ ] Use correct Tailwind classes

- [ ] Follow naming conventions (PascalCase)## Common Patterns

- [ ] Add proper spacing (space-y-6, gap-4)

- [ ] Include hover states### Pattern 1: List Rendering with Data

- [ ] Add transitions```jsx

- [ ] Use Link for navigationexport const NavigationSection = () => {

- [ ] Ensure responsive design (md:, lg: breakpoints)  const navItems = [

- [ ] Add comments for complex logic    { label: "About Us", href: "#about" },

    { label: "My Account", href: "#account" },

### After Conversion  ];



- [ ] **Run color check: grep -r "purple" src/ (should be 0)**  return (

- [ ] Test in browser    <nav>

- [ ] Test all interactive elements      <ul>

- [ ] Test hover/active states        {navItems.map((item, index) => (

- [ ] Verify responsive breakpoints          <li key={index}>

- [ ] Check spacing matches design            <a href={item.href}>{item.label}</a>

- [ ] Test navigation/routing          </li>

- [ ] Check accessibility (keyboard navigation)        ))}

- [ ] Review code for improvements      </ul>

- [ ] Update documentation if needed    </nav>

  );

## 🚨 Common Mistakes to Avoid};

```

### 1. ❌ Keeping Purple Colors

### Pattern 2: Conditional Rendering

```jsx```jsx

// ❌ WRONGexport const Badge = ({ count }) => {

className="bg-purple-600 text-white"  return (

className="text-purple-500 hover:text-purple-700"    <div>

style={{ backgroundColor: '#9333ea' }} // Purple hex      {count > 0 && (

        <span className="badge">{count}</span>

// ✅ CORRECT      )}

className="bg-emerald-600 text-white"    </div>

className="text-emerald-500 hover:text-emerald-700"  );

className="bg-emerald-600" // Use Tailwind classes};

``````



### 2. ❌ Using <a> Tags Instead of Link### Pattern 3: Icon Components

```jsx

```jsxconst iconItems = [

// ❌ WRONG  {

<a href="/products">Products</a>    id: "cart",

<a href="#/products">Products</a>    icon: "/assets/cart-icon.svg",

    label: "Cart",

// ✅ CORRECT    count: 0,

import { Link } from 'react-router-dom';  },

<Link to="/products">Products</Link>];

```

return (

### 3. ❌ Forgetting Layout Wrapper  <div>

    {iconItems.map((item) => (

```jsx      <div key={item.id}>

// ❌ WRONG - Page component        <img src={item.icon} alt={item.label} />

const ProductsPage = () => {        <span>{item.label}</span>

  return <div>Products</div>;        {item.count > 0 && <span>{item.count}</span>}

};      </div>

    ))}

// ✅ CORRECT - Page component  </div>

const ProductsPage = () => {);

  return (```

    <Layout>

      <div className="space-y-6">### Pattern 4: Form Components

        <Breadcrumb items={breadcrumbItems} />```jsx

        {/* Content */}export const SearchBar = () => {

      </div>  const [query, setQuery] = useState("");

    </Layout>

  );  const handleSubmit = (e) => {

};    e.preventDefault();

```    console.log("Search:", query);

  };

### 4. ❌ Skipping Breadcrumb

  return (

```jsx    <form onSubmit={handleSubmit}>

// ❌ WRONG - No breadcrumb      <input

return (        type="text"

  <Layout>        value={query}

    <div>Page content</div>        onChange={(e) => setQuery(e.target.value)}

  </Layout>        placeholder="Search..."

);      />

      <button type="submit">Search</button>

// ✅ CORRECT - Include breadcrumb (except Dashboard)    </form>

const breadcrumbItems = [  );

  { label: 'Dashboard', href: '/' },};

  { label: 'Current Page', href: null },```

];

### Pattern 5: Layout Containers

return (```jsx

  <Layout>export const Container = ({ children }) => {

    <div className="space-y-6">  return (

      <Breadcrumb items={breadcrumbItems} />    <div className="max-w-[1604px] mx-auto px-4">

      <div>Page content</div>      {children}

    </div>    </div>

  </Layout>  );

);};

``````



### 5. ❌ Using Inline Styles---



```jsx## Checklist for Converting a New Screen

// ❌ WRONG

<div style={{ color: '#059669', padding: '24px' }}>Before marking a screen conversion as complete, verify:



// ✅ CORRECT- [ ] Screen folder created in `src/screens/`

<div className="text-emerald-600 p-6">- [ ] Main screen component created with proper naming

```- [ ] Index.js export file created

- [ ] All sections identified and created in `sections/` folder

### 6. ❌ Arbitrary Values Without Reason- [ ] Each section has its own folder with component + index.js

- [ ] All images extracted and optimized

```jsx- [ ] Exact Figma measurements used for spacing/sizing

// ❌ WRONG (unless really necessary)- [ ] Colors match Figma design exactly

className="p-[23px] text-[17px] mt-[33px]"- [ ] Typography matches (font family, size, weight, line-height)

- [ ] Hover states implemented

// ✅ CORRECT (use Tailwind scale)- [ ] Click handlers added where needed

className="p-6 text-lg mt-8"- [ ] Forms have proper state management

```- [ ] Accessibility attributes added (alt, aria-label, role)

- [ ] Component imported and added to App.jsx

### 7. ❌ Mixing Color Shades Randomly- [ ] Tested in browser for visual accuracy

- [ ] Code reviewed for best practices

```jsx- [ ] No console errors or warnings

// ❌ WRONG (inconsistent shades)

<div className="bg-emerald-200 text-emerald-900 border-emerald-600">---



// ✅ CORRECT (consistent & purposeful)## Quick Reference

<div className="bg-emerald-50 text-emerald-600 border-emerald-500">

```### File Creation Commands

```bash

### 8. ❌ Forgetting Hover States# Create new screen

mkdir -p src/screens/ScreenName/sections

```jsxtouch src/screens/ScreenName/ScreenName.jsx

// ❌ WRONGtouch src/screens/ScreenName/index.js

<button className="bg-emerald-500 text-white px-4 py-2 rounded-lg">

  Click Me# Create new section

</button>mkdir src/screens/ScreenName/sections/SectionName

touch src/screens/ScreenName/sections/SectionName/SectionName.jsx

// ✅ CORRECTtouch src/screens/ScreenName/sections/SectionName/index.js

<button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">```

  Click Me

</button>### Import/Export Pattern

``````jsx

// Component file: NavigationSection.jsx

### 9. ❌ Not Using Transitionsexport const NavigationSection = () => { ... }



```jsx// Index file: index.js

// ❌ WRONG (abrupt changes)export { NavigationSection } from "./NavigationSection";

hover:bg-emerald-50

// Usage in parent:

// ✅ CORRECT (smooth transitions)import { NavigationSection } from "./sections/NavigationSection";

hover:bg-emerald-50 transition-colors duration-200```

```

### Common TailwindCSS Classes

### 10. ❌ Inconsistent Naming```jsx

// Flexbox Layout

```jsx"flex flex-col items-center justify-between gap-4"

// ❌ WRONG

const product_list = () => {}// Responsive Width

const Product-Detail = () => {}"w-full md:w-1/2 lg:w-[600px]"



// ✅ CORRECT// Padding/Margin

const ProductList = () => {}"px-4 py-2 mx-auto"

const ProductDetail = () => {}

```// Text Styling

"text-[#7e7e7e] text-[13px] font-normal leading-[13px]"

## 🎯 Color Usage Patterns

// Hover Effects

### Navigation (Sidebar)"hover:text-[#3bb77e] transition-colors"



```jsx// Border

// Active main menu item"border border-[#ececec] border-solid rounded"

bg-emerald-500 text-white```



// Icon in active item---

bg-emerald-100 text-emerald-600

## Resources

// Hover main menu item

hover:bg-emerald-50### Documentation

- [React Documentation](https://react.dev)

// Active submenu item- [TailwindCSS Documentation](https://tailwindcss.com/docs)

text-emerald-600 bg-emerald-50 font-medium- [Vite Documentation](https://vitejs.dev)



// Hover submenu item### Tools

text-gray-600 hover:text-emerald-600 hover:bg-emerald-50- [Figma](https://figma.com) - Design source

```- [React DevTools](https://react.dev/learn/react-developer-tools) - Debugging

- [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension

### Buttons

---

```jsx

// Primary## Support

bg-emerald-500 text-white hover:bg-emerald-600

For questions or clarifications about this guide, please contact the project lead or open an issue in the project repository.

// Secondary

border-emerald-500 text-emerald-600 hover:bg-emerald-50---



// Text button**Last Updated**: October 4, 2025

text-emerald-600 hover:text-emerald-700 hover:underline**Version**: 1.0.0

// Icon button
text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg
```

### Links & Breadcrumb

```jsx
// Regular link
text-emerald-600 hover:text-emerald-700 hover:underline

// Active breadcrumb (current page)
text-gray-600 cursor-default pointer-events-none

// Clickable breadcrumb
text-emerald-600 hover:text-emerald-700 hover:underline

// Breadcrumb icon
text-emerald-600

// Breadcrumb separator
text-gray-400
```

### Badges & Tags

```jsx
// Primary badge
bg-emerald-500 text-white rounded-full px-2 py-1

// Outline badge
border-emerald-500 text-emerald-600 rounded-full px-2 py-1

// Count badge
bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-1

// New tag
bg-emerald-500 text-white text-xs font-bold rounded-md px-2 py-1
```

### Form Elements

```jsx
// Input focus
focus:ring-2 focus:ring-emerald-500 focus:border-transparent

// Checkbox/Radio checked
checked:bg-emerald-500 checked:border-emerald-500

// Switch active
bg-emerald-500

// Select focus
focus:ring-emerald-500 focus:border-emerald-500
```

### Status Indicators (Keep Original Colors!)

```jsx
// Success - Green (NOT emerald!)
bg-green-100 text-green-800

// Error - Red
bg-red-100 text-red-800

// Warning - Yellow
bg-yellow-100 text-yellow-800

// Info - Blue
bg-blue-100 text-blue-800
```

## 🔍 Color Verification

### Quick Check Commands

```bash
# Check for purple (should find NONE in src/)
grep -r "purple" src/

# Check for emerald (should find many)
grep -r "emerald" src/

# Check for inline styles (avoid these)
grep -r "style={{" src/

# Check for hex colors (prefer Tailwind)
grep -r "#[0-9A-Fa-f]{6}" src/
```

### Manual Verification

1. **Visual Inspection:**
   - Open in browser
   - Compare with Figma
   - Check all interactive states
   - Verify colors match (emerald, not purple!)

2. **Code Review:**
   - Search for "purple" in code
   - Check Tailwind classes consistency
   - Verify hover/active states
   - Review color combinations

## 📚 Reference Components

Study these components for color usage examples:

1. **Sidebar Navigation**
   - File: `src/components/Sidebar/sections/NavigationMenuSection/NavigationMenuSection.jsx`
   - Learn: Active states, hover effects, dropdown styling

2. **Breadcrumb**
   - File: `src/components/Breadcrumb/Breadcrumb.jsx`
   - Learn: Link colors, icon colors, separator styling

3. **Header**
   - File: `src/components/Header/Header.jsx`
   - Learn: Background colors, search input

4. **Action Buttons**
   - File: `src/components/Header/sections/ActionSection/ActionSection.jsx`
   - Learn: Primary button styling

5. **User Profile**
   - File: `src/components/Sidebar/sections/UserProfileSection/UserProfileSection.jsx`
   - Learn: Text color usage

## 📊 Project Color Statistics

**Current Admin Project Colors:**

| Color Family | Usage | Count |
|--------------|-------|-------|
| **Emerald** | Primary UI, buttons, links, navigation | 40+ instances |
| **Gray** | Backgrounds, text, borders | 100+ instances |
| **White** | Cards, containers | 50+ instances |
| **Blue** | Info status (original) | 5+ instances |
| **Green** | Success status (original) | 10+ instances |
| **Red** | Error/danger status (original) | 5+ instances |
| **Yellow** | Warning status (original) | 3+ instances |
| **Purple** | **ZERO - NOT USED!** | 0 instances |

## 🎓 Summary & Quick Reference

### Color Conversion Rule (Most Important!)

```
╔════════════════════════════════════════════╗
║                                            ║
║   FIGMA PURPLE → ADMIN EMERALD             ║
║                                            ║
║   purple-50  → emerald-50                  ║
║   purple-100 → emerald-100                 ║
║   purple-500 → emerald-500                 ║
║   purple-600 → emerald-600 (most used)     ║
║   purple-700 → emerald-700                 ║
║                                            ║
║   ❌ NO PURPLE IN ADMIN CODE! ❌          ║
║                                            ║
╚════════════════════════════════════════════╝
```

### Component Structure

```jsx
components/[Name]/
  ├── [Name].jsx       // Main component
  ├── index.js         // Export
  └── sections/        // Sub-components if complex

pages/
  ├── [Name].jsx       // Page component with Layout
  └── index.js         // Export all pages
```

### Must-Have Patterns

```jsx
// 1. Always use Layout wrapper for pages
<Layout>
  <div className="space-y-6">
    <Breadcrumb items={items} />
    {/* Content */}
  </div>
</Layout>

// 2. Always convert purple → emerald
className="bg-emerald-500 text-emerald-600"

// 3. Always use Link for navigation
import { Link } from 'react-router-dom';
<Link to="/path">Text</Link>

// 4. Always add hover states
hover:bg-emerald-50 transition-colors

// 5. Always use Tailwind classes
className="p-6" // NOT style={{ padding: '24px' }}
```

### Final Checklist

```markdown
✅ All purple → emerald converted
✅ Layout wrapper used
✅ Breadcrumb included
✅ React Router Link used
✅ Hover states added
✅ Transitions included
✅ Responsive design
✅ Tailwind classes only
✅ Named exports
✅ Proper folder structure
```

---

## 🎉 You're Ready!

Follow this guide when converting Figma designs to ensure:
- ✅ Consistent color scheme (Emerald, not Purple!)
- ✅ Proper component structure
- ✅ Clean, maintainable code
- ✅ React best practices
- ✅ Tailwind CSS conventions

**Remember:** When in doubt, check existing components for reference!

---

**Last Updated:** October 5, 2025  
**Project:** Admin Panel - mini-store  
**Primary Color:** Emerald (Green) 🟩  
**Framework:** React + Tailwind CSS + React Router v6  

**Critical Rule:** ALWAYS CONVERT PURPLE → EMERALD! 🎨
