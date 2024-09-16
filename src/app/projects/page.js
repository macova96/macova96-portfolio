// app/projects/page.js
// Página de proyectos mostrando una lista de proyectos en formato de tarjetas (cards).

import Layout from '../Layout'; // Asegúrate de que Layout esté bien ubicado

export default function Projects() {
  // Aquí puedes definir tu lista de proyectos. Puedes sustituir esto por una fuente de datos en el futuro.
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of project one. It involves working with Next.js and Tailwind CSS.',
      link: 'https://github.com/macova96/project-one',
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of project two. A project focused on creating scalable web applications.',
      link: 'https://github.com/macova96/project-two',
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of project three. Using modern web technologies to solve real-world problems.',
      link: 'https://github.com/macova96/project-three',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo de los proyectos */}
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
