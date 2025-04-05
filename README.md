# Next.js Profile Page with Tailwind CSS

This project is a simple profile page built using **Next.js** and **Tailwind CSS**.  
The aim of the task was to demonstrate the use of server actions, form validation, and interaction with a mock API following the **BFF (Backend for Frontend)** pattern.

## 📁 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Mock API**: [JSON Server](https://github.com/typicode/json-server)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Type Safety**: TypeScript

---

## 📄 Task Summary

- The project consists of a single page: the **Home page**, which is also the **Profile page**.
- The Profile page is composed of:
  - A `Header` component.
  - A data `Box` displaying user profile information.
  - A `Form` allowing the user to update their profile.

---

## ⚙️ Functionality & Flow

1. **Form Submission**
   - The form uses **Server Actions** introduced in Next.js 14.
   - Implements the **BFF pattern** to handle logic on the server side directly from the component.

2. **Validation**
   - Input data is validated using **Zod** before sending any request.
   - If validation fails, error messages are shown accordingly.

3. **Mock API Integration**
   - The form sends the validated data to a **mock API** created using **JSON Server**.
   - Based on the API response, a success or error message is displayed.

4. **User Feedback**
   - Uses **React Hot Toast** to show feedback messages (success or error) after form submission.

---

## ✅ Features Implemented

- [x] Setup project with Next.js and Tailwind CSS.
- [x] Built a responsive profile page layout.
- [x] Created a reusable profile form with client-side and server-side logic.
- [x] Integrated `Zod` for schema validation.
- [x] Used server actions and followed the BFF architecture.
- [x] Connected to a mock API using JSON Server.
- [x] Displayed toast messages based on server response.


---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Start mock API (JSON Server)
npx json-server --watch db.json --port 3001
