# KEERTHI | Personal Portfolio

A responsive, multi-page personal portfolio built with React, Vite, React Router, Bootstrap 5, custom CSS, Framer Motion and Lucide React.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Pages
- `/` Home
- `/about` About
- `/skills` Skills
- `/projects` Projects (category filters + search)
- `/contact` Contact (client-side validation + mailto)

## Personalize before presenting
Edit `src/data.js`:
- Update email, GitHub and LinkedIn URLs.
- Confirm university, degree and dates.
- Replace sample project titles, descriptions, technologies and repository links with your actual work.
- Update skill tags to reflect what you can confidently explain.

## Front-end features
- Reusable Navbar, Footer, SectionTitle and ProjectCard components
- React Router page navigation
- React state for mobile menu, project filters/search and contact form
- Bootstrap 5 grid, navbar, buttons and form styling
- Custom responsive CSS and Framer Motion transitions
- Contact form validates in the browser and opens the visitor's email app using `mailto:`. No backend/database is used.

## GitHub
```bash
git init
git add .
git commit -m "Build responsive personal portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
