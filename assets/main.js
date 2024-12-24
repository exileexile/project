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

/* document.addEventListener('DOMContentLoaded', function() {
  // Get all img elements with the 'swiper-lazy' class
  const images = document.querySelectorAll('img.swiper-lazy');

  images.forEach(img => {
    // Create a new Image object
    const imgObj = new Image();
    imgObj.crossOrigin = 'Anonymous'; // Only needed if images are from a different domain
    imgObj.src = img.src;

    imgObj.onload = function() {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions to the image dimensions
      canvas.width = imgObj.width;
      canvas.height = imgObj.height;

      // Draw the image onto the canvas
      ctx.drawImage(imgObj, 0, 0);

      // Get the base64 encoded data URL
      const base64Data = canvas.toDataURL('image/png'); // Use 'image/jpeg' if needed

      // Replace the img src with the base64 data URL
      img.src = base64Data;

      // Optionally, remove the 'convertible' class to prevent re-processing
      img.classList.remove('convertible');
    };

    // Handle cached images
    if (imgObj.complete) {
      imgObj.onload();
    }
  });
}); */