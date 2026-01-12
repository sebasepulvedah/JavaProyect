# JavaProyect

### comando de config
git config --global user.name "Sebastián Sepúlveda" 
git config --global user.email "seba.sepulvedah@gmail.com"
### ejecutar comando - crea archivo JavaProyect y agrega informacion readme.md en la bash. 
echo "# JavaProyect" >> README.md 
### inicializa el repositorio
git init 
### tomara todos los archivos y los agregara al stage. (zona de preparación)
git add . README.md 
### etiquetar el paquete localmente
git commit -m "first commit" 
### crear y posicionar rama main
git branch -M main 
### vincular el reposotirio con la nube
git remote add origin https://github.com/sebasepulvedah/JavaProyect.git 
### subir la informacion a la nube
git push -u origin main 

### Archivos nuevos o modificados 
git status
git add .
git commit -m "HTML, CSS, JS"
git push -u origin main

### nueva modificados
/se sube desde vscode

### ver ramas online
git branch -a
### elimiar ramas
git branch -D testing2 // forzar rama remota y se elimina
### Como eliminar desde la nube
git push --delete testing2
###
git checkout nombre_rama
##
git branch  switch rama_nueva
### Crear readmne
    $echo "# Pull Request" >> README.md 
### muestra la ruta donde esta 
 $pwd
### mover de forma global
    $ls
### ver archivos y permisos
    $ls -l
### muestra todo los archivos incluyendo ocultos
    $ls -la
### cambiar de directorios, movernos dentro de una carpeta a otra carpeta
    $ cd ejercicio/
### mueva o reenombra - hace las 2 cosas
    $ mv README.md ejercicio/README.md
###
    