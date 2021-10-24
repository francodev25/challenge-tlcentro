<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-telecentro">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="https://www.telecentro.com.ar/img/logo-imagotipo.svg" alt="" width="90" height="32">
                </router-link>
                <router-link class="nav-link" to="/about">
                    About
                </router-link>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>

<style scoped>
    .bg-telecentro{
        background: rgb(4,18,52);
    }
    .nav-link{
        color:white;
    }
</style>