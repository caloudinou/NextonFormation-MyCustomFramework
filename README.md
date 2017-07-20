# NextonFormation-MyCustomFramework

#### Travail à effectuer :
###### Créer un mini framework nexton utilisant :
  - système de route
  - autoLoad de components et de service
    Créer à l'aide du mini framework nexton, une application de présentation de nexton :
    avec une homepage et un about, un header, un footer, un bloc contact avec une overture de pop-in
    
    Pour les plus motiver :
    Créer un components header pour le site
    Créer mettre un formulaire dans la partie about
    Rajouter du contenu et du texte

###### Automatisation des taches (taches gulp)
  Déploiement en prod dans un dossier dist
  watch
  Compilation css
  Minification js html css
  Les plus pour les motivés :
  - ligne de commande pour générer des components / services / helper
  
#### merci d'utiliser vos branches pour rendre l'exercice ;)
  
###### si vous avez des questions vous pouvez me contacter par hangout


## Documentation :
#### prerequis :
Installer node version LTS

#### Lancer le projet :
npm install



# Cours
## Rappel :
#### initialiser un projet
node init

Il va créer un package.json avec le nom du projet son point d'entrer du projet de node.

#### installation des dépendances npm
npm install [la dependences à installer]
ou
npm i [la dependences à installer]

#### installation des dependences npm utilisé quand dev
npm install [la dependences à installer] --save-dev
ou
npm i [la dependences à installer] --save-dev

Doc de npm : https://docs.npmjs.com/cli/install

###### Il est fortement conseillé d'utiliser yarn de nos jours pour administer les packages des dépendences.

#### installation et utilisation de yarn
##### installation :
Yarn au mm titre que npm s'intalle en global.
npm i yarn -g 


##### utilisation de yarn
###### ajouter une dependence au projet
yarn add [la dependences à installer]
###### ajouter une dependences au projet uniquement en dev
yarn add [la dependences à installer] --dev

Doc de yarn : https://yarnpkg.com/lang/en/docs/cli/add/

##### comment créer des taches d'automatisation
Gulp est un gestionnaire de taches.
Vous pouvez l'installer en global ou en local. Il est préféré de l'installer en local pour qu'un notre développer qui télécharge le projet puisse l'avoir dans les dépendances du projet avec un simple "npm install" avec la bonne version.
Pour l'installer -> npm i gulp --save-dev

###### gulp 
Pour lancer gulp on peut inscrire dans le cmd à la racine du projet : node_modules/.bin/gulp
Ou bien si on l'a installé en global faire dans le cmd à la racine du projet : gulp

(À suivre)
