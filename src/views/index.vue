<template>
    <div class="container-fluid mainStyle no-gutters" >
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid d-flex justify-content-between align-items-center">
            <!-- Elementos alineados a la izquierda -->
            <div class="d-flex">
              <img src="../assets/LogoJuan.png" />
            </div>
    
            <!-- Elementos centrados -->
            <div class="d-flex justify-content-center flex-grow-1 d-none d-md-block">
              <div class="navbar-nav " style="width: 60%;justify-content: space-around;">
               
                      <a @click="scrollToSection('init')" class="nav-link" href="#"style="color: white;   font-weight: 700;    font-size: 1.4rem;text-decoration: none;">inicio</a>
              
                 
                      <a @click="scrollToSection('proyects')" class="nav-link" href="#"style="color: white;   font-weight: 700;font-size: 1.4rem;text-decoration: none;"    >Proyectos</a>
            
                  <a @click="scrollToSection('contact')" class="nav-link" href="#"style="color: white;   font-weight: 700;font-size: 1.4rem;text-decoration: none;">
                      Contacto
                    </a>
 
              </div>
            </div>
    
            <!-- Elementos alineados a la derecha -->
            <!-- <div class="d-flex">
              <div class="navbar-nav">
                <a class="nav-link" href="#" style="color: white;">Right Link 1</a>
                <a class="nav-link" href="#">Right Link 2</a>
              </div>
            </div> -->
          </div>
        </nav>
</div>
<div id="init" class="container-fluid g-0">
   <div class="container mt-5" style="color: white;">
        <div class="row no-gutters">
            <div class="col-12 col-md-4  ">
                <h1 class="title">Desarrollador Full Stack</h1>
                <p class="mt-5 text">Soy Juan Camilo Saiz, un desarrollador full stack capaz de crear 
                    soluciones tecnológicas innovadoras. Con habilidades en diversas
                     tecnologías y una pasión por la programación, me dedico a generar soluciones eficientes y efectivas para satisfacer las necesidades tecnológicas de mis clientes. 
                </p>
                <div style="width: 100%;" class="mt-5" >
                    <button onclick="window.open('https://wa.me/+573045532144', '_blank')" class="whatss_app_button p-2" style="display: flex;">
                        <div style="padding: 5px;  background: #18FEB1; border-radius: 100px;  width: 50px;
                        height: 50px;display:flex ;align-items: center; justify-content: center;"><i class="fa-brands fa-whatsapp" style="font-size: 2rem;"></i></div>
                        <P style="color: #125E94;  font-weight: bolder;     margin:0px;">Estare contento de atenderte</P>
                    </button>
                </div>
            </div>
            <div class="col-12 col-md-8  image">
                <img src="../assets/perfil_my.png" style="width: 50%;"/>
            </div>
        </div>
        <!-- abaut my -->
        <div class="container mt-5">
            <h1>Sobre my</h1>
            <p class="mt-3 text_abaut_my">
                Desarrollador Full Stack con experiencia en Java, Spring, Kotlin y Vue.  , me dedico a perfeccionar mis habilidades diariamente para crear soluciones tecnológicas innovadoras y efectivas.


            </p>
            <div class="row no-gutters mt-5 margin-negative justify-content-center">
                <div class="col-4 ">
                    <img src="https://res.cloudinary.com/dirsusbyy/image/upload/t_b2/v1722490214/fwafu60msyxpsqh8a6fn.jpg" class="image_panel"/>
                </div>
                <div class="col-4  d-none d-md-block">
                    <img src="https://anincubator.com/wp-content/uploads/2022/08/aplicaciones.png" class="image_panel"/>
                </div>

                <div class="col-4 d-none d-md-block" >
                    <img src="https://res.cloudinary.com/dirsusbyy/image/upload/t_b2/v1722490408/na1382bgmlwakd77n3ts.jpg"  class="image_panel"/>
                </div>
            </div>
        </div>
    </div>
    <div id="contact" class="container-fluid containerwhite g-0" style=" box-shadow:inset 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div class=" d-flex justify-content-center " style="background: white;">
            <div class="col-8">
                <form action="https://formsubmit.co/juancamilo1478@gmail.com" method="POST">
                    <h1 style="width: 100%; text-align: center; padding-top: 100px;  font-weight: bolder;">Contactame</h1>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Correo</label>
                        <!-- <input type="email" name="email" required class="form-label">Correo electronico</input> -->
                        <input type="email" class="form-control"   aria-describedby="emailHelp" required>
                        <div id="emailHelp" class="form-text">Tu correo electronico.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                        <input type="text" class="form-control"   required>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
               </form>
                <div class="container_items_contact " style="margin-bottom: 20px;">
                    <div onclick="window.open('https://wa.me/+573045532144', '_blank')"  class="item" style="text-decoration: none; color:white ; text-decoration-line: none; "><i class="fa-brands fa-whatsapp" style="font-size: 2rem;  "></i></div> 
                    <div onclick="window.open('https://www.linkedin.com/in/juan-camilo-saiz-sanjuan-a66245246', '_blank')"  class="item"><i class="fa-brands fa-linkedin" style="font-size: 2rem;"></i></div>
                    <div onclick="window.open('https://github.com/juancamilo1478', '_blank')" class="item"><i class="fa-brands fa-github" style="font-size: 2rem;"></i></div>    
                </div>   
            </div>
        </div>
        <div id="proyects" class="container mb-5" style="margin-bottom: 200px; background:#1B1B1B">
            <h1 style="width: 100%; text-align: center; padding-top: 100px;  font-weight: bolder; color:white" >Proyectos</h1>
            <div class="container mt-5 " >
                <div class="row  g-0 mb-5" >
                        <div v-for="item in data" class="col-md-4">
                            <ItemProyect :data = "item"/>
                        </div>
                </div>
            </div>
        </div>
        <div class="container" style="height: 50px;"></div>
    </div>
</div>
</template>
<script>
import ItemProyect from "./Item_proyect.vue"; // Verifica la ruta y el nombre del archivo

import data from "../data/data.json"

export default {
  name: 'App',
  components: {
    ItemProyect
  },
  data() {
    return {
      data // Asegúrate de que data está correctamente definido aquí
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
 
  
 
};
</script>


<style>
.title{
    font-weight: bolder;
    font-size: 2rem;
    
}
.container_items_contact{
 
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 60px;
    border-radius: 100px;
    padding: 10px;
    color: white;
}
.item{
    transition: 0.5s;
    padding: 5px;  
    background: #000000;
    border-radius: 100px; 
    width: 50px;
    height: 50px;
    display:flex ;
    align-items: center; 
    justify-content: center;
}
.item:hover{
    cursor: pointer;
    transform: scale(1.2);
}
.text{
    font-weight: 600;
    font-size: 1rem;
   
}
.text_abaut_my{
    font-weight: 600;
    font-size: 1.5rem;
   
}
.image_panel{
    width: 300px;
    height: 300px;
    border-radius: 10px;
}
.image{
    display: flex;
    justify-content: center;
}
.whatss_app_button{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    text-align: center; /* Alineación del texto */
    text-decoration: none; /* Elimina el subrayado si es un enlace */
    display: inline-block; /* Permite aplicar padding y margin adecuadamente */
    outline: none; /* Elimina el contorno al hacer clic */
    box-shadow: none; /* Elimina la sombra predeterminada del botón (si la hay) */
    border: none;  
    border-radius: 50px;
    background: rgb(184,206,182);
    background: linear-gradient(90deg, rgba(184,206,182,1) 32%, rgba(112,182,105,1) 100%);
}
.containerwhite{
    background: white;
    height: 200px;
}
.margin-negative{
    margin-bottom: -80px;
}
 
</style>