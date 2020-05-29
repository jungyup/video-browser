<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList> 
        <!-- whatever inside "" is property that we want to share in Parent and left videos the name of the property that we want to show on Child -->
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'temp';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return {
            videos: []
        }
    },
    methods: {
        onVideoSelect(video) {
            console.log(video);
        },
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        }
    }
};
</script>