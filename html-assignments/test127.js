<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>my first web</title>
  </head>
  <body>
    <h1>Predict</h1>
    <input type="number" id="in" />
    <button type="button" onclick="mod()">results</button>
    <p>for results check console</p>
    <script>
      function mod() {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
        model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
        const xs = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, , 8, 9, 10], [10, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7, 9, 11, 13, 17, 19]);
        var inp = Number(document.getElementById("in").value);
        model.fit(xs, ys, { epochs: 100 }).then(() => {
          model.predict(tf.tensor2d([inp], [1, 1])).print();
        });
      }
    </script>
  </body>
</html>