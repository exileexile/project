var mySwiper = new Swiper('.swiper', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
    el: '.swiper-pagination'
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  }
})

var mySwiper2 = new Swiper('.swiper2', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    clickable: true,
    dynamicBullets: false,
    el: '.swiper-pagination2'
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  // 可能需要设置 nested: true 来避免外层 Swiper 干扰内层 Swiper 的滚动
  nested: true,
  // 可能需要设置 watchSlidesProgress: true 来使内层 Swiper 的滑动更为平滑
  watchSlidesProgress: true
})

var mySwiper3 = new Swiper('.swiper3', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    clickable: true,
    dynamicBullets: false,
    el: '.swiper-pagination3'
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  // 可能需要设置 nested: true 来避免外层 Swiper 干扰内层 Swiper 的滚动
  nested: true,
  // 可能需要设置 watchSlidesProgress: true 来使内层 Swiper 的滑动更为平滑
  watchSlidesProgress: true
})

console.log(mySwiper, mySwiper2, mySwiper3)