<script lang="ts">
  import Cropper from 'cropperjs';
  import { onMount } from 'svelte';
  import 'cropperjs/dist/cropper.min.css';

  onMount(() => {
    const image = document.querySelector<HTMLImageElement>('#image')!;
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  });
</script>

<div class="cropper-wrap">
  <img id="image" class="img" alt="" src="raven.jpg" />
</div>

<style>
  .cropper-wrap {
    width: 500px;
    height: 500px;
  }
  .img {
    display: block;
    max-width: 100%;
  }
</style>
