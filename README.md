# ai_resume_bot



An AI-powered web app that helps HR professionals upload multiple resumes and shortlist the best candidates based on a Job Description (JD).

---

## 🧱 Tech Stack

- **Frontend**: React + Vite + TypeScript  
- **Backend**: Node.js + Hono  
- **AI Agent**: LangChain + OpenAI  
- **File Parsing**: `pdf-parse`, `mammoth`  
- **Deployment**: Vercel (Frontend), Railway (Backend)

---

## ⚙️ Features

- Upload multiple resumes (.pdf or .docx)  
- Paste job description text  
- AI-powered scoring for each resume (1–100)  
- Lists of good points and bad points aligned with JD  
- Shortlist candidates sorted by score

---

## 📁 Project Structure

```
ai-resume-shortlisting-bot/
├── backend/        # Node.js backend API server
├── frontend/       # React + Vite frontend
└── sample-data/    # Sample resumes & job descriptions
```

---

## 🛠 Setup Instructions

### 1. Clone the repository

```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Start backend server locally:

```bash
npm run dev
```

API will run on: `http://localhost:3000`

---

### 3. Frontend Setup

Open a new terminal tab/window and run:

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at: `http://localhost:5173`

---

### 4. Usage (Local)

- Upload multiple resumes (PDF/DOCX)  
- Paste the job description  
- Click **Analyze**  
- View scored and ranked candidates with good and bad points

---

## 🚀 Deployment

### Backend Deployment (Railway)

1. Go to [https://railway.app](https://railway.app) and sign in  
2. Create a new project and link your backend repo  
3. Add the environment variable: `OPENAI_API_KEY`  
4. Deploy and copy the backend URL (e.g., `https://your-backend.up.railway.app`)

---

### Frontend Deployment (Vercel)

1. Go to [https://vercel.com](https://vercel.com) and sign in  
2. Create a new project and import the frontend folder from your repo  
3. In `frontend/src/components/UploadForm.tsx`, update API URL:

```ts
const response = await axios.post('https://your-backend.up.railway.app/analyze', formData);
```

4. Deploy the frontend  
5. Your live frontend URL will be like: `https://your-frontend.vercel.app`

---

## 📂 Sample Data

Included in `/sample-data`:

- `resume1.pdf`  
- `job-description.txt`

Use these to test locally or during demos.

---


---


---

Thank you for reviewing!  
