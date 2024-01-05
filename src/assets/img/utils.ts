import ProjetoEspelho from './Projects/projetoEspelho.png';
import Portfolio from './Projects/portfolio.png';
import RegexTool from './Projects/regexTool.png';
import QuizFlag from './Projects/quizFlag.png';
import OrcamentoPessoal from './Projects/orcamentoPessoal.png';
import PainelChegada from './Projects/painelChegada.png';
import ToDoList from './Projects/to_do_list.png';
import ColorQuiz from './Projects/colorQuiz.png';

export const describeCardProjects = [
  {
    name: 'Espelho Reversa',
    describe: 'Desenvolvido para ajudar a reversa (conferência) nos serviços de suporte ao cliente com máquinas de cartão de crédito no meu local de trabalho. A partir do excel fornecido pelo banco de dados da empresa, o app separa os serviços por motoboy e por tipo de baixa no sistema, verifica se a máquina e a baixa sistêmica estão corretos, salva na base de dados e emite documento impresso. Usei tecnologias como HTML5, CSS3, Javascript e API externa para converter os dados de arquivo .xlsx em .json. ',
    src: ProjetoEspelho,
    github: 'https://github.com/gabrielalencardearaujo/Projeto_Espelho',
    website: 'https://espelho-reversa.vercel.app/'
  },
  {
    name: 'Portfolio',
    describe: 'Portfolio com meus objetivos, projetos e estudos. Desenvolvido usando HTML, CSS, Typescript, React.TSX',
    src: Portfolio,
    github: 'https://github.com/gabrielalencardearaujo/portfolio_galencar',
    website: 'https://galencar.vercel.app/'
  },
  {
    name: 'Painel Chegada - Safra',
    describe: 'Desenvolvido para gerenciar a ordem de chegada e acompanhamento dos motoboys na retirada/entrega de serviços. App contém sistema de cadastro de novos motoboys e salva no localStorage. Tecnologias usadas: HTML, CSS e JQuery.',
    src: PainelChegada,
    github: 'https://github.com/gabrielalencardearaujo/Painel_Chegada_Safra',
    website: 'https://painel-chegada-safra.vercel.app/'
  },
  {
    name: 'RegexTool',
    describe: 'WebApp para estudar Regex, com feedback dinâmico e instantâneo dos caracteres selecionados usando expressões regulares. Projeto desenvolvido com HTML, CSS, e Typescript.',
    src: RegexTool,
    github: 'https://github.com/gabrielalencardearaujo/Character_Counter',
    website: 'https://character-counter-tau.vercel.app/regex.html'
  },
  {
    name: 'QuizFlag',
    describe: 'Mini Jogo para melhorar seus conhecimentos sobre bandeiras de países. Jogo conta com sistema de vidas, temporizador e placar. Tecnologias usads: HTML, CSS e Javascript',
    src: QuizFlag,
    github: 'https://github.com/gabrielalencardearaujo/game_quiz_flags',
    website: ''
  },
  {
    name: 'Orçamento Pessoal',
    describe: 'WebApp desenvolvido para ajudar na sua gestão financeira. App salva sua renda e despezas do mês, faz o calculo do seu saldo, salva seu histório. Usando HTML, CSS E Javascript',
    src: OrcamentoPessoal,
    github: 'https://github.com/gabrielalencardearaujo/webapp_or-amento_pessoal',
    website: ''
  },
  {
    name: 'To do list',
    describe: 'To do List simples baseado no Aplicativo Obsidian, persiste os dados no localStorage. Uso de React.JSX na sua criação.',
    src: ToDoList,
    github: 'https://github.com/gabrielalencardearaujo/to_do_list',
    website: 'https://to-do-list-sigma-taupe.vercel.app/'
  },
  {
    name: 'Mini Game - Color Quiz',
    describe: 'Jogo para adivinhar a cor correta com base seu código RGB ou Hexadecimal. Uso de HTML, CSS e Javascript.',
    src: ColorQuiz,
    github: 'https://github.com/gabrielalencardearaujo/Project-Mini_Game-Colors',
    website: ''
  },
]