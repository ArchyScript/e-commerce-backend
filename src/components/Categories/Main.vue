<template>
  <div class="about">
    <div>
      <h1>Gallery</h1>
      <br />

      <br />
      <br />
      <br />
      <br />

      <router-link to="/">Home</router-link> <br />
      <router-link to="/about">About</router-link> <br />
      <router-link to="/resources">Resources</router-link> <br />
      <router-link to="/architects">Architects</router-link> <br />
      <router-link to="/architectures">Architectures</router-link> <br />
      <router-link to="/gallery">Gallery</router-link> <br />

      <br />
      <br />

      <router-link to="/resources/materials"
        >Materials from resources</router-link
      >
      <br />
      <router-link to="/resources/past-questions"
        >Past Questions from resources</router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>
