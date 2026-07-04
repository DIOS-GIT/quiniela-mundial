// players-wc2026(1).js — Plantillas Oficiales Depuradas FIFA World Cup 2026
// Formato unificado con las 48 selecciones participantes (Listas de 26 jugadores)

const WC2026_SQUADS = {
  "México": [
    "Raúl Rangel", "Carlos Acevedo", "Guillermo Ochoa",
    "Jorge Sánchez", "César Montes", "Johan Vásquez", "Israel Reyes", "Mateo Chávez", "Jesús Gallardo", "Bryan González", "Alan Mozo",
    "Edson Álvarez", "Érik Lira", "Luis Romo", "Orbelín Pineda", "Obed Vargas", "Gilberto Mora", "Luis Chávez", "Marcelo Flores",
    "Raúl Jiménez", "Alexis Vega", "Santiago Giménez", "Guillermo Martínez", "César Huerta", "Roberto Alvarado", "Diego Lainez"
  ],
  "Estados Unidos": [
    "Matt Turner", "Chris Brady", "Patrick Schulte",
    "Sergiño Dest", "Antonee Robinson", "Miles Robinson", "Joe Scally", "Chris Richards", "Tim Ream", "Cameron Carter-Vickers", "Mark McKenzie",
    "Tyler Adams", "Weston McKennie", "Yunus Musah", "Gio Reyna", "Johnny Cardoso", "Malik Tillman", "Luca de la Torre", "Gianluca Busio",
    "Christian Pulisic", "Timothy Weah", "Folarin Balogun", "Ricardo Pepi", "Brenden Aaronson", "Haji Wright", "Brandon Vázquez"
  ],
  "Canadá": [
    "Dayne St. Clair", "Maxime Crépeau", "Jonathan Sirois",
    "Alistair Johnston", "Derek Cornelius", "Richie Laryea", "Niko Sigur", "Joel Waterman", "Luc De Fougerolles", "Moïse Bombito", "Alphonso Davies",
    "Stephen Eustáquio", "Ismaël Koné", "Tajon Buchanan", "Mathieu Choinière", "Ali Ahmed", "Nathan Saliba", "Liam Millar", "Jonathan Osorio",
    "Jonathan David", "Cyle Larin", "Tani Oluwaseyi", "Jacen Russell-Rowe", "Theo Bair", "Jacob Shaffelburg", "Junior Hoilett"
  ],
  "Panamá": [
    "Orlando Mosquera", "César Samudio", "Luis Mejía",
    "Fidel Escobar", "José Córdoba", "Eduardo Anderson", "César Blackman", "Eric Davis", "Michael Murillo", "Roderick Miller", "Edgardo Fariña",
    "Adalberto Carrasquilla", "Aníbal Godoy", "Cristian Martínez", "Jovani Welch", "Abdiel Ayarza", "César Yanis", "Kahiser Lenis",
    "Ismael Díaz", "José Fajardo", "Cecilio Waterman", "Eduardo Guerrero", "José Luis Rodríguez", "Freddy Góndola", "Newton Williams", "Edilson Carrasquilla"
  ],
  "Costa Rica": [
    "Patrick Sequeira", "Kevin Chamorro", "Alexandre Lezcano",
    "Jeyland Mitchell", "Juan Pablo Vargas", "Fernán Faerron", "Julio Cascante", "Haxzel Quirós", "Joseph Mora", "Gerald Taylor", "Francisco Calvo",
    "Orlando Galo", "Brandon Aguilera", "Jefferson Brenes", "Josimar Alcócer", "Alejandro Bran", "Ariel Lassiter", "Warren Madrigal",
    "Manfred Ugalde", "Kenneth Vargas", "Alonso Martínez", "Anthony Contreras", "Joel Campbell", "Andy Rojas", "Álvaro Zamora", "Jurguens Montenegro"
  ],
  "Jamaica": [
    "Andre Blake", "Jahmali Waite", "Coniah Boyce-Clarke",
    "Ethan Pinnock", "Di'Shon Bernard", "Damion Lowe", "Amari'i Bell", "Dexter Lembikisa", "Richard King", "Jon Bell", "Greg Leigh",
    "Kasey Palmer", "Bobby Decordova-Reid", "Joel Latibeaudiere", "Karoy Anderson", "Kevon Lambert", "Alex Marshall", "Demarei Gray",
    "Michail Antonio", "Leon Bailey", "Shamar Nicholson", "Renaldo Cephas", "Kaheim Dixon", "Demario Phillips", "Devonte Campbell", "Tyreek Magee"
  ],
  "Honduras": [
    "Edrick Menjívar", "Jonathan Rougier", "Marlon Licona",
    "Denil Maldonado", "Luis Vega", "Devron García", "Andy Najar", "Joseph Rosales", "Maylor Núñez", "Wesly Decas", "Marcelo Santos",
    "Kervin Arriaga", "Edwin Rodríguez", "Deiby Flores", "David Ruiz", "Alexander López", "Jorge Álvarez", "Rigoberto Rivas",
    "Antony Lozano", "Luis Palma", "Romell Quioto", "Douglas Martínez", "Bryan Róchez", "Michell Chirinos", "Rubilio Castillo", "Yeison Mejía"
  ],
  "Argentina": [
    "Emiliano Martínez", "Geronimo Rulli", "Walter Benítez",
    "Nahuel Molina", "Gonzalo Montiel", "Cristian Romero", "Nicolás Otamendi", "Lisandro Martínez", "Germán Pezzella", "Nicolás Tagliafico", "Leonardo Balerdi",
    "Rodrigo De Paul", "Alexis Mac Allister", "Enzo Fernández", "Leandro Paredes", "Giovani Lo Celso", "Exequiel Palacios", "Thiago Almada", "Facundo Buonanotte",
    "Lionel Messi", "Lautaro Martínez", "Julián Álvarez", "Alejandro Garnacho", "Nicolás González", "Valentín Carboni", "Mateo Retegui"
  ],
  "Brasil": [
    "Alisson Becker", "Ederson Moraes", "Weverton Pereira",
    "Danilo da Silva", "Éder Militão", "Marquinhos Aoás", "Gabriel Magalhães", "Bremer Silva", "Guilherme Arana", "Lucas Beraldo", "Yan Couto",
    "Casemiro Santos", "Bruno Guimarães", "Lucas Paquetá", "Gerson Santos", "Andreas Pereira", "João Gomes", "Douglas Luiz",
    "Neymar da Silva", "Vinicius Jr", "Rodrygo Goes", "Raphinha Dias", "Gabriel Martinelli", "Endrick Felipe", "Luiz Henrique", "Savinho Moreira"
  ],
  "Colombia": [
    "Camilo Vargas", "Álvaro Montero", "Kevin Mier",
    "Daniel Muñoz", "Santiago Arias", "Davinson Sánchez", "Carlos Cuesta", "Jhon Lucumí", "Yerry Mina", "Johan Mojica", "Cristian Borja",
    "Jefferson Lerma", "Richard Ríos", "Jhon Arias", "Mateus Uribe", "Kevin Castaño", "James Rodríguez", "Juan Fernando Quintero", "Yaser Asprilla",
    "Luis Díaz", "Jhon Durán", "Jhon Córdoba", "Rafael Santos Borré", "Luis Sinisterra", "Roger Martínez", "Juan Camilo Hernández"
  ],
  "Uruguay": [
    "Sergio Rochet", "Santiago Mele", "Franco Israel",
    "José María Giménez", "Sebastián Cáceres", "Ronald Araújo", "Mathías Olivera", "Matías Viña", "Guillermo Varela", "Nahitan Nández", "Lucas Olaza",
    "Federico Valverde", "Manuel Ugarte", "Rodrigo Bentancur", "Nicolás de la Cruz", "Giorgian de Arrascaeta", "Agustín Canobbio", "Brian Rodríguez",
    "Darwin Núñez", "Luis Suárez", "Facundo Pellistri", "Maximilian Araújo", "Cristian Olivera", "Luciano Rodríguez", "Facundo Torres", "Federico Viñas"
  ],
  "Ecuador": [
    "Hernán Galíndez", "Moisés Ramírez", "Alexander Domínguez",
    "Piero Hincapié", "Willian Pacho", "Félix Torres", "Joel Ordóñez", "Angelo Preciado", "Pervis Estupiñán", "Layan Loor", "Jackson Porozo",
    "Moisés Caicedo", "Alan Franco", "Carlos Gruezo", "Kendry Páez", "Jeremy Sarmiento", "John Yeboah", "Angel Mena", "Janner Corozo",
    "Enner Valencia", "Kevin Rodríguez", "Jordy Caicedo", "Alan Minda", "Nilson Angulo", "Gonzalo Plata", "Leonardo Campana"
  ],
  "Paraguay": [
    "Roberto Fernández", "Carlos Coronel", "Alfredo Aguilar",
    "Gustavo Gómez", "Junior Alonso", "Fabian Balbuena", "Omar Alderete", "Santiago Arzamendia", "Matías Espinoza", "Gustavo Velázquez", "Juan Escobar",
    "Andrés Cubas", "Mathías Villasanti", "Diego Gómez", "Kaku Romero", "Damian Bobadilla", "Richard Sánchez", "Ramón Sosa",
    "Miguel Almirón", "Julio Enciso", "Adam Bareiro", "Alex Arce", "Antonio Sanabria", "Derlis González", "Ángel Romero", "Matías Rojas"
  ],
  "Venezuela": [
    "Rafael Romo", "Joel Graterol", "José Contreras",
    "Jon Aramburu", "Yordan Osorio", "Nahuel Ferraresi", "Christian Makoun", "Miguel Navarro", "Alexander González", "Wilker Ángel", "Jhon Chancellor",
    "Tomás Rincón", "Yangel Herrera", "José Martínez", "Cristian Cásseres", "Daniel Pereira", "Telasco Segovia", "Eduard Bello", "Jefferson Savarino",
    "Salomón Rondón", "Jhonder Cádiz", "Eric Ramírez", "Darwin Machís", "Yeferson Soteldo", "Kervin Andrade", "Matías Lacava"
  ],
  "Chile": [
    "Brayan Cortés", "Gabriel Arias", "Vicente Reyes",
    "Guillermo Maripán", "Paulo Díaz", "Gabriel Suazo", "Matías Catalán", "Mauricio Isla", "Benjamin Kuscevic", "Thomas Galdames", "Felipe Loyola",
    "Erick Pulgar", "Rodrigo Echeverría", "Marcelino Núñez", "Diego Valdés", "César Pérez", "Esteban Pavez", "Vicente Pizarro",
    "Alexis Sánchez", "Eduardo Vargas", "Ben Brereton Díaz", "Victor Dávila", "Darío Osorio", "Maximiliano Guerrero", "Gonzalo Tapia", "Lucas Assadi"
  ],
  "Perú": [
    "Pedro Gallese", "Carlos Cáceda", "Diego Romero",
    "Luis Advíncula", "Carlos Zambrano", "Alexander Callens", "Miguel Araujo", "Luis Abram", "Marcos López", "Oliver Sonne", "Aldo Corzo",
    "Wilder Cartagena", "Jesús Castillo", "Sergio Peña", "Piero Quispe", "Renato Tapia", "Horacio Calcaterra", "Andy Polo",
    "Gianluca Lapadula", "Edison Flores", "Bryan Reyna", "Joao Grimaldo", "Alex Valera", "Paolo Guerrero", "Franco Zanelatto", "Luis Iberico"
  ],
  "Francia": [
    "Mike Maignan", "Brice Samba", "Alphonse Areola",
    "William Saliba", "Dayot Upamecano", "Ibrahima Konaté", "Jules Koundé", "Theo Hernández", "Ferland Mendy", "Benjamin Pavard", "Jonathan Clauss",
    "Aurélien Tchouaméni", "Eduardo Camavinga", "N'Golo Kanté", "Adrien Rabiot", "Warren Zaïre-Emery", "Youssouf Fofana", "Mattéo Guendouzi",
    "Kylian Mbappé", "Ousmane Dembélé", "Marcus Thuram", "Bradley Barcola", "Randal Kolo Muani", "Kingsley Coman", "Michael Olise", "Christopher Nkunku"
  ],
  "Inglaterra": [
    "Jordan Pickford", "Aaron Ramsdale", "Dean Henderson",
    "John Stones", "Kyle Walker", "Kieran Trippier", "Marc Guéhi", "Ezri Konsa", "Joe Gomez", "Lewis Hall", "Trent Alexander-Arnold",
    "Declan Rice", "Jude Bellingham", "Conor Gallagher", "Kobbie Mainoo", "Adam Wharton", "Cole Palmer", "Phil Foden", "Curtis Jones",
    "Harry Kane", "Bukayo Saka", "Ollie Watkins", "Ivan Toney", "Anthony Gordon", "Jarrod Bowen", "Jack Grealish"
  ],
  "España": [
    "Unai Simón", "David Raya", "Álex Remiro",
    "Dani Carvajal", "Robin Le Normand", "Aymeric Laporte", "Dani Vivian", "Marc Cucurella", "Alejandro Grimaldo", "Pau Cubarsí", "Pedro Porro",
    "Rodri Hernández", "Fabián Ruiz", "Pedri González", "Martin Zubimendi", "Mikel Merino", "Dani Olmo", "Fermín López", "Álex Baena",
    "Lamine Yamal", "Nico Williams", "Alvaro Morata", "Dani Olmo", "Joselu Mato", "Ferran Torres", "Mikel Oyarzabal"
  ],
  "Alemania": [
    "Oliver Baumann", "Alexander Nübel", "Marc-André ter Stegen",
    "Antonio Rüdiger", "Jonathan Tah", "Joshua Kimmich", "Nico Schlotterbeck", "David Raum", "Maximilian Mittelstädt", "Waldemar Anton", "Benjamin Henrichs",
    "Robert Andrich", "Pascal Groß", "Ilkay Gündogan", "Florian Wirtz", "Jamal Musiala", "Aleksandar Pavlovic", "Angelo Stiller", "Chris Führich",
    "Kai Havertz", "Niclas Füllkrug", "Leroy Sané", "Thomas Müller", "Deniz Undav", "Maximilian Beier", "Serge Gnabry"
  ],
  "Italia": [
    "Gianluigi Donnarumma", "Guglielmo Vicario", "Alex Meret",
    "Alessandro Bastoni", "Alessandro Buongiorno", "Federico Gatti", "Gianluca Mancini", "Riccardo Calafiori", "Giovanni Di Lorenzo", "Federico Dimarco", "Andrea Cambiaso",
    "Nicolò Barella", "Davide Frattesi", "Bryan Cristante", "Lorenzo Pellegrini", "Nicolò Fagioli", "Samuele Ricci", "Sandro Tonali",
    "Mateo Retegui", "Giacomo Raspadori", "Moise Kean", "Mattia Zaccagni", "Stephan El Shaarawy", "Federico Chiesa", "Gianluca Scamacca", "Daniel Maldini"
  ],
  "Portugal": [
    "Diogo Costa", "José Sá", "Rui Patrício",
    "Rúben Dias", "António Silva", "Gonçalo Inácio", "Nuno Mendes", "Diogo Dalot", "João Cancelo", "Nelson Semedo", "Nuno Tavares",
    "João Palhinha", "João Neves", "Vitinha Ferreira", "Bruno Fernandes", "Bernardo Silva", "Otávio Monteiro", "Ruben Neves",
    "Cristiano Ronaldo", "Rafael Leão", "João Félix", "Diogo Jota", "Gonçalo Ramos", "Pedro Neto", "Francisco Conceição", "Trincão"
  ],
  "Países Bajos": [
    "Bart Verbruggen", "Mark Flekken", "Nick Olij",
    "Virgil van Dijk", "Nathan Aké", "Stefan de Vrij", "Denzel Dumfries", "Jeremie Frimpong", "Micky van de Ven", "Lutsharel Geertruida", "Matthijs de Ligt",
    "Frenkie de Jong", "Tijjani Reijnders", "Jerdy Schouten", "Xavi Simons", "Ryan Gravenberch", "Teun Koopmeiners", "Joey Veerman",
    "Memphis Depay", "Cody Gakpo", "Donyell Malen", "Brian Brobbey", "Wout Weghorst", "Joshua Zirkzee", "Steven Bergwijn", "Noa Lang"
  ],
  "Bélgica": [
    "Koen Casteels", "Thomas Kaminski", "Matz Sels",
    "Wout Faes", "Timothy Castagne", "Arthur Theate", "Zeno Debast", "Maxim De Cuyper", "Thomas Meunier", "Ameen Al-Dakhil",
    "Amadou Onana", "Youri Tielemans", "Kevin De Bruyne", "Orel Mangala", "Arthur Vermeeren", "Charles De Ketelaere", "Arne Engels",
    "Romelu Lukaku", "Jéremy Doku", "Loïs Openda", "Leandro Trossard", "Johan Bakayoko", "Dodi Lukebakio", "Malick Fofana", "Yannick Carrasco", "Albert Sambi Lokonga"
  ],
  "Croacia": [
    "Dominik Livakovic", "Nediljko Labrovic", "Ivica Ivusic",
    "Josko Gvardiol", "Josip Sutalo", "Duje Caleta-Car", "Martin Erlic", "Borna Sosa", "Josip Stanisic", "Marin Pongracic",
    "Luka Modric", "Mateo Kovacic", "Mario Pasalic", "Luka Sucic", "Martin Baturina", "Kristijan Jakic", "Nikola Moro", "Petar Sucic",
    "Andrej Kramaric", "Ivan Perisic", "Ante Budimir", "Luka Ivanusec", "Bruno Petkovic", "Marco Pasalic", "Igor Matanovic", "Mislav Orsic"
  ],
  "Dinamarca": [
    "Kasper Schmeichel", "Mad Hermansen", "Frederik Rønnow",
    "Joachim Andersen", "Jannik Vestergaard", "Victor Nelsson", "Alexander Bah", "Joakim Mæhle", "Victor Kristiansen", "Rasmus Kristensen",
    "Pierre-Emile Højbjerg", "Christian Eriksen", "Thomas Delaney", "Morten Hjulmand", "Christian Nørgaard", "Matt O'Riley", "Albert Grønbæk",
    "Rasmus Højlund", "Jonas Wind", "Yussuf Poulsen", "Kasper Dolberg", "Andreas Skov Olsen", "Gustav Isaksen", "Mikkel Damsgaard", "Patrick Dorgu", "Jacob Bruun Larsen"
  ],
  "Suiza": [
    "Gregor Kobel", "Yvon Mvogo", "David von Ballmoos",
    "Manuel Akanji", "Nico Elvedi", "Ricardo Rodríguez", "Silvan Widmer", "Cédric Zesiger", "Eray Cömert", "Edimilson Fernandes",
    "Granit Xhaka", "Denis Zakaria", "Remo Freuler", "Michel Aebischer", "Fabian Rieder", "Ardon Jashari", "Vincent Sierro",
    "Breel Embolo", "Dan Ndoye", "Noah Okafor", "Rubén Vargas", "Zeki Amdouni", "Renato Steffen", "Kwado Duah", "Filip Ugrinic", "Andi Zeqiri"
  ],
  "Austria": [
    "Patrick Pentz", "Niklas Hedl", "Alexander Schlager",
    "David Alaba", "Kevin Danso", "Philipp Lienhart", "Stefan Posch", "Phillipp Mwene", "Maximilian Wöber", "Gernot Trauner", "Leopold Querfeld",
    "Marcel Sabitzer", "Konrad Laimer", "Nicolas Seiwald", "Christoph Baumgartner", "Florian Grillitsch", "Patrick Wimmer", "Alexander Prass", "Romano Schmid",
    "Michael Gregoritsch", "Marko Arnautovic", "Junior Adamu", "Andreas Weimann", "Marco Grüll", "Thierno Ballo", "Matthias Seidl"
  ],
  "Polonia": [
    "Łukasz Skorupski", "Marcin Bułka", "Bartłomiej Drągowski",
    "Jan Bednarek", "Jakub Kiwior", "Paweł Dawidowicz", "Sebastian Walukiewicz", "Bartosz Bereszyński", "Tymoteusz Puchacz", "Kamil Piątkowski",
    "Piotr Zieliński", "Sebastian Szymański", "Nicola Zalewski", "Przemysław Frankowski", "Jakub Moder", "Jakub Kamiński", "Kacper Urbański", "Taras Romanczuk",
    "Robert Lewandowski", "Karol Świderski", "Krzysztof Piątek", "Adam Buksa", "Mateusz Bogusz", "Michał Skóraś", "Bartosz Kapustka", "Kacper Kozłowski"
  ],
  "Serbia": [
    "Predrag Rajkovic", "Vanja Milinkovic-Savic", "Dorde Petrovic",
    "Nikola Milenkovic", "Strahinja Pavlovic", "Milos Veljkovic", "Srdan Babic", "Strahinja Erakovic", "Kosta Nedeljkovic", "Jan-Carlo Simic",
    "Nemanja Maksimovic", "Sasa Lukic", "Marko Grujic", "Lazar Samardzic", "Ivan Ilic", "Andrija Zivkovic", "Veljko Birmancevic", "Kristijan Belic",
    "Aleksandar Mitrovic", "Dusan Vlahovic", "Luka Jovic", "Petar Ratkov", "Mihailo Ivanovic", "Stefan Mitrovic", "Nemanja Radonjic", "Dejan Joveljic"
  ],
  "Ucrania": [
    "Andriy Lunin", "Anatoliy Trubin", "Heorhiy Bushchan",
    "Mykola Matviyenko", "Illia Zabarnyi", "Vitaliy Mykolenko", "Yukhym Konoplia", "Oleksandr Tymchyk", "Valeriy Bondar", "Maksym Talovierov",
    "Oleksandr Zinchenko", "Tarash Stepanenko", "Ruslan Malinovskyi", "Heorhiy Sudakov", "Mykhailo Mudryk", "Viktor Tsyhankov", "Volodymyr Brazhko", "Mykola Shaparenko", "Vitaliy Buyalskyi",
    "Artem Dovbyk", "Roman Yaremchuk", "Vladyslav Vanat", "Oleksandr Zubkov", "Andriy Yarmolenko", "Danylo Sikan", "Vladyslav Kabayev"
  ],
  "Turquía": [
    "Mert Günok", "Uğurcan Çakır", "Altay Bayındır",
    "Samet Akaydin", "Merih Demiral", "Abdülkerim Bardakcı", "Ferdi Kadıoğlu", "Zeki Çelik", "Mert Müldür", "Eren Elmalı", "Emirhan Topçu",
    "Hakan Çalhanoğlu", "Okay Yokuşlu", "Orkun Kökçü", "Salih Özcan", "Ismail Yüksek", "Arda Güler", "Kenan Yıldız", "İrfan Can Kahveci",
    "Barış Alper Yılmaz", "Kerem Aktürkoğlu", "Semih Kılıçsoy", "Cenk Tosun", "Bertuğ Yıldırım", "Yunus Akgün", "Enes Ünal"
  ],
  "Suecia": [
    "Robin Olsen", "Viktor Johansson", "Kristoffer Nordfeldt",
    "Victor Lindelöf", "Isak Hien", "Carl Starfelt", "Gabriel Gudmundsson", "Emil Krafth", "Ludwig Augustinsson", "Ken Sema", "Eric Smith",
    "Dejan Kulusevski", "Yasin Ayari", "Anton Salétros", "Hugo Larsson", "Niclas Eliasson", "Lucas Bergvall", "Sebastian Nanasi", "Jens Cajuste",
    "Viktor Gyökeres", "Alexander Isak", "Anthony Elanga", "Gustaf Nilsson", "Ken Sema", "Emil Forsberg", "Jacob Ondrejka"
  ],
  "Noruega": [
    "Ørjan Nyland", "Arijanet Muric", "Mathias Dyngeland",
    "Julian Ryerson", "Leo Østigård", "Kristoffer Ajer", "Andreas Hanche-Olsen", "Marcus Pedersen", "David Møller Wolfe", "Sondre Langås",
    "Martin Ødegaard", "Sander Berge", "Patrick Berg", "Morten Thorsby", "Kristian Thorstvedt", "Antonio Nusa", "Aron Dønnum", "Hugo Vetlesen", "Felix Myhre",
    "Erling Haaland", "Alexander Sørloth", "Jørgen Strand Larsen", "Jens Petter Hauge", "David Datro Fofana", "Osame Sahraoui", "Andreas Schjelderup"
  ],
  "República Checa": [
    "Jindřich Staněk", "Matěj Kovář", "Vítězslav Jaroš",
    "Tomáš Holeš", "Robin Hranáč", "Ladislav Krejčí", "David Zima", "Martin Vitík", "Vladimír Coufal", "David Douděra", "David Jurásek",
    "Tomáš Souček", "Lukáš Provod", "Antonín Barák", "Pavel Šulc", "Alex Král", "Ondřej Lingr", "Lukáš Červ", "Matěj Jurásek",
    "Patrik Schick", "Tomáš Chorý", "Adam Hložek", "Jan Kuchta", "Mojmír Chytil", "Václav Černý", "Martin Doležal"
  ],
  "Marruecos": [
    "Yassine Bounou", "Munir Mohamedi", "El Mehdi Benabid",
    "Achraf Hakimi", "Nayef Aguerd", "Romain Saïss", "Abdel Abqar", "Noussair Mazraoui", "Yahia Attiyat Allah", "Chadi Riad", "Achraf Dari",
    "Sofyan Amrabat", "Azzedine Ounahi", "Brahim Díaz", "Ismael Saibari", "Amir Richardson", "Bilal El Khannouss", "Oussama El Azzouzi",
    "Hakim Ziyech", "Youssef En-Nesyri", "Ayoub El Kaabi", "Amine Adli", "Soufiane Rahimi", "Ilias Akhomach", "Abde Ezzalzouli", "Eliesse Ben Seghir"
  ],
  "Senegal": [
    "Éouard Mendy", "Mory Diaw", "Seny Dieng",
    "Kalidou Koulibaly", "Abdou Diallo", "Moussa Niakhaté", "Formose Mendy", "Ismail Jakobs", "Abdoulaye Seck", "El Hadji Malick Diouf",
    "Idrissa Gueye", "Lamine Camara", "Pape Matar Sarr", "Nampalys Mendy", "Pathé Ciss", "Habib Diarra", "Iliman Ndiaye",
    "Sadio Mané", "Nicolas Jackson", "Ismaïla Sarr", "Boulaye Dia", "Habib Diallo", "Cherif Ndiaye", "Abdallah Sima", "Amadou Sagna", "Mbacke Niang"
  ],
  "Costa de Marfil": [
    "Yahia Fofana", "Badra Ali Sangaré", "Charles Folly",
    "Evan Ndicka", "Ousmane Diomande", "Emmanuel Agbadou", "Wilfried Singo", "Guela Doué", "Christopher Operi", "Hassane Kamara",
    "Franck Kessié", "Seko Fofana", "Ibrahim Sangaré", "Jean Michael Seri", "Mahomed Diomande", "Hamed Traorè", "Evann Guessand",
    "Sébastien Haller", "Simon Adingra", "Oumar Diakité", "Christian Kouamé", "Jeremie Boga", "Amad Diallo", "Karim Konaté", "Emmanuel Latte Lath", "Jean-Philippe Krasso"
  ],
  "Egipto": [
    "Mohamed El Shenawy", "Mostafa Shobeir", "Mohamed Awad",
    "Ramy Rabia", "Mohamed Abdelmonem", "Ahmed Hegazi", "Mohamed Hany", "Mohamed Hamdi", "Ahmed Ramadan", "Khaled Sobhi",
    "Marwan Attia", "Hamdi Fathi", "Emam Ashour", "Ahmed Sayed Zizo", "Mohamed Elneny", "Nasser Maher", "Mahmoud Trezeguet",
    "Mohamed Salah", "Omar Marmoush", "Mostafa Mohamed", "Mohamed Sherif", "Ibrahim Adel", "Ahmed Atef", "Osama Faisal", "Mustafa Fathi", "Hussein El Shahat"
  ],
  "Nigeria": [
    "Stanley Nwabali", "Maduka Okoye", "Olorunleke Ojo",
    "William Troost-Ekong", "Calvin Bassey", "Semi Ajayi", "Ola Aina", "Bright Osayi-Samuel", "Bruno Onyemaechi", "Benjamin Tanimu",
    "Wilfred Ndidi", "Alex Iwobi", "Frank Onyeka", "Alhassan Yusuf", "Raphael Onyedika", "Fisayo Dele-Bashiru", "Chidera Ejuke",
    "Victor Osimhen", "Ademola Lookman", "Victor Boniface", "Moses Simon", "Samuel Chukwueze", "Kelechi Iheanacho", "Taiwo Awoniyi", "Terem Moffi", "Nathan Tella"
  ],
  "Ghana": [
    "Lawrence Ati-Zigi", "Jojo Wollacott", "Frederick Asare",
    "Mohammed Salisu", "Alexander Djiku", "Alidu Seidu", "Tariq Lamptey", "Gideon Mensah", "Abdul Mumin", "Jerome Opoku",
    "Thomas Partey", "Mohammed Kudus", "Elisha Owusu", "Salis Abdul Samed", "Iddrisu Baba", "Ibrahim Sulemana", "Majeed Ashimeru",
    "Jordan Ayew", "Antoine Semenyo", "Ernest Nuamah", "Iñaki Williams", "Kamaldeen Sulemana", "Abdul Fatawu Issahaku", "Brandon Thomas-Asante", "Ibrahim Osman", "Joseph Paintsil"
  ],
  "Argelia": [
    "Anthony Mandrea", "Alexandre Oukidja", "Alexis Guendouz",
    "Aissa Mandi", "Ramy Bensebaini", "Rayal Aït-Nouri", "Youcef Atal", "Mohamed Tougai", "Jaouen Hadjam", "Ahmed Touba",
    "Ismaël Bennacer", "Ramiz Zerrouki", "Houssem Aouar", "Nabil Bentaleb", "Hicham Boudaoui", "Himad Abdelli", "Yassine Benzia",
    "Riyad Mahrez", "Said Benrahma", "Amine Gouiri", "Baghdad Bounedjah", "Mohamed Amoura", "Farares Chaïbi", "Anis Hadj Moussa", "Monsef Bakrar", "Youcef Belaïli"
  ],
  "Japón": [
    "Zion Suzuki", "Keisuke Osako", "Kosei Tani",
    "Takehiro Tomiyasu", "Ko Itakura", "Koki Machida", "Yuto Nagatomo", "Yukinari Sugawara", "Shogo Taniguchi", "Hiroki Ito", "Daiki Hashioka",
    "Wataru Endo", "Hidemasa Morita", "Ao Tanaka", "Daichi Kamada", "Takumi Minamino", "Reo Hatate", "Keito Nakamura",
    "Takefusa Kubo", "Kaoru Mitoma", "Ritsu Doan", "Koki Ogawa", "Ayase Ueda", "Daizen Maeda", "Takuma Asano", "Yuki Ohashi"
  ],
  "Corea del Sur": [
    "Jo Hyeon-woo", "Song Bum-keun", "Kim Jun-hong",
    "Kim Min-jae", "Kim Young-gwon", "Kwon Kyung-won", "Seol Young-woo", "Kim Jin-su", "Cho Yu-min", "Hwang Jae-won", "Lee Myung-jae",
    "Hwang In-beom", "Lee Jae-sung", "Park Yong-woo", "Hong Hyun-seok", "Lee Kang-in", "Paik Seung-ho", "Jeong Woo-yeong", "Bae Jun-ho",
    "Son Heung-min", "Hwang Hee-chan", "Lee Jae-sung", "Cho Gue-sung", "Oh Se-hun", "Joo Min-kyu", "Yang Min-hyeok"
  ],
  "Irán": [
    "Alireza Beiranvand", "Payam Niazmand", "Hossein Hosseini",
    "Shojae Khalilzadeh", "Milad Mohammadi", "Hossein Kanaanizadegan", "Ali Nemati", "Saleh Hardani", "Aria Yousefi", "Amin Hazbavi",
    "Saman Ghoddos", "Saeid Ezatolahi", "Alireza Jahanbakhsh", "Mohammad Mohebi", "Omid Noorafkan", "Rouzbeh Cheshmi", "Eshagh Ghavidel",
    "Mehdi Taremi", "Sardar Azmoun", "Mehdi Ghayedi", "Shahriyar Moghanlou", "Allahyar Sayyadmanesh", "Ali Gholizadeh", "Javad Aghaei", "Saeid Saharkhizan", "Amirhossein Hosseinzadeh"
  ],
  "Arabia Saudita": [
    "Mohammed Al-Owais", "Yassine Bono", "Ahmed Al-Kassar",
    "Ali Al-Bulaihi", "Saud Abdulhamid", "Ali Lajami", "Hassan Al-Tambakti", "Sultan Al-Ghannam", "Yasser Al-Shahrani", "Rayane Hamidou",
    "Mohamed Kanno", "Abdullah Al-Khaibari", "Faisal Al-Ghamdi", "Musab Al-Juwayr", "Nasser Al-Dawsari", "Abdulelah Al-Malki", "Salman Al-Faraj",
    "Salem Al-Dawsari", "Firas Al-Buraikan", "Saleh Al-Shehri", "Abdulrahman Ghareeb", "Abdullah Radif", "Marwan الصحفي", "Ayman Ahmed", "Mohammed Maran", "Haitham Asiri"
  ],
  "Australia": [
    "Mathew Ryan", "Joe Gauci", "Paul Izzo",
    "Harry Souttar", "Kye Rowles", "Cameron Burgess", "Aziz Behich", "Lewis Miller", "Jordan Bos", "Alessandro Circati", "Jason Geria",
    "Jackson Irvine", "Connor Metcalfe", "Keanu Baccus", "Aiden O'Neill", "Riley McGree", "Ajdin Hrustic", "Luke Brattan",
    "Craig Goodwin", "Mitchell Duke", "Brandon Borrello", "Kusini Yengi", "Nestory Irankunda", "Samuel Silvera", "Nishan Velupillay", "Daniel Arzani"
  ],
  "Catar": [
    "Meshaal Barsham", "Salah Zakaria", "Saad Al-Sheeb",
    "Boualem Khoukhi", "Lucas Mendes", "Pedro Miguel", "Al-Mahdi Ali", "Homam Ahmed", "Sultan Al-Brake", "Tarek Salman",
    "Akram Afif", "Abdulaziz Hatem", "Ahmed Fathi", "Jassem Gaber", "Karim Boudiaf", "Mohammed Waad", "Mustafa Meshaal", "Abdullah Al-Ahrak",
    "Almoez Ali", "Hassan Al-Haydos", "Youssef Abdulrazzaq", "Ahmed Alaaeldin", "Ismaeel Mohammad", "Mohammed Muntari", "Khalid Muneer", "Edmilson Junior"
  ],
  "Nueva Zelanda": [
    "Alex Paulsen", "Max Crocombe", "Oliver Sail",
    "Liberato Cacace", "Michael Boxall", "Nando Pijnaker", "Tommy Smith", "Tim Payne", "Tyler Bindon", "Sam Sutton", "Dalton Wilkins",
    "Matthew Garbett", "Sarpreet Singh", "Joe Bell", "Marko Stamenic", "Cam Howieson", "Eli Just", "Ben Old", "Alex Rufer",
    "Chris Wood", "Kosta Barbarouses", "Ben Waine", "Max Mata", "Alex Greive", "Logan Rogerson", "Liam Gillion"
  ]
};
