//Imports IMGs:
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
import Hackathon2018 from '../assets/img/Certificates/hackathon.png';
import FreeCodeCamp_JS from '../assets/img/Certificates/FreeCodeCamp_Javascript.png'

// Imports PDFs:
import PDF_certificadoWebCompleto from '../assets/img/Certificates/PDFs/DesenvolvimentoWeb_Udemy.pdf';
import CertificadoFlexBox from '../assets/img/Certificates/PDFs/certificado-flexbox.pdf';
import CertificadoCSSAvancado from '../assets/img/Certificates/PDFs/certificado-css-avancado.pdf';
import CertificadoGridLayout from '../assets/img/Certificates/PDFs/certificado-grid-layout.pdf';
import CertificadoTypescript from '../assets/img/Certificates/PDFs/certificado-Typescript.pdf';
import CertificadoUIDesign from '../assets/img/Certificates/PDFs/certificado-UI-Design.pdf';
import CertificadoJQuery from '../assets/img/Certificates/PDFs/certificado-jQuery.pdf';
import CertificadoSass from '../assets/img/Certificates/PDFs/certificado-sass.pdf';
import CertificadoReact from '../assets/img/Certificates/PDFs/certificado-react.pdf';
import CertificadoReactComTypescript from '../assets/img/Certificates/PDFs/certificado-reactTSX.pdf';
import DiplomaUFPE from '../assets/img/Certificates/PDFs/Diploma_UFPE_Gabriel_Alencar.pdf';
import Hackathon from '../assets/img/Certificates/PDFs/hackathon.pdf';
import CertificadoGITGITHUB from '../assets/img/Certificates/PDFs/Gabriel-Alencar-de-Araujo-Git-e-GitHub-20-Horas-Certificado-Curso-em-Video.pdf';

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
    src: FreeCodeCamp_JS,
    pdf: 'https://www.freecodecamp.org/certification/Galencar/javascript-algorithms-and-data-structures',
    describe: "Certificado de Estrutura de Dados com Javascript na FreeCodeCamp",
    dateStart: "Set/2023",
    dateEnd: "Jan/2023",
  },
  {
    src: logoUFPE,
    pdf: DiplomaUFPE,
    describe: "Formado em Matemática pela Universidade Federal de Pernambuco - UFPE",
    dateStart: "Mar/2016",
    dateEnd: "Dez/2021",
  },
  {
    src: Hackathon2018,
    pdf: Hackathon,
    describe: "Segundo lugar no Hackathon 2018 em Recife - Tecnologia e Educação",
    dateStart: "Mai/2018",
    dateEnd: "Mai/2018",
  },
  {
    src: GitGithubGuanabara,
    pdf: CertificadoGITGITHUB,
    describe: "Curso Online de Git/Github no Curso em Video - 20 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: UiDesign,
    pdf: CertificadoUIDesign,
    describe: "Curso Online de UI Design para Iniciantes na Origamid - 34 horas",
    dateStart: "Jul/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: JQuery,
    pdf: CertificadoJQuery,
    describe: "Curso Online de JQuery na Origamid - 18 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: ReactCompleto,
    pdf: CertificadoReact,
    describe: "Curso Online de React.JSX na Origamid - 36 horas",
    dateStart: "Out/2023",
    dateEnd: "Out/2023",
  },
  {
    src: ReactTypescript,
    pdf: CertificadoReactComTypescript,
    describe: "Curso Online de React com Typescript na Origamid - 10 horas",
    dateStart: "Nov/2023",
    dateEnd: "Nov/2023",
  },
  {
    src: TypescriptIniciantes,
    pdf: CertificadoTypescript,
    describe: "Curso Online de Typescript na Origamid - 22 horas",
    dateStart: "Set/2023",
    dateEnd: "Set/2023",
  },
  {
    src: CSSGridLayout,
    pdf: CertificadoGridLayout,
    describe: "Curso Online de CSS - Grid Layout na Origamid - 10 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: CSSAvancado,
    pdf: CertificadoCSSAvancado,
    describe: "Curso Online de CSS Avançado na Origamid - 18 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: CSSFlexbox,
    pdf: CertificadoFlexBox,
    describe: "Curso Online de CSS Flexbox na Origamid - 6 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
  {
    src: SASS,
    pdf: CertificadoSass,
    describe: "Curso Online de SASS na Origamid - 12 horas",
    dateStart: "Ago/2023",
    dateEnd: "Ago/2023",
  },
]

