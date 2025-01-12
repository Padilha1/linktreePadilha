import Image from "next/image";
import { ThemeToggler } from "@/app/components/ThemeToggle";
import GithubIcon from "@icon/GitHub.svg";
import InstaIcon from "@icon/Instagram.svg";
import WhatsIcon from "@icon/Whatsapp.svg";
import LinkedinIcon from "@icon/LinkedIn.svg";
import { Card } from "./components/Card";

/**
 * Matheus
 * Fullstack - Software Engineer
 * Stacks - Langs
 *
 *  Icones github - insta - linkedin
 *
 *  Projetos / Lista
 * website s4
 * algo do app
 * mais algum projet???
 * CV EN
 * CV PT
 */

const projects = [
  { name: "Website S4", url: "https://s4treinamentos.com.br" },
  { name: "NLW eSports", url: "https://nlw-ignite-esports.vercel.app" },
  {
    name: "Conversor de Moeda",
    url: "https://conversormoedapadilha.vercel.app",
  },
  { name: "EN - CV", url: "./CurriculoEN.pdf" },
  { name: "PT - CV", url: "./CurriculoPT.pdf" },
  { name: "App S4 - Em Breve", url: "https://www.youtube.com/@S4Inspec" },
];

export default function Home() {
  return (
    <div className=" justify-items-center min-h-screen p-8  gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full border-gray-600 border-2 dark:border-gray-400"
            src="https://github.com/Padilha1.png"
            alt="Foto de perfil minha Matheus Padilha"
            width={160}
            height={140}
            priority
          />
          <h1 className="text-2xl py-2 font-bold ">Matheus Padilha Rodriges</h1>
          <h2 className="text-lg font-medium italic pb-2  ">
            Software Engineer - Fullstack Developer
          </h2>
          <h3 className="text-md font-normal">
            {" "}
            React.js | React Native | Node.js | MySQL
          </h3>
        </div>
        <ThemeToggler />
        <div className="flex gap-4">
          <a
            href="https://github.com/Padilha1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="fill-gray-500 dark:fill-[#8a3d99] hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/padilha--matheus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="fill-gray-500 dark:fill-[#8a3d99] hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://wa.me/5542998366677"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsIcon className="fill-gray-500 dark:fill-[#8a3d99] hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://instagram.com/matheus.padilha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaIcon className="fill-gray-500 dark:fill-[#8a3d99] hover:scale-110 transition-transform" />
          </a>
        </div>

        <ul>
          {projects.map((project) => {
            return (
              <Card key={project.name} name={project.name} url={project.url} />
            );
          })}
        </ul>
      </main>

      <footer className=" mt-10 flex flex-wrap items-center justify-center">
        <span> Site feito por Matheus Padilha ❤ </span>
      </footer>
    </div>
  );
}
