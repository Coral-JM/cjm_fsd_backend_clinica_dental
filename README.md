
<h3 align="center">🦷 Proyecto de backend para una clínica dental 🦷</h3>

---

<details>
  <summary><b>Índice</b> 📝</summary>
  <ol>
    <li><a href="#proyecto">Proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

#### Proyecto

Este proyecto consistía en el backend correspondiente al sistema de gestión de citas para una Clínica Dental. Para ello debíamos crear una API conectada a una base de datos MySQL con relaciones entre sus tablas. 

---
#### Stack 
<div align="center">

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> 
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> 
<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> 
<img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">
</div>

---

#### Diagrama

!['imagen-db'](./img/DiagramClinicaDental.png)

#### Instalación en local

1. Clonar el repositorio
2. ` $ npm install `
3. `$ express nodemon sequelize sequelize-cli mysql2 bcrypt jsonwebtoken`
4. ``` $ npx sequelize-cli db:migrate ``` 
5. ``` $ npx sequelize-cli db:seed:all ``` 
6. ``` $ npm run dev ``` 

---

#### Endpoints

Para obtener acceso a todos los endpoints conéctate a Postman y dále click aquí:
 <!-- <div align="center"> [![Run in Postman]()</div> -->

---
#### Licencia

Este proyecto ha sido realizado por Coral Jiménez, estudiante de GeeksHubs Academy en la promoción de primavera del 2023 y cuenta con una MIT License.

---
#### Agradecimientos

Sin duda este proyecto no podría haberlo hecho sin la ayuda de mis compañeros. Especial mención a Judit Grau por cogerme de la mano y no soltarme y a Eduardo Kiriakos por toda su paciencia y experiencia.

**Judit Grau** 
<a href ="https://github.com/ditgrau" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=lime" target="_blank"></a>

**Eduardo Kiriakos**
<a href ="https://github.com/Edkiri" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=lime" target="_blank"></a>

