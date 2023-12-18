import logoPUCPR from '../assets/img/Certificates/logo-PUCPR.jpg';
import logoUFPE from '../assets/img/Certificates/Logo-ufpe-2-2.jpg';
import certificadoWebCompleto from '../assets/img/Certificates/certificadoWebCompleto.png';
import ReactCompleto from '../assets/img/Certificates/React_Completo.png';
import ReactTypescript from '../assets/img/Certificates/React_Typescript.png';
import TypescriptIniciantes from '../assets/img/Certificates/Typescript_Iniciantes.png';
import GitGithubGuanabara from '../assets/img/Certificates/CursoEmVideo_GITGITHUB.png';
import CSSGridLayout from '../assets/img/Certificates/CSS_Grid_Layout.png';
import CSSAvancado from '../assets/img/Certificates/CSS_Avancado.png';
import CSSFlexbox from '../assets/img/Certificates/CSS_Flexbox.png';
import SASS from '../assets/img/Certificates/CSS_SASS.png';
import UiDesign from '../assets/img/Certificates/UI_Design_Iniciantes.png';
import JQuery from '../assets/img/Certificates/JQuery.png';
import PDF_certificadoWebCompleto from '../assets/img/Certificates/PDFs/DesenvolvimentoWeb_Udemy.pdf';


export type TypeJsonFormation = {
  src: string,
  describe: string
  dateStart: string,
  dateEnd: string,
  pdf?: string,
}

export const jsonFormatCardCertificate: TypeJsonFormation[] = [
  {
    src: logoPUCPR,
    describe: "Cursando Análise e Desenvolvimento de Sistemas na PUCPR",
    dateStart: "Abr/2023",
    dateEnd: "Jul/2025",
  },
  {
    src: certificadoWebCompleto,
    pdf: PDF_certificadoWebCompleto,
    describe: "Curso Online de Desenvolvimento Web Completo - Udemy - 117 horas",
    dateStart: "Abr/2023",
    dateEnd: "Dez/2023",
  },
  {
    src: logoUFPE,
    describe: "Formado em Matemática pela Universidade Federal de Pernambuco - UFPE",
    dateStart: "Mar/2016",
    dateEnd: "Dez/2022",
  },
  {
    src: GitGithubGuanabara,
    describe: "Curso Online de Git/Github no Curso em Video - 20 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: UiDesign,
    describe: "Curso Online de UI Design para Iniciantes na Origamid - 34 horas",
    dateStart: "Jul/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: JQuery,
    describe: "Curso Online de JQuery na Origamid - 18 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: ReactCompleto,
    describe: "Curso Online de React.JSX na Origamid - 36 horas",
    dateStart: "Out/2023",
    dateEnd: "Out/2023",
  },
  {
    src: ReactTypescript,
    describe: "Curso Online de React com Typescript na Origamid - 10 horas",
    dateStart: "Nov/2023",
    dateEnd: "Nov/2023",
  },
  {
    src: TypescriptIniciantes,
    describe: "Curso Online de Typescript na Origamid - 22 horas",
    dateStart: "Set/2023",
    dateEnd: "Set/2023",
  },
  {
    src: CSSGridLayout,
    describe: "Curso Online de CSS - Grid Layout na Origamid - 10 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: CSSAvancado,
    describe: "Curso Online de CSS Avançado na Origamid - 18 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: CSSFlexbox,
    describe: "Curso Online de CSS Flexbox na Origamid - 6 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: SASS,
    describe: "Curso Online de SASS na Origamid - 12 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
]

