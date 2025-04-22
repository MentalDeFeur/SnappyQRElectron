# Electron Agenda App

## Description
L'application Electron Agenda permet aux utilisateurs de saisir des informations sur des rendez-vous, y compris le nom du rendez-vous et la date au format iCal. Une fois les informations saisies, l'utilisateur peut cliquer sur le bouton "Validez" pour générer un QRCode représentant les détails du rendez-vous.

## Structure du projet
Le projet est organisé comme suit :

```
electron-agenda-app
├── src
│   ├── main.js          # Point d'entrée principal de l'application Electron
│   ├── renderer.js      # Logique de l'interface utilisateur
│   ├── index.html       # Structure HTML de l'application
│   └── styles
│       └── style.css    # Styles CSS pour l'application
├── package.json         # Configuration npm et dépendances
├── .gitignore           # Fichiers et dossiers à ignorer par Git
└── README.md            # Documentation du projet
```

## Prérequis
- Node.js (version 12 ou supérieure)
- npm (généralement inclus avec Node.js)

## Installation
1. Clonez le dépôt :
   ```
   git clone <URL_DU_DEPOT>
   cd electron-agenda-app
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

## Exécution de l'application
Pour démarrer l'application, utilisez la commande suivante :
```
npm start
```

## Fonctionnalités
- Saisie du nom du rendez-vous
- Saisie de la date du rendez-vous au format iCal
- Génération d'un QRCode à partir des informations saisies

## Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License
Ce projet est sous licence MIT.