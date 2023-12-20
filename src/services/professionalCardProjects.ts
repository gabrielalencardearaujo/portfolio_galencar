import toDoList from '../assets/img/Projects/to_do_list.png'
import ProjetoEspelho from '../assets/img/Projects/projetoEspelho.png'
import Portfolio from '../assets/img/Projects/portfolio.png'

export type TypejsonFormatProjects = {
  url: string;
  title: string;
  describe: string;
  technologies: string;
  github: string;
  src: string;
  alt: string;
}

export const professionalCardProjects = [
  {
    url: '',
    title: 'Espelho Reversa',
    describe: 'Desenvolvido para ajudar a reversa (conferência) nos serviços de suporte ao cliente com máquinas de cartão de crédito no meu local de trabalho. A partir do excel fornecido pelo banco de dados da empresa, o app separa os serviços por motoboy e por tipo de baixa no sistema, verifica se a máquina e a baixa sistêmica estão corretos, salva na base de dados e emite documento impresso. Usei tecnologias como HTML5, CSS3, Javascript e API externa para converter os dados de arquivo .xlsx em .json.',
    technologies: 'HTML5, CSS3, Javascript e API externa para converter os dados de arquivo .xlsx em .json.',
    github: 'https://github.com/gabrielalencardearaujo/Projeto_Espelho',
    src: ProjetoEspelho,
    alt: 'Projeto Espelho - Safra'
  },
  {
    url: '',
    title: 'Portfolio',
    describe: 'Portfolio com meus objetivos, projetos e estudos. Criado inteiramente usando React com Typescript, Vite para buildar e gerenciar os arquivos e usando CSS.module para os estilos.',
    technologies: 'HTML5, CSS3, Javascript e API externa para converter os dados de arquivo .xlsx em .json.',
    github: 'https://github.com/gabrielalencardearaujo/portfolio_galencar',
    src: Portfolio,
    alt: ''
  },
  {
    url: 'https://to-do-list-sigma-taupe.vercel.app/',
    title: 'To Do List',
    describe: 'To do List simples inspirado no Obsidian. Salva as tarefas no localStorage. Com ele você pode criar, editar, e deletar tarefas.',
    technologies: 'HTML, CSS, Javascript, React.',
    github: 'https://github.com/gabrielalencardearaujo/to_do_list',
    src: toDoList,
    alt: ''
  },
]