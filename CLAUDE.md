# shyam-portfolio

## Stack
- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4 (Vite plugin, no config file needed)
- React Router v7
- Three.js via @react-three/fiber + @react-three/drei
- GSAP v3 + @gsap/react for animations
- Firebase (backend/hosting)
- Resend (email)
- JetBrains Mono font (@fontsource)
- Testing: Vitest + @testing-library/react

## Conventions
- Functional components, named exports
- GSAP animations via useGSAP() hook from @gsap/react (not useEffect)
- Three.js scenes inside <Canvas> from @react-three/fiber
- Use drei helpers before writing raw Three.js
- Tailwind v4 utility classes for styling (no tailwind.config.js)
- React Router v7 loaders/actions for data fetching

## Project Structure
- src/components/ - reusable UI components
- src/pages/ - route-level components
- src/three/ - 3D scenes and meshes
- src/hooks/ - custom hooks
- src/lib/ - firebase, resend config