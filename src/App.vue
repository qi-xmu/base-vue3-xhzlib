<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="top_guide_bg">
        <div id="top_logo">
            <img src="./assets/img/logo.png" style="width: 100% ; height: auto; margin: auto;">
        </div>
        <div id="top_guide">
            <div class="nav">
                <RouterLink to="/Home">首页</RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/works">成果展示</RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/shop">在线商城</RouterLink> 
            </div>
            <div class="nav">
                <RouterLink to="/course">学习系统</RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/aboutus">关于我们</RouterLink>
            </div>
        </div>
    </div>
        <RouterView />
</template>

<style>

#top_guide_bg {
    width: 100%;
    height: 10%;
    /* margin-top: 0; */
    /* margin: auto; */
    /* background-image: linear-gradient(pink, orange); */
    background-color: white;
    display: flex;
    align-items: center;
    text-align: center;
}

#top_logo {
    width: 25%;
    display: flex;
    /* margin-right: 50px; */
    margin-left: auto;
    flex-direction: column;
    /* padding: auto; */
}

#content {
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    text-align: center;
}

.nav a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
    /* margin: auto; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
}

#top_guide {
    width: 50%;
    height: 100%;
    /* margin: auto; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    text-align: center;
    align-items: center;
}
.nav {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    padding: auto;
    width: 180px;
    height: 100%;
    font-size: 25px;
    /* font-style: bold; */
    color:white;
}
.nav:hover {
    /* background-image: linear-gradient(rgb(207, 217, 161), rgb(237, 209, 239)); */
    background-color: orange;
}
</style>