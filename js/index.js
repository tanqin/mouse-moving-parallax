/* 
思路：1.获取页面中心点；
     2.鼠标移动时获取鼠标位置；
     3.设置卡片跟随鼠标移动的偏移量
     4.将偏移量赋给每张卡片的左边距和上边距
 */
$(function () {
  let $cards = $(".parallax");

  //   页面中心点
  let x = $(document).width() / 2;
  let y = $(document).height() / 2;

  //   鼠标移动事件
  $("body").on("mousemove", function (e) {
    // 获取鼠标在窗口内的坐标值
    let mx = e.clientX;
    let my = e.clientY;

    // 遍历所有卡片
    $cards.each(function () {
      // 新的左边距和上边距值（不同元素不同的移动比例）
      let newMarginLeft = ((mx - x) / 80) * $(this).data("scale");
      let newMarginTop = ((my - y) / 70) * $(this).data("scale");

      // 设置每张卡片左边距和上边距
      $(this).css("marginLeft", newMarginLeft);
      $(this).css("marginTop", newMarginTop);
    });
  });
});
