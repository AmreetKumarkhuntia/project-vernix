<script lang="ts">
  import UI from "$lib/svgs/UI.svelte";

</script>

<div class="home">
  <div class="header-container">
    <h1 class="header-title">
      Fast UI with
      <span class="gradient-text">
        Vergins.<span class="j-mod">j</span>s
        <span class="blob"></span>
      </span>
    </h1>

    <p>A fast, accessible UI library built for svelte developers.</p>
  </div>
  <div class="header-illustration">
    <UI />
     
  </div>
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-7px) scale(1.2);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .header-title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.6;
  }

  .gradient-text {
    position: relative;
    font-size: 68px;
    background-size: 400% 400%;
    background: var(--gradient-color-1);
    animation: gradient-shift 10s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .blob {
    position: absolute;
    top: 0;
    right: 28px;
    width: 36px;
    height: 36px;
    background-size: 400% 400%;
    background: var(--gradient-color-3);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    z-index: 10;
  }
</style>
