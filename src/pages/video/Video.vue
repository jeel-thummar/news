<template>
    <div class="flex flex-col items-center snap-y snap-mandatory overflow-y-auto">
        <div v-for="(imges, i) in slideImage" :key="i" class="flex items-center snap-center  flex-[0_0_100%] box-border">
            <video ref="videos"  class="video">
                <source :src="imges">
            </video>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const slideImage = [
    "src/assets/Videos/video-1.mp4",
    "src/assets/Videos/video-2.mp4",
    "src/assets/Videos/video-1.mp4",
    "src/assets/Videos/video-2.mp4",
];

const videos = ref([]);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    videos.value.forEach(video => {
        observer.observe(video);
    });
});
</script>

<style scoped>
.video {
    height: calc(100vh - 25vh);
}
</style>
