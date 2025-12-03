---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Bachelor of Computer Engineering, Pokhara University, 2021 - 2025

Experience
======
* May 2025 - Present: Freelance
    * Duties included: AI Solutions, Backend Development, Automation Scripts

* July 2024 - September 2025: Junior ML Developer
  * Bichitras Group
  * Duties included: Development of ML modules like engagement, spam detection, chat analysis for live-streaming, Backend APIs and streaming logic design

* Feb 2024 - May 2024: Python Developer Intern
  * Idea2MVP
  * Duties included: Backend development, GenAI integration, Automation scripts

* June 2022 - August 2024: Member
  * GCES IT Club
  * Duties included: Organizing workshops, Mentoring juniors, Leading AI projects

Skills
======
* Programming Languages
  * Python
  * C/C++
  * SQL
* Machine Learning & AI
  * Natural Language Processing
  * Computer Vision
  * RAG-based Information Retrieval
  * PyTorch
  * Data Visualization and Analysis
* Backend Development
  * Django
  * FastAPI
  * Celery
* Tools & Technologies
  * Git
  * Docker
  * Selenium
  * Playwright
  * Redis
  * PostgreSQL
* Cloud & DevOps
  * Cloud Computing
  * CI/CD Pipelines

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<div style="margin-bottom: 20px;">
  <a href="{{ base_path }}/files/cv.pdf" class="btn btn--primary" style="text-decoration: none; display: inline-block; padding: 8px 16px; background-color: #7a8288; color: white; border-radius: 4px;">
    <i class="fa fa-download"></i> Download CV (PDF)
  </a>
</div>