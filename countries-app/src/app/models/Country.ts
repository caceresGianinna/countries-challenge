export interface Country {
    name: string;
    capital: string;
    topLevelDomain: string[];
    region: string;
    subregion: string;
    population: number;
    area: number;
    borders: string[];
    nativeName: string;
    currencies: string;
    languages: string;
    flag: string;
}

export interface CountryResponse {
    name: string;
    capital: string;
    topLevelDomain: string[];
    region: string;
    subregion: string;
    population: number;
    area: number;
    borders: string[];
    nativeName: string;
    currencies: Currency[];
    languages: Language[];
    flag: string;
}



interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Currency { 
    code: string;
    name: string;
    symbol: string;
}