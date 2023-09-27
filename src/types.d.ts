interface StarshipsData {
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
}

interface Starship {
    name: string;
    consumables: string;
    MGLT: string;
    number_of_stops: string;
    url: string;
}