# 🚀 DevStack

DevStack is an interactive, modern web application designed for developers to explore frontend, backend, database, and tooling options, compare them side by side, and assemble their ideal tech stack for their next project.

---

## 🌐 Live URL & Repository

- **Live Deployment:** [https://ui-design-5.netlify.app/](https://ui-design-5.netlify.app/)
- **GitHub Repository:** [https://github.com/dtech0/ui-design](https://github.com/dtech0/ui-design)
b
---

## 🛠️ Technologies & Dependencies

### Main Dependencies:
- **React 19 (`^19.2.8`)** — Core UI library
- **React DOM (`^19.2.8`)** — React package for working with the DOM
- **React Toastify (`^11.1.0`)** — Interactive toast notifications with timer progress bar

### Dev Dependencies:
- **Vite (`^8.3.0`)** — Next-generation frontend tooling and build server
- **Tailwind CSS v4 (`^4.3.3`)** & **`@tailwindcss/vite` (`^4.3.3`)** — Modern utility-first styling
- **TypeScript (`~6.0.2`)** — Type safety and developer experience
- **Oxlint (`^1.81.0`)** — Fast JavaScript / TypeScript linter

---

## 💻 How to Run the Project Locally

Follow these simple steps to set up and run the project on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/dtech0/ui-design.git
cd ui-design
```

### 2. Install Dependencies
Install all required packages listed in `package.json`:
```bash
npm install
```
*(If you are setting up dependencies manually in a new project, run:)*
```bash
npm install react-toastify
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:5173`** to see the live app.

### 4. Build for Production
To create an optimized production build for Netlify / Vercel:
```bash
npm run build
```

---

## ✨ 3 Key Features

1. **Interactive Technology Explorer:**
   - Browse a catalog of frontend, backend, database, and dev tools.
   - Each card displays category badges, difficulty level tags, user ratings, and clean descriptions.

2. **Real-Time Stack Builder ("Your Stack"):**
   - Add technologies to your custom stack with duplicate prevention.
   - Remove individual items with a single click or reset the entire stack using the "Remove All" button.
   - Live counter tracks the number of selected technologies.

3. **Visual Feedback & Responsive Navigation:**
   - Custom toast alerts appear when adding, removing, or clearing stack items, featuring a branded border and light pinkish progress line.
   - Fully responsive navigation with desktop links and an interactive mobile drawer menu.

---

## 💡 React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like code directly inside JavaScript. React uses JSX because it makes writing and understanding UI structures much easier and visual, while still giving us the full power of JavaScript (like expressions, variables, and conditions) inside the template.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed down from a parent component to a child component. A child component cannot modify the props it receives.
- **State:** Dynamic data managed internally within a component that can change over time through user interactions. When state updates, React automatically re-renders the component.

---

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to store and manage dynamic state. It returns the current state value and a function to update it.  
In this project, `useState` is used in:
- **`App.tsx`**: `const [selected, setSelected] = useState<Data[]>([])` to keep track of the technologies selected in "Your Stack".
- **`Navbar.tsx`**: `const [isOpen, setIsOpen] = useState(false)` to toggle the mobile navigation drawer, and `const [activeLink, setActiveLink] = useState('Home')` for active link state.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook handles side effects in functional components, such as fetching data from an API, setting up timers, or manually modifying the DOM.  
We need it to load the JSON data asynchronously after the component mounts. Without `useEffect`, fetching data directly in the component body would trigger an infinite re-render loop every time the state updates.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React uses the unique `key` prop to identify each element in a list. When items are added, removed, or reordered, the `key` helps React's Virtual DOM know exactly which item changed so it only updates that specific element instead of re-rendering the whole list. This improves rendering performance.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the ability to display different UI elements or components based on whether a specific condition is true or false.  
**Example used in this project (`YourStack.tsx`):**  
When the user has not selected any technology (`length === 0`), an empty state message with a dashed border is rendered. When items exist, it displays the item list and the "Remove All" button:
```tsx
{length === 0 ? (
  <div className="border border-dashed border-slate-300 rounded-2xl py-11 text-center text-slate-400 text-sm font-normal">
    Your stack is empty.
  </div>
) : (
  selectedStack.map((item) => (
    <div key={item.id}>...</div>
  ))
)}

{length > 0 && (
  <button onClick={onRemoveAll}>Remove All</button>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed downward using **props**. For example, `App.tsx` passes the selected stack items to `YourStack` like: `<YourStack selectedStack={selected} />`.
- **Child to Parent:** The parent passes a **callback function** as a prop to the child. When an action occurs in the child (like clicking a delete button), the child invokes that function with the relevant data:
  ```tsx
  // in App.tsx:
  <YourStack onRemove={handleremove} />

  // in YourStack.tsx:
  <button onClick={() => onRemove(item.id)}>✕</button>
  ```
