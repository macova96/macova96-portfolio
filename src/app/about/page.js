// app/about/page.js
// Página sobre mí con una breve descripción de habilidades.

import Layout from '../Layout'; // Asegúrate de que Layout esté en el lugar correcto

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="prose lg:prose-xl max-w-none">
          <p>
            Hi, I'm macova96, a passionate developer dedicated to building functional and beautiful web applications.
            I specialize in modern web technologies like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
          </p>

          <p>
            Over the years, I’ve honed my skills in front-end development, constantly seeking out new challenges and opportunities
            to grow. I'm always exploring new technologies and love creating efficient, scalable, and accessible solutions.
          </p>

          <h2>Skills & Expertise</h2>
          <ul>
            <li>Front-end Development: HTML, CSS, JavaScript, React.js, Next.js</li>
            <li>Styling: Tailwind CSS, Styled Components</li>
            <li>Version Control: Git, GitHub</li>
            <li>Deployment: Vercel, Netlify</li>
          </ul>

          <p>
            In my free time, I enjoy exploring new tools and contributing to open-source projects. If you're interested in
            collaborating, feel free to reach out!
          </p>
        </div>
      </div>
    </Layout>
  );
}
