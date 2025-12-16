Projet React de création d'un labyrinthe


liste des fichiers
SRC
|-> affichage
    |-> Affichage\_grid.jsx
    |-> Labyrinthe.jsx
    |-> Presentation.jsx
|-> api
    |-> Fetch\_levels.jsx
|-> css
    |-> affichage\_grid.css
    |-> app.css
    |-> presentation.css
|-> hook
    |-> useMoving.jsx
|-> tool
    |-> vocals.jsx
|-> App.jsx
|-> Main.jsx

Lors de lancement de  l'application, "index.html" via la balise "<sript src="">" vient lancer "main.jsx"
Ce fichier lance lui même, encapsuler dans "<browerRoute>", le composant "<app />"
Cette encapsulation permet a l'application de créer un system de routage.

Dans App, il y a 2 routage actifs, 
    - le routage "/" 
        qui ouvre le composant présentation (la page d'accueil)
    - le routage "/labyrinthe/:niveau"
        qui lance le composant "<Labyrinthe />" (la page du jeu)

La page d'accueil dispose d'un bouton qui démarre le jeu
    Ce bouton "Link" via "to" redirige vers "/labyrinthe/1"
    (Le premier niveau, le début du jeu)
    Via le composant <labyrinthe />

Le composant Labyrinthe fait 2 choses
    - via le composant <FetchLevel /> il fait un appel a l'api pour récupérer le niveau
    - via le composant <AffichageGrid> affiche le labyrinthe propre sèment dit

Le composant FetchLevels prend 2 parametres
    - le paramètre de niveau, 
        qui, s'il existe sera chargé sinon, renvois un niveau par default
    - le paramètre "ondDataLoaded"
        qui permettra au composant "Labyrinthe" de récupérer les données du composant.
Ce composant utilise un hook, "useEffect" qui permet de ne s'exécuter que lorsqu'une de ces dépendances

Le composant AffichageGrid prend un parametre
    - le paramètre grille 
        qui est le labyrinthe
        (via useMouvement)

Afin de récupérer les mouvement du joueur, l'application utilise le hook "useMouvement"
Ce hook, 
    - récupère la grille
    - créé une nouvelle taille
    - trouve la case de début
    - créer un tableau des endroits déjà visité
    - récupère les mouvements
    - vérifie si le joueur peut accéder a la case demandée
        si oui, il récupère le contenu de la grille original 
        et le copie dans la nouvelle grille
        si non, il copie les coordonnée de la mauvaise case 
        dans la grille des endroits déjà visités
    - renvois la position x et y et la nouvelle grille

Le composant AffichageGrid lorsqu'il recupere la grille, recupere celle de useMouvement
    Donc il récupère les case blanche sauf la ou le joueur a déjà été 
    Ce qui a pour conséquence d'afficher le passage du joueur





Lors de l'affichage, il gere le contenu de chaque cellule de la grille 

et selon, affecte une classe a la cellule



Pour finir, j'ai ajouter un système de synthèse vocal et un algorithme qui, 

selon le contenu de la cellule, prononcera certain mots









