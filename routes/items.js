var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');
var Item= require('../models/items');
var uuid = require('uuid/v4');
var User = require('../models/user');


router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login')
  }
  next();
});

router.get('/', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});

router.get('/motors', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/microcontrollers', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/sensors', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/tools', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/ic', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/cboards', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/electronic', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/electrical', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/kits', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/projects', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});
router.get('/others', function(req, res) {
  Item.find( function(err, items, count) {
    res.render('items', {items: items, user: req.user});
  })
});


router.post('/', function(req, res){ 
  res.redirect('/items') 
}); 

router.post('/add', function(req, res) {
    const item = new Item({


      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      imageUrl1: req.body.imageUrl1,
      imageUrl2: req.body.imageUrl2,
      imageUrl3: req.body.imageUrl3,
      sellername: req.body.sellername,
      sellerfirst_name: req.body.sellerfirst_name,
      sellerlast_name: req.body.sellerlast_name,
      selleremail: req.body.selleremail,
      sellercontact: req.body.sellercontact,
      sellerphoto:req.body.sellerphoto,
      sellerschool:req.body.sellerschool,
      sellerfacebook:req.body.sellerfacebook,
      createdate: moment().tz("Asia/Manila").format('LLL'),

    }).save(function(err, item, count) {
      if(err) {
        res.render('add', {error: err});
      } else {
        res.redirect('/items');
      }
    })

});

router.get('/add', function(req, res) {
  res.render('add', {item: {}, user: req.user});
});



router.route('/:item_id')
  .all(function(req, res, next) {
    item_id = req.params.item_id;
    item = {};
    Item.findById(item_id, function(err, c) {
      item = c;
      next();
    console.log(item)
    });
  })

  .get(function(req, res) {
    res.render('item', {item: item, moment: moment, user: req.user});
  })

router.route('/:item_id/edit')
  .all(function(req, res, next) {
    item_id = req.params.item_id;
    item = {};
    Item.findById(item_id, function(err, c) {
      item = c;
      next();
      
    });
  })

  .get(function(req, res) {
    res.render('edit', {edit: item, moment: moment, user: req.user});
  })
  .post(function(req, res) {

    item.name = req.body.name;
    item.price = req.body.price;
    item.description = req.body.description;
    item.category = req.body.category;
    item.status = req.body.status;
    item.imageUrl1 = req.body.imageUrl1;
    item.imageUrl2 = req.body.imageUrl2;
    item.imageUrl3 = req.body.imageUrl3;
    item.editorname = req.body.editorname;
    item.editorfirst_name = req.body.editorfirst_name;
    item.editorlast_name = req.body.editorlast_name;
    item.editoremail = req.body.editoremail;
    item.editorcontact = req.body.editorcontact;
    item.editorphoto = req.body.editorphoto;
    item.editorschool = req.body.editorschool;
    item.editorfacebook = req.body.editorfacebook;
    item.updatedate = moment().tz("Asia/Manila").format('LLL'),

    item.save(function(err, item, count) {
      if(err) {
        res.status(400).send('Error saving item: ' + err);
      } else {
        res.redirect('/items/'+item_id)
      }
    });
  })

router.route('/:item_id/delete')
  .all(function(req, res, next) {
    item_id = req.params.item_id;
    item = {};
    Item.findById(item_id, function(err, c) {
      item = c;
      next();
    });
  })
  .get(function(req, res) {
    item.remove(function(err, item) {
      
      if(err) {
        res.status(400).send("Error removing item: " + err);
      } else {
        res.redirect('/items');
      }
    });
  });



module.exports = router;
