const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/api/listItems', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/listItems', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const listItems = JSON.parse(data);
    const newListItem = {
      id: req.body.id,
      quantity: req.body.quantity,
      unit: req.body.unit,
      product: req.body.product,
      category: req.body.category,
    };
    listItems.push(newListItem);
    fs.writeFile(DATA_FILE, JSON.stringify(listItems, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(listItems);
    });
  });
});

app.put('/api/listItems', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const listItems = JSON.parse(data);
    listItems.forEach(listItem => {
      if (listItem.id === req.body.id) {
        listItem.quantity = req.body.quantity;
        listItem.unit = req.body.unit;
        listItem.product = req.body.product;
        listItem.category = req.body.category;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(listItems, null, 4), () => {
      res.json({});
    });
  });
});

app.delete('/api/listItems', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let listItems = JSON.parse(data);
    listItems = listItems.reduce((memo, listItem) => {
      if (listItem.id === req.body.id) {
        return memo;
      } else {
        return memo.concat(listItem);
      }
    }, []);
    fs.writeFile(DATA_FILE, JSON.stringify(listItems, null, 4), () => {
      res.json({});
    });
  });
});

app.get('/example', (_, res) => {
  setTimeout(() => {
    res.end();
  }, 5000);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});