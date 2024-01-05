import toDoList from '../assets/img/Projects/to_do_list.png';
import ProjetoEspelho from '../assets/img/Projects/projetoEspelho.png';
import Portfolio from '../assets/img/Projects/portfolio.png';
import Bikecraft from '../assets/img/Projects/bikecraft.png';
import Agenda from '../assets/img/Projects/Agenda.png';
import AppDog from '../assets/img/Projects/AppDog.jpg';
import Brafe from '../assets/img/Projects/brafe1.png';
import ColorQuiz from '../assets/img/Projects/colorQuiz.png';
import LesCone from '../assets/img/Projects/lescone.png';
import PainelChegada from '../assets/img/Projects/painelChegada.png';
import CharacterCount from '../assets/img/Projects/characterCount.png';
import CoinConverter from '../assets/img/Projects/coinConverter.png';
import MataMosquito from '../assets/img/Projects/mataMosquito.png';
import QuizFlag from '../assets/img/Projects/flag_landscape.png';
import OrcamentoPessoal from '../assets/img/Projects/orcamento_landscape.png';
import RegexTool from '../assets/img/Projects/regexTool.png';
import WildBeast from '../assets/img/Projects/wildbeast.png';
import StopWatch from '../assets/img/Projects/stopwatch.png';
import Calculator from '../assets/img/Projects/simpleCalculator.png';
import NonImage from '../assets/img/Projects/nonImage.png';
import LandingPageFinans from '../assets/img/Projects/landpage_finans.png';



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
    url: 'https://espelho-reversa.vercel.app/',
    title: 'Espelho Reversa',
    describe: 'Desenvolvido para ajudar a reversa (conferência) nos serviços de suporte ao cliente com máquinas de cartão de crédito no meu local de trabalho. A partir do excel fornecido pelo banco de dados da empresa, o app separa os serviços por motoboy e por tipo de baixa no sistema, verifica se a máquina e sua baixa sistêmica estão corretos, salva na base de dados e emite documento impresso. Usei tecnologias como HTML5, CSS3, Javascript e API externa para converter os dados de arquivo .xlsx em .json.',
    technologies: 'HTML, CSS, Javascript e API externa para converter os dados de arquivo .xlsx em .json.',
    github: 'https://github.com/gabrielalencardearaujo/Espelho_Reversa',
    src: ProjetoEspelho,
    alt: 'Projeto Espelho - Safra'
  },
  {
    url: '',
    title: 'Portfolio',
    describe: 'Portfolio com meus objetivos, projetos e estudos. Criado inteiramente usando React com Typescript, Vite para buildar e gerenciar os arquivos e usando CSS.module para os estilos.',
    technologies: 'HTML, CSS, Typescript e React',
    github: 'https://github.com/gabrielalencardearaujo/portfolio_galencar',
    src: Portfolio,
    alt: 'Meu Portfolio'
  },
  {
    url: 'https://painel-chegada-safra.vercel.app/',
    title: 'Painel de Chegada - Safra',
    describe: 'App desenvolvido para tentar suprir a necessidade de organizar o processo de entrega e retirada de novos serviços na empresa de Logística que eu trabalhava, este processo tinha duas etapas que dependia uma da outra. O App registra a chegada dos motoboys previamente cadastrados e em qual das etapas se encontrava, para que tanto o motoboy quanto os funcionários da empresa conseguisse atender todos na ordem. Assim como guarda o registro de saida e tempo de permanencia na base.',
    technologies: 'HTML, CSS e Javascript.',
    github: 'https://github.com/gabrielalencardearaujo/Painel_Chegada_Safra',
    src: PainelChegada,
    alt: ''
  },
]

