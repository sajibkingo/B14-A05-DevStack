# DevStack — Build Your Ideal Development Stack

An interactive tech-stack curator that enables developers to explore tools across various disciplines, compare their attributes, and build a project-tailored stack with category-level constraints.

---

## Overview

DevStack provides an interface for software teams and individual developers to select, validate, and track tools across frontend, backend, database, and DevOps roles. It prevents conflicting choices within identical domains while providing instant stack metrics and live feedback.

---

## Technologies

* **Runtime & Framework:** React 18, TypeScript
* **Styling & UI:** Tailwind CSS, DaisyUI
* **Build System:** Vite
* **State Management:** React Component State (Lifting State Up)
* **Feedback Engine:** React-Toastify
* **Icons:** Devicon, IcePanel SVGs

---

## Features

* **Category Conflict Resolution:** Enforces a single selection per technology category, replacing the previously active entry automatically when a alternative is picked.
* **Stack Aggregates:** Computes real-time analytical metrics, including mean user rating across selected technologies, via JavaScript array reduction (`reduce()`).
* **Non-Blocking User Feedback:** Emits toast notifications on stack updates, alerting developers during removals, additions, and rule validations.

---

## Conceptual Review

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that provides an HTML-like structure directly within component code. It is used to declare user interface layouts declaratively alongside JavaScript logic, which React translates into virtual DOM nodes during compile time.

### 2. What is the difference between props and state?
Props are read-only inputs passed from a parent component to configure child components, enforcing a unidirectional data flow. State is mutable data managed internally by a component that reflects runtime changes and triggers re-renders when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook registers a local, reactive variable within a functional component and returns a setter to update it. In DevStack, it tracks:
- `technologies`: stores the full set of fetched technology records.
- `selectedStack`: manages the current collection of chosen tools.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` coordinates external side effects with component lifecycle changes. It is typically employed to dispatch asynchronous fetch requests upon the initial component mount, populating state with external JSON records without freezing UI paint operations.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique keys to track element identity between rendering passes. Keys allow the reconciliation algorithm to determine which items were inserted, reordered, or deleted, avoiding wasteful DOM re-renders.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering renders distinct markup based on runtime boolean checks or state values. In DevStack, it alternates between an empty placeholder and the selected technologies container:

```tsx
{selectedTechs.length === 0 ? (
  <div className="text-center py-8">
    <p className="text-gray-400 text-sm">No technologies added yet.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* Populated items list */}
  </div>
)}
