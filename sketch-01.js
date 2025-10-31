const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        context.beginPath();
        context.rect(x, y, w, h);
        //context.arc((x + w)/2 , ( y + h)/2 , 0 , 0, Math.PI * 2);
        context.stroke();
        // context.linew = 1;

        if (Math.random() > 0.5) {
          //for ( let j=0; j<5; j++) {
          // if ( j>0 && j<4) {
          // context.fillStyle = 'blue';
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          //context.fillRect(x + 16, y + 16, w - 32, h - 32);
          context.stroke();
          //context.linew = 4;
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
