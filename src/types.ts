/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  client: string;
  organization: string;
  duration: string;
  description: string;
  environment: string[];
  responsibilities: string[];
  role: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon?: string;
}
