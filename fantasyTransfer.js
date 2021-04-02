const fantasyTransfers = {
    playerNames: ['Lional Messi', 'Cristiao Ronaldo', 'Neymar Jr.', 'Robert Lewandowski', 'Karim Benzema', 'Gerard Moreno', 'Jadon Sancho', 'Toni Kroos', 'Thiago Silva', 'Antoine Griezmann', 'Rodri', 'Joao Cancelo', 'John Stones', 'Kevin De Bruyne', 'Ruben Dias', 'Andre Silva', 'Nico Elvedi', 'Jordi Alba', 'Ilkay Gundogan', 'Diogo Jota'],
    clubs: ['Real Madrid', 'Barcelona', 'Ajax', 'Porto', 'Juventus', 'Inter Milan', 'AC Milan', 'Manchester United', 'Manchester City', 'Chelsea', 'Sporting Lisbon', 'PSV Eindhoven', 'Bayern Munich', 'Paris Saint-Germain', 'Borussia Dortmund', 'Liverpool', 'Tottenham', 'Athltico Madrid', 'Lyon', 'Napoli'],
    value: ['15 Million', '20 Million', '30 Million', '40 Million', '50 Million', '60 Million', '70 Million', '80 Million', '90 Million', '100 Million', '110 Million', '120 Million', '130 Million', '140 Million', '150 Million', '160 Million', '170 Million', '180 Million', '190 Million', '200 Million'],
};

const randomTransfer = () => {
    let playerNames = Math.floor(Math.random() * fantasyTransfers.playerNames.length);
    let clubs = Math.floor(Math.random() * fantasyTransfers.clubs.length);
    let value = Math.floor(Math.random() * fantasyTransfers.value.length);
    console.log(`${fantasyTransfer.clubs[clubs]} have signed ${fantasyTransfers.playerNames[playerNames]} for a fee of ${fantasyTransfers.value[value]}.`);
};

randomTransfer();