export const academicCardProjects = [
  {
    url: 'https://to-do-list-sigma-taupe.vercel.app/',
    title: 'To Do List',
    describe: 'To do List simples inspirado no Obsidian. Salva as tarefas no localStorage. Com ele você pode criar, editar, e deletar tarefas.',
    technologies: 'HTML, CSS, Javascript, React.',
    github: 'https://github.com/gabrielalencardearaujo/to_do_list',
    src: toDoList,
    alt: ''
  },
  {
    url: '',
    title: 'BikeCraft',
    describe: 'Projeto feito nas aulas de UI&UX do curso da Origamid. Site simula um sistema de compra e venda de bicicletas de alto padrão. ',
    technologies: 'HTML, CSS, Javascript e Tailwind.',
    github: 'https://github.com/gabrielalencardearaujo/Projeto_Bikecraft',
    src: Bikecraft,
    alt: 'Projeto academico que simula site de compras de bicicletas.'
  },
  {
    url: '',
    title: 'Agenda',
    describe: 'Projeto feito nas aulas de NodeJS do Curso de Javascript e Typescript do Luiz Otavio Miranda, na Udemy. Curso simula uma agenda virtual onde tem sistema de cadastro e login com cada login possuindo sua lista de contatos propria. Para salvar as informações foi utilizado a plataforma MongoDB.',
    technologies: 'HTML, CSS, Bootstrap, MongoDB e NodeJS.',
    github: 'https://github.com/gabrielalencardearaujo/Projeto_Agenda',
    src: Agenda,
    alt: 'Projeto academico que simula uma agenda virtual.'
  },
  {
    url: '',
    title: 'AppDog - Rede Social de Cachorros',
    describe: 'Projeto feito nas aulas de ReactJSX do curso da Origamid, site conta com sistema de login, cadastro de usuarios, upload de imagens, comentarios em fotos, uso de APIs Rest na comunicação com backend, telas de errors, telas de loading, dentre outros.',
    technologies: 'HTML, CSS, APIs REST, ReactJSX.',
    github: 'https://github.com/gabrielalencardearaujo/app_dog_social_media',
    src: AppDog,
    alt: 'Projeto academico que simula rede social de cachorros.'
  },
  {
    url: '',
    title: 'Brafé',
    describe: 'Projeto desenvolvido nas aulas de Flexbox no curso de CSS na Origamid. Simula um site de uma cafeteria no rio de janeiro. ',
    technologies: 'HTML e CSS.',
    github: 'https://github.com/gabrielalencardearaujo/Brafe_Project',
    src: Brafe,
    alt: 'Projeto academico de uma loja cafeteria.'
  },
  {
    url: '',
    title: 'Contador de Caracteres',
    describe: 'Website desenvolvido para contar palavras e caracteres de um texto. Você pode informar qual palavra ou letra quer que seja contada, ou caso queira, também conta o número de caracteres totais do texto.',
    technologies: 'HTML, CSS e Typescript.',
    github: 'https://github.com/gabrielalencardearaujo/Character_Counter',
    src: CharacterCount,
    alt: 'Contador de palavras e caracteres.'
  },
  {
    url: '',
    title: 'Color Quiz',
    describe: 'Mini Game para treinar seus conhecimentos com códigos hexadecimais e RGB de colores. O jogo conta com dois níveis de dificuldade e com cronômetro, escolha uma das dificuldades e comece o jogo. O jogo informará um código RGB ou Hexadecimal de uma cor aleatória e lhe dará 6 escolhas, você deve clicar na cor correspondente ao código. O objetivo é acertar o máximo de cores possíveis. ',
    technologies: 'HTML, CSS e Javascript.',
    github: 'https://github.com/gabrielalencardearaujo/Project-Mini_Game-Colors',
    src: ColorQuiz,
    alt: 'Mini jogo para adivinhar a cor de acordo com codigo hexadecimal ou rgb'
  },
  {
    url: '',
    title: 'Le Scone',
    describe: 'Projeto desenvolvido nas aulas de Sass no Curso da Origamid. Site simula uma landing page minimalista de um restaurante de massas, utilizando apenas Sass para estilização da página.',
    technologies: 'HTML e Sass',
    github: 'https://github.com/gabrielalencardearaujo/Projeto_Le-Scone',
    src: LesCone,
    alt: 'Projeto simula site minimalista de uma loja de pizza e massas.'
  },
  {
    url: '',
    title: 'Conversor de Moedas',
    describe: 'Mini webapp que converte moedas de várias nacionalidades e também criptomoedas. Com uso de API para realizar a conversão. API utilizada: https://docs.awesomeapi.com.br/api-de-moedas.',
    technologies: 'HTML, CSS e Typescript',
    github: 'https://github.com/gabrielalencardearaujo/coin_converter',
    src: CoinConverter,
    alt: 'Conversor de Moedas Nacionais e Criptomoedas.'
  },
  {
    url: '',
    title: 'Mini Game - Mata Mosquito',
    describe: 'Mini Game desenvolvido nas aulas de Javascript do Curso de Desenvolvimento Web - Jamilton Damasceno e Jorge Sant Ana na Udemy. O objetivo do jogo é matar o todos os mosquitos que aparecer na tela (clicando neles) até o tempo esgotar, se você errar perderá uma vida, se errar três vezes você perde o game.',
    technologies: 'HTML, CSS e Javascript',
    github: 'https://github.com/gabrielalencardearaujo/game_mata_mosquito',
    src: MataMosquito,
    alt: 'Mini game mata mosquito.'
  },
  {
    url: '',
    title: 'Mini Game - Quiz Flag',
    describe: 'Mini Game para advinhar qual o país da bandeira. O jogo apresentará uma bandeira de algum país do mundo e quatro nomes de países, você deve escolher de qual país é a bandeira apresentada. Jogo conta com sistema de placar.',
    technologies: 'HTML, CSS e Javascript',
    github: 'https://github.com/gabrielalencardearaujo/game_quiz_flags',
    src: QuizFlag,
    alt: 'Mini Game qual é a bandeira.'
  },
  {
    url: '',
    title: 'WebApp - Orçamento Pessoal',
    describe: 'WebApp desenvolvimento para ser seu orçamento financero pessoal. O App calcula e registra seus rendimentos e gastos de cada mês e mostra seu saldo. O App utiliza o localstorage para salvar as informações. ',
    technologies: 'HTML, CSS e Javascript',
    github: 'https://github.com/gabrielalencardearaujo/webapp_or-amento_pessoal',
    src: OrcamentoPessoal,
    alt: 'WebApp orçamento financeiro pessoal.'
  },
  {
    url: '',
    title: 'Regex Tool',
    describe: 'Projeto desenvolvido para treinar expressões regulares. Você insere um texto para servir de exemplo e pode inserir qualquer expressão regular. Ao clicar em resultado ele retorna o texto de exemplo com os caracteres destacados que foram selecionados pela expressão regular informada. O projeto informa também o número de ocorrências registradas daquela regex.',
    technologies: 'HTML, CSS e Typescript',
    github: 'https://github.com/gabrielalencardearaujo/Character_Counter',
    src: RegexTool,
    alt: 'Ferramenta para treinar Expressões Regulares.'
  },
  {
    url: '',
    title: 'WildBeast',
    describe: 'Projeto Desenvolvido nas aulas de Grid Layout no Curso da Origamid. Projeto simula um blog sobre animais selvagens. Usado apenas para trabalhar conceitos do Grid Layout e algumas coisas de UI&UX',
    technologies: 'HTML e CSS',
    github: 'https://github.com/gabrielalencardearaujo/WildBeast_Website',
    src: WildBeast,
    alt: 'Projeto academico desenvolvido nas aulas de grid layout. Site sobre animais selvagens'
  },
  {
    url: '',
    title: 'Cronômetro',
    describe: 'Um dos primeiros projetos que desenvolvi. Um cronômetro simples com play, pause e resete. ',
    technologies: 'HTML, CSS e Javascript',
    github: 'https://github.com/gabrielalencardearaujo/Stopwatch_Project',
    src: StopWatch,
    alt: 'Cronômetro Simples'
  },
  {
    url: '',
    title: 'Calculadora',
    describe: 'Meu primeiro projeto, uma calculadora. Não é científica, apenas utiliza as quatro operações básicas da matemática.',
    technologies: 'HTML, CSS e Javascript',
    github: 'https://github.com/gabrielalencardearaujo/simple_calculator',
    src: Calculator,
    alt: 'Calculadora Simples'
  },
  {
    url: '',
    title: 'LandingPage Agência Financeira',
    describe: 'Projeto desenvolvido nas aulas de HTML e CSS do Curso de Desenvolvimento Web - Jamilton Damasceno e Jorge Sant Ana na Udemy. Um dos primeiros projetos que desenvolvi, é apenas uma página simulando ser um site de uma agência (contadora) para gestão financeira.',
    technologies: 'HTML e CSS',
    github: 'https://github.com/gabrielalencardearaujo/Projeto-Finans-exercise',
    src: LandingPageFinans,
    alt: 'LandingPage Agência de Finanças.'
  },
  {
    url: '',
    title: 'Sistema de Financiamento Imóveis',
    describe: 'Projeto desenvolvido nas aulas de Programação Orientada a Objetos no curso de Análise e Desenvolvimento de Sistemas da PUCPR. Projeto inteiramente feito com Java, os registros são salvos em um arquivo dentro da aplicação e há três tipos de financiamento: Casa, apartamento e terreno.',
    technologies: 'JAVA',
    github: 'https://github.com/gabrielalencardearaujo/Java_Finance_Realty',
    src: NonImage,
    alt: 'Sistema de Financiamento de Imóveis'
  },
]