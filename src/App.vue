<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="top_guide_bg">
        <div id="top_guide">
            <div class="nav">
                <RouterLink to="/course">course</RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/shop">shop</RouterLink> 
            </div>
            <div class="nav">
                <RouterLink to="/Home">Home</RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/aboutus">aboutus</RouterLink>
            </div>
        </div>
    </div>
        <RouterView />
</template>

<style>

#top_guide_bg {
    width: 100%;
    height: 100px;
    margin-top: 0;
    /* margin: auto; */
    background-image: linear-gradient(pink, orange);
    display: flex;
    align-items: center;
    text-align: center;
}

#content {
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    text-align: center;
}

.nav a {
    text-decoration: none;
    color: white;
    margin: auto;
}

#top_guide {
    width: 50%;
    height: 100%;
    margin: auto;
    display: flex;
    text-align: center;
    align-items: center;
}
.nav {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    width: 100px;
    height: 100%;
    font-size: 25px;
    font-style: bold;
    color:white;
}
.nav:hover {
    background-image: linear-gradient(rgb(207, 217, 161), rgb(237, 209, 239));
}
</style>