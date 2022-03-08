<template>
  <div>
    <div class="Container">
      <div class="Wrapper">
        <div class="Left">
          <div class="Language">EN</div>
          <div class="SearchContainer">
            <input class="Input" />
            <v-icon color="#808080" size="16">mdi-magnify</v-icon>
          </div>
        </div>
        <div class="Center">
          <router-link to="/" class="Logo">
            <h1>VANBAN.</h1>
          </router-link>
        </div>
        <div class="Right">
          <div class="MenuItem">Register</div>
          <div class="MenuItem">Sign In</div>
          <div class="MenuItem">
            <v-badge color="#0066ff" content="6" overlap>
              <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.Container {
  height: 60px;
  .Wrapper {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.Left {
  flex: 1;
  display: flex;
  align-items: center;
  .Language {
    font-size: 14px;
    cursor: pointer;
  }
  .SearchContainer {
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    .Input {
      border: none;
    }
  }
}

.Center {
  flex: 1;
  text-align: center;
  .Logo {
    font-weight: bold;
    text-decoration: none !important;
  }
}

.Right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .MenuItem {
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  }
}
</style>
