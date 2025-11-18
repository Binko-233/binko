// 使用Canvas添加水印
function addWatermarkToImage(imageSrc, watermarkText) {
  const canvas = document.getElementById('watermarkedCanvas');
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.onload = function() {
    // 设置canvas尺寸与图片一致
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 绘制原图
    ctx.drawImage(img, 0, 0);
    
    // 设置水印样式
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    
    // 旋转画布并绘制水印
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-45 * Math.PI / 180);
    ctx.fillText(watermarkText, 0, 0);
    ctx.restore();
  };
  
  img.src = imageSrc;
}

// 使用示例
addWatermarkToImage('images/posts/赫恩过年.jpg', '本照片由 @奥利奥 提供');