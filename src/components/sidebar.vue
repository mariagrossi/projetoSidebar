<template>
  <div>
    <b-button v-b-toggle.sidebar-general>Sidebar</b-button>
    <b-sidebar id="sidebar-general" aria-labelledby="sidebar-general-title" general shadow>
      <template #default="{ hide }">
        <div class="sb-main">
          <div class = "logo">
            <img src="../assets/fundo card.png" />
          </div>
          <nav class="itens">
            <b-nav vertical>
              <div class = "highlight"></div>
              <div class = "iconInicio">
                <img src="../assets/ícone inicio.svg" />
              </div>
              <a class = "inicio" active @click="hide">Início</a>
              <div class = "icon1">
                <img src="../assets/ícone sobre.svg" />
              </div>
              <a class = "item1" href="#link-1" @click="hide">item1</a>
              <div class = "icon2">
                <img src="../assets/ícone equipe.svg" />
              </div>
              <a class = "item2" href="#link-2" @click="hide">item2</a>
              <div class = "icon3">
                <img src="../assets/ícone area de atuação.svg" />
              </div>
              <a class = "item3" href="#link-3" @click="hide">item3</a>
            </b-nav>
          </nav>
          <a class = "credito">Desenvolvido por Maria Eduarda</a>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
a{
  color: #FAFBFF;
}
.sb-main {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #343842;
}

.logo{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 20.98%;
  right: 22.99%;
  top: 19px;
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
}
.itens{
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #FAFBFF;
}
.inicio {
  position: fixed;
  left: 18.68%;
  right: 62.93%;
  top: 21.77%;
  bottom: 75.74%;

  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;


  color: #FAFBFF;
}


.item1 {
  position: absolute;
  left: 18.61%;
  right: 60.99%;
  top: 32%;
  bottom: 65.46%;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  color: #FAFBFF;
}

.item2 {
  position: absolute;
  left: 18.39%;
  right: 61.21%;
  top: 37%;
  bottom: 60.74%;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  color: #FAFBFF;
}

.item3 {
  position: absolute;
  left: 18.97%;
  right: 60.63%;
  top: 42%;
  bottom: 56.02%;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  color: #FAFBFF;
}

.credito {
  position: absolute;
  left: 20.98%;
  right: 22.99%;
  top: 89.26%;
  bottom: 5.37%;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  color: #FAFBFF;
}

.highlight{
  position: absolute;
  left: -2.01%;
  right: 0%;
  top: 21%;
  bottom: 73%;

  background: #223864;
}

.iconInicio{
  position: absolute;
  left: 9.2%;
  right: 83.91%;
  top: 21.48%;
  bottom: 76.3%;
}

.icon1{
  position: absolute;
  left: 9.48%;
  right: 83.96%;
  top: 31.99%;
  bottom: 65.89%;
}
.icon2{
  position: absolute;
  left: 9.2%;
  right: 84.2%;
  top: 36.67%;
  bottom: 61.3%;
}

.icon3{
  position: absolute;
  left: 9.48%;
  right: 83.62%;
  top: 41.75%;
  bottom: 56.71%;
}
@media (max-width: 778px) {
  #navbox {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
