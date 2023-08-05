import getBussinessInfo from "../data/bussiness-info";

type Props = {};

const bussinessInfo = getBussinessInfo();

export default function Footer({}: Props) {
  return (
    <footer className="footer p-10 bg-base-200">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          {/* SVG path remains unchanged */}
        </svg>
        <p>
          {bussinessInfo.denominazione}
          <br />
          {bussinessInfo.tipoAttivita}
        </p>
      </div>
      <div>
        <span className="footer-title">Business Info</span>
        <p>
          Tippo soggeto - {bussinessInfo.tipoSoggetto}
          {/* <br />
        Data Inizio Attività: {bussinessInfo.dataInizioAttivita} */}
          <br />
          Partita IVA: {bussinessInfo.partitaIVA}
          <br />
          Titolare: {bussinessInfo.cognomeNomeTitolare}
          <br />
          Indirizzo: {bussinessInfo.domicilioFiscaleTitolare.indirizzo},{" "}
          {bussinessInfo.domicilioFiscaleTitolare.comune} (
          {bussinessInfo.domicilioFiscaleTitolare.provincia})
        </p>
      </div>
      <div>{/* Social icons section remains unchanged */}</div>
    </footer>
  );
}
