<template>
  <div class="embedsocial-hashtag" :data-ref="dataRef">
    <a class="feed-powered-by-es feed-powered-by-es-feed-img" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Instagram widget">
      <img src="https://embedsocial.com/cdn/images/embedsocial-icon.png" alt="EmbedSocial">
      Instagram widget
    </a>
  </div>
</template>

<script>
export default {
  name: 'EmbedSocialWidget',
  props: {
    dataRef: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadScript();
  },
  methods: {
    loadScript() {
      const scriptId = 'EmbedSocialHashtagScript';
      if (document.getElementById(scriptId)) return;

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://embedsocial.com/cdn/ht.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    },
  },
};
</script>
