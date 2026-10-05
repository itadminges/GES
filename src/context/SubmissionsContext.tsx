import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Submission {
  id: string;
  type: 'Meeting Request' | 'Complaint' | 'Suggestion' | 'Question' | 'Newsletter' | 'Contact';
  name?: string;
  email: string;
  mobile?: string;
  message?: string;
  date?: string;
  timeFrom?: string;
  timeTo?: string;
  page: string;
  createdAt: string;
}

interface SubmissionsContextType {
  submissions: Submission[];
  addSubmission: (submission: Omit<Submission, 'id' | 'createdAt'>) => void;
}

const STORAGE_KEY = 'ges_submissions_data';

const SubmissionsContext = createContext<SubmissionsContextType>({
  submissions: [],
  addSubmission: () => {},
});

export const SubmissionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [submissions, setSubmissions] = useState<Submission[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    } catch (e) {
      console.error('Failed to save submission to localStorage', e);
    }
  }, [submissions]);

  const addSubmission = (sub: Omit<Submission, 'id' | 'createdAt'>) => {
    const newSub: Submission = {
      ...sub,
      id: 'sub-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    setSubmissions(prev => [newSub, ...prev]);
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = () => useContext(SubmissionsContext);
