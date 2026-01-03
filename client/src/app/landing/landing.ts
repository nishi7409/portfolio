import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {
  experiences = [
    {
      company: 'Amazon Web Services',
      position: 'Systems Development Engineer 2',
      duration: 'January 2023 - Present',
      description:
        'Led infrastructure automation initiatives and developed scalable solutions for cloud-based systems. Implemented monitoring and alerting systems to ensure high availability and performance of critical services.',
    },
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      duration: 'June 2020 - December 2022',
      description:
        'Designed and developed full-stack web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions and improved system performance by 40%.',
    },
    {
      company: 'StartUp Labs',
      position: 'Software Engineer',
      duration: 'August 2018 - May 2020',
      description:
        'Built RESTful APIs and microservices architecture. Participated in code reviews and mentored junior developers. Implemented CI/CD pipelines to streamline deployment processes.',
    },
  ];
}
