import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  onResult: (data: any[]) => void;
}

const UploadForm: React.FC<Props> = ({ onResult }) => {
  const [resumes, setResumes] = useState<FileList | null>(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumes || !jobDescription) return alert('Please upload resumes and paste job description.');

    const formData = new FormData();
    Array.from(resumes).forEach((file) => formData.append('resumes', file));
    formData.append('jobDescription', jobDescription);

    try {
      const response = await axios.post('http://localhost:3000/analyze', formData);
      onResult(response.data);
    } catch (err) {
      alert('Error sending data to backend');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        type="file"
        multiple
        accept=".pdf,.docx"
        onChange={(e) => setResumes(e.target.files)}
      />
      <textarea
        rows={8}
        placeholder="Paste Job Description here"
        onChange={(e) => setJobDescription(e.target.value)}
        value={jobDescription}
      ></textarea>
      <button type="submit">Analyze</button>
    </form>
  );
};

export default UploadForm;
