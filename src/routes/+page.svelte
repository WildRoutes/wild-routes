<script lang="ts">
    import Images from '../../static/images/home.png?width=760;960;1200&format=webp;avif;png&metadata';
</script>
<header class="max-h-screen overflow-hidden relative flex items-center content-center">
    <picture>
        {#each Images as image}
            <source media="(min-width: {image.width-400}px" srcset={image.src} type="image/{image.format}">
        {/each}
        <img  class="sm:min-w-full h-screen max-w-none align-middle" src="/images/home.png" alt="">
    </picture>
    <div class="text-center absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center text-white p-6">
        <h1 class="mb-5 text-5xl font-bold">
            Wild Routes
        </h1>
        <p class="italic">
            Reclaim your education... Equip yourself for life... on your own terms.
        </p>
    </div>
</header>
