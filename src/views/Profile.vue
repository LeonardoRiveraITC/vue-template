<template>
<ProfileCard :enabled="true" />
<ProfileCard :enabled="false" />
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue'
</script>