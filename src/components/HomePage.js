import React, { useEffect, useRef } from "react";

const CanvasWithTextAndImage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw the main content on the canvas
    drawMainContent(ctx, canvas.width, canvas.height);

    // Load mask image onto the canvas
    const maskImg = new Image();
    maskImg.onload = function () {
      const maskWidth = 970;
      const maskHeight = 450;
      const maskX = 56;
      const maskY = 442;
      ctx.save(); // Save the current context state
      ctx.globalCompositeOperation = "destination-in"; // Set composite operation to 'destination-in' to apply the mask
      ctx.drawImage(
        maskImg,
        maskX,
        maskY,
        maskWidth,
        maskHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );
      ctx.restore(); // Restore the context state
      // Draw the masked image on the lower half of the canvas
      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 80, canvas.height / 2, 640, canvas.height / 2);
      };
      img.src =
        "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg";
    };
    maskImg.src =
      "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg";
  }, []);

  const drawMainContent = (ctx, width, height) => {
    // Draw the background
    ctx.fillStyle = "#FF3366";
    ctx.fillRect(0, 0, width, height);

    // Draw text on the canvas
    ctx.font = "20px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.fillText("1 & 2 BHK Luxury Apartments at", 50, 60);
    ctx.fillText("just Rs.34.97 Lakhs", 50, 90);

    // Load image onto the canvas
    const img = new Image();
    img.onload = function () {
      const imageSize = 120;
      const imageTop = 20;
      const imageRight = width - 50;
      ctx.drawImage(
        img,
        imageRight - imageSize,
        imageTop,
        imageSize,
        imageSize
      );

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.strokeRect(
        imageRight - imageSize,
        imageTop,
        imageSize,
        imageSize
      );
    };
    img.src =
      "https://image.similarpng.com/very-thumbnail/2020/06/kfc-logo-free-download-PNG.png";

    // Draw button on the canvas with curved edges
    ctx.fillStyle = "#ffffff";
    const buttonX = 50;
    const buttonY = 180;
    const buttonWidth = 100;
    const buttonHeight = 40;
    const cornerRadius = 10;
    ctx.beginPath();
    ctx.moveTo(buttonX + cornerRadius, buttonY);
    ctx.arcTo(
      buttonX + buttonWidth,
      buttonY,
      buttonX + buttonWidth,
      buttonY + buttonHeight,
      cornerRadius
    );
    ctx.arcTo(
      buttonX + buttonWidth,
      buttonY + buttonHeight,
      buttonX,
      buttonY + buttonHeight,
      cornerRadius
    );
    ctx.arcTo(buttonX, buttonY + buttonHeight, buttonX, buttonY, cornerRadius);
    ctx.arcTo(buttonX, buttonY, buttonX + buttonWidth, buttonY, cornerRadius);
    ctx.closePath();
    ctx.fill();
    ctx.font = " bold 18px arial";
    ctx.fillStyle = "#831010";
    ctx.textAlign = "center";
    ctx.fillText(
      "Shop Now",
      buttonX + buttonWidth / 2,
      buttonY + buttonHeight / 2 + 6
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ display: "block", margin: "auto" }}
      ></canvas>
    </div>
  );
};

export default CanvasWithTextAndImage;
