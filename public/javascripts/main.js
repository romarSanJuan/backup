 function getSearch() {
  localStorage.setItem("search", document.getElementById('search').value);
}

  if (window.location.pathname === '/items') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item/?sort=-createdate').then(function(res) {
          res.json().then(function(items) {
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="description">Promoters Name: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');

            });
          })
        });

        fetch('/api/v1/Item/count').then(function(res) {
          res.json().then(function(items) {
            console.log('items', items);
            var count = document.getElementById('count');
            
              count.insertAdjacentHTML('beforeend', '<strong>Total Number of Events:  '+items.count+'<strong>');
          })
        });
    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/motors') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(motors)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button>View Details</button></a></div></div></div>');

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }

   if (window.location.pathname === '/items/microcontrollers') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(microcontrollers)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/sensors') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(sensors)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/tools') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Tools and Equipments)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/ic') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Integrated Circuits)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/cboards') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Circuit Boards)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/electronic') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Electronic Components)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
  if (window.location.pathname === '/items/electrical') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Electrical Components)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
   if (window.location.pathname === '/items/kits') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Kits and Modules Cases)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
   if (window.location.pathname === '/items/projects') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(Projects)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }

  if (window.location.pathname === '/items/others') {
    
    if (localStorage.getItem("search") === 'null' || localStorage.getItem("search") === null) {
        fetch('/api/v1/Item?query={"category":"~(others)"}').then(function(res) {
          res.json().then(function(items) {
            
            console.log('items', items);
            var tbody = document.getElementById('table-body');
            items.forEach(function(item) {
              tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');
            

            });
          })
        });

    }   

    else {

      fetch('/api/v1/Item?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
        res.json().then(function(result) {
          if (result.length === 0) {
            document.getElementById('findcount').innerHTML = + result.length +
          " item found";
          }
          else if (result.length === 1) {
            document.getElementById('findcount').innerHTML =  + result.length +
          " item found";
          }
          else {
            document.getElementById('findcount').innerHTML =  + result.length +
          " items found";
          }

          var tbody = document.getElementById('table-body');
          result.forEach(function(result) {
           tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+result.name+'</div><div class="text"><img class="product_image" src="'+result.imageUrl1+'"/><div class="code">'+result.category+'</div><div class="description">Name of Seller: '+result.sellername+' </div> <div class="price"> '+result.price+'</div><div class="shop-actions"><a href="/items/' + result._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>' );

          
    

          });

          localStorage.setItem("search", null);

        });

      });

    }

  }
$(document).ready(function() {

  if (window.location.pathname === '/profile') {
    var user = document.getElementById("seller").value;
    fetch('/api/v1/Item?query={"sellername":"~(' + user + ')"}').then(function(res) {
      res.json().then(function(items) {
        console.log('items', items);
        var tbody = document.getElementById('table-body');
        items.forEach(function(item) {
          tbody.insertAdjacentHTML('beforeend', '<div class="product"><div class="title"> '+item.name+'</div><div class="text"><img class="product_image" src="'+item.imageUrl1+'"/><div class="code">'+item.category+'</div><div class="description">Name of Seller: '+item.sellername+' </div> <div class="price"> '+item.price+'</div><div class="shop-actions"><a href="/items/' + item._id + '"><button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> View Details</button></a></div></div></div>');

        });
      })
    });
  }
});