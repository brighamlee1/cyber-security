<template>
  <div class="flex flex-row bg-white shadow-md items-center justify-center gap-5 h-16 text-neutral-700">
    <NuxtLink href="/" :class="route.path === '/' && 'bg-blue-500 text-white'">Home</NuxtLink>
    <NuxtLink href="/personal-security" :class="route.path === '/personal-security' && 'bg-blue-500 text-white'">Personal Security</NuxtLink>
    <NuxtLink href="/computer-security" :class="route.path === '/computer-security' && 'bg-blue-500 text-white'">Computer Security</NuxtLink>
    <NuxtLink href="/protecting-privacy" :class="route.path === '/protecting-privacy' && 'bg-blue-500 text-white'">Protecting Privacy</NuxtLink>
    <NuxtLink href="/works-cited" :class="route.path === '/works-cited' && 'bg-blue-500 text-white'">Works Cited</NuxtLink>
  </div>

  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route);
</script>

<style scoped>
a {
  @apply hover:bg-blue-500 hover:text-white py-1 px-2 rounded-md;
}
</style>