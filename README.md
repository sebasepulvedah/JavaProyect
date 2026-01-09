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

