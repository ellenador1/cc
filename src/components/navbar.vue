<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">cc</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"> Home </router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Balances
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/ethbalance"> ETH </router-link></li>
              <li><a class="dropdown-item" href="#"> USDT </a></li>
              <li><a class="dropdown-item" href="#"> BNB </a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#"> Total </a></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/tools"> Tools </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ecosystem"> Ecosistemas </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

  <router-view></router-view>

  <!--Footer-->
  <nav class="navbar sticky-top navbar-dark bg-dark mt-5">
    <div class="container-fluid">
      <ul class="nav justify-content-end ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
.navbar-nav .dropdown-menu {
  border-color: rgb(119, 119, 119);
    position: static;
    background-color: #222222;
}

.dropdown-item, .dropdown-item {
background-color: #222222;
color: rgb(233, 233, 233) !important;}

.dropdown-item:focus, .dropdown-item:hover, .dropdown-item:active {
background-color: #2e2e2e;
color: rgb(233, 233, 233) !important;}

hr {
  background-color:  rgb(230, 230, 230) !important;
  height: 0.15rem !important;
}
</style>