type BusinessInfo = {
  tipoSoggetto: string;
  tipoDichiarazione: string;
  dataInizioAttivita: string;
  codiceFiscaleTitolare: string;
  partitaIVA: string;
  cognomeNomeTitolare: string;
  denominazione: string;
  tipoAttivita: string;
  domicilioFiscaleTitolare: {
    provincia: string;
    comune: string;
    indirizzo: string;
    cap: string;
  };
};

type Car = {
  brand: string;
  model: string;
  price: number;
  km: number;
  year: number;
  horsepower: number;
  fuel: string;
  transmission: string;
  imageUrl: string;
  motorization: string;
  isNew: boolean;
  formattedPrice?: string;
};
