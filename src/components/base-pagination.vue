<template>
  <div class="@container">
    <div class="inline-flex flex-col items-start gap-[12px] @[372px]:flex-row @[372px]:px-[16px]">
      <BaseButton type="secondary">上一頁</BaseButton>
      <BaseButton
        v-for="n in 3"
        :key="n"
        class="hidden h-9 w-9 rounded-full pl-0 pr-0 @[480px]:block"
        >{{ n }}</BaseButton
      >
      <BaseButton>下一頁</BaseButton>
    </div>
  </div>
</template>
