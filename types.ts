
// Import React to fix "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export interface TeacherInfo {
  name: string;
  experience: number;
  location: string;
  facebookUrl: string;
}
