document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector(".products");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const productsPerPage = 6; // Number of products per page
    let currentPage = 1;
    const totalProductsData = [
    { 
      name: "Microsoft Surface Laptop 4", 
      price: "₹79,899", 
      image: "Img/MicrosoftSurface4.jpg", 
      specifications: {
          Processor: "AMD Ryzen 5 4680U Processor",
          RAM: "8GB LPDDR4x",
          Storage: "256GB SSD",
          Display: "13.5-inch PixelSense Touch Display",
          Graphics: "Integrated",
          OperatingSystem: "Windows 11 Home"
      }
    },
    { 
        name: "Apple MacBook Air", 
        price: "₹92,990", 
        image: "Img/AppleM1.jpg", 
        specifications: {
            Processor: "Apple M1 chip",
            RAM: "8GB",
            Storage: "256GB SSD",
            Display: "13.3-inch Retina Display",
            Graphics: "Integrated 7-core GPU",
            OperatingSystem: "macOS Big Sur"
        }
    },
    { 
        name: "HP Pavilion Gaming", 
        price: "₹69,990", 
        image: "Img/HpPavilion.jpg", 
        specifications: {
            Processor: "Intel Core i5-9300H",
            RAM: "8GB DDR4",
            Storage: "512GB SSD",
            Display: "15.6-inch FHD IPS Display",
            Graphics: "NVIDIA GeForce GTX 1650 4GB",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "Asus VivoBook Ultra K15", 
        price: "₹54,990", 
        image: "Img/AsusVivobook.jpg", 
        specifications: {
            Processor: "AMD Ryzen 5 5500U",
            RAM: "8GB DDR4",
            Storage: "512GB SSD",
            Display: "15.6-inch FHD Display",
            Graphics: "Integrated AMD Radeon Graphics",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "Acer Nitro 5", 
        price: "₹74,990", 
        image: "Img/AcerNitro5.jpg", 
        specifications: {
            Processor: "Intel Core i5-10300H",
            RAM: "8GB DDR4",
            Storage: "1TB HDD + 256GB SSD",
            Display: "15.6-inch FHD IPS Display",
            Graphics: "NVIDIA GeForce GTX 1650 4GB",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "Lenovo Legion Y540", 
        price: "₹84,990", 
        image: "Img/Lenovolegion5.jpg", 
        specifications: {
            Processor: "Intel Core i5-9300HF",
            RAM: "8GB DDR4",
            Storage: "1TB HDD + 256GB SSD",
            Display: "15.6-inch FHD IPS Display",
            Graphics: "NVIDIA GeForce GTX 1650 4GB",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "Dell Inspiron 15 5000", 
        price: "₹66,990", 
        image: "Img/DellInsp.jpg", 
        specifications: {
            Processor: "Intel Core i5-1135G7",
            RAM: "8GB DDR4",
            Storage: "512GB SSD",
            Display: "15.6-inch FHD Display",
            Graphics: "Intel Iris Xe Graphics",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "HP Envy x360", 
        price: "₹79,990", 
        image: "Img/HpEnvy.jpg", 
        specifications: {
            Processor: "AMD Ryzen 5 4500U",
            RAM: "8GB DDR4",
            Storage: "512GB SSD",
            Display: "13.3-inch FHD IPS Touchscreen",
            Graphics: "Integrated AMD Radeon Graphics",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
        name: "Asus ROG Strix G", 
        price: "₹1,14,990", 
        image: "Img/Strix.jpg", 
        specifications: {
            Processor: "Intel Core i5-10300H",
            RAM: "8GB DDR4",
            Storage: "512GB SSD",
            Display: "15.6-inch FHD IPS Display",
            Graphics: "NVIDIA GeForce GTX 1650 Ti 4GB",
            OperatingSystem: "Windows 10 Home"
        }
    },
    { 
    name: "Acer Swift 3", 
    price: "₹54,990", 
    image: "Img/AcerAspire5.jpg", 
    specifications: {
        Processor: "AMD Ryzen 5 4500U",
        RAM: "8GB DDR4",
        Storage: "512GB SSD",
        Display: "14-inch FHD IPS Display",
        Graphics: "Integrated Radeon Graphics",
        OperatingSystem: "Windows 10 Home"
    }
  },
  { 
        name: "Dell XPS 13", 
        price: "₹1,19,990", 
        image: "Img/DellX.jpg", 
        specifications: {
            Processor: "Intel Core i7-1165G7",
            RAM: "16GB LPDDR4x",
            Storage: "512GB SSD",
            Display: "13.4-inch 4K UHD+ InfinityEdge Touch Display",
            Graphics: "Intel Iris Xe Graphics",
            OperatingSystem: "Windows 10 Home"
        }
    },
  { 
      name: "Lenovo Yoga C940", 
      price: "₹1,09,990", 
      image: "Img/LenovoC940.jpg", 
      specifications: {
          Processor: "Intel Core i7-1065G7",
          RAM: "16GB LPDDR4X",
          Storage: "1TB SSD",
          Display: "14-inch UHD IPS Touch Display",
          Graphics: "Integrated Intel Iris Plus Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "Razer Blade 15", 
      price: "₹1,99,990", 
      image: "Img/Razer15.jpg", 
      specifications: {
          Processor: "Intel Core i7-10750H",
          RAM: "16GB DDR4",
          Storage: "1TB SSD",
          Display: "15.6-inch OLED 4K Touch Display",
          Graphics: "NVIDIA GeForce RTX 3060 6GB",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "MSI GS66 Stealth", 
      price: "₹1,39,990", 
      image: "Img/MsiGs66.jpg", 
      specifications: {
          Processor: "Intel Core i7-10750H",
          RAM: "16GB DDR4",
          Storage: "1TB SSD",
          Display: "15.6-inch FHD IPS Display",
          Graphics: "NVIDIA GeForce RTX 3060 6GB",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "LG Gram 17", 
      price: "₹1,49,990", 
      image: "Img/LgGram13.jpg", 
      specifications: {
          Processor: "Intel Core i7-1065G7",
          RAM: "16GB DDR4",
          Storage: "512GB SSD",
          Display: "17-inch WQXGA IPS Display",
          Graphics: "Intel Iris Plus Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  
  { 
      name: "Lenovo IdeaPad Flex 5", 
      price: "₹54,990", 
      image: "Img/LenovoIdeapadFlex5.jpg", 
      specifications: {
          Processor: "AMD Ryzen 5 4500U",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
          Display: "14-inch FHD IPS Touch Display",
          Graphics: "Integrated Radeon Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "Dell Inspiron 14 5000", 
      price: "₹69,990", 
      image: "Img/Dell7420.jpg", 
      specifications: {
          Processor: "Intel Core i5-1135G7",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
          Display: "14-inch FHD IPS Display",
          Graphics: "Intel Iris Xe Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "HP Pavilion x360", 
      price: "₹79,990", 
      image: "Img/Hpx360.jpg", 
      specifications: {
          Processor: "Intel Core i5-1135G7",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
          Display: "14-inch FHD IPS Touch Display",
          Graphics: "Intel Iris Xe Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
    name: "Asus TUF Gaming A15", 
    price: "₹89,990", 
    image: "Img/AsusTufA15.jpg", 
    specifications: {
        Processor: "AMD Ryzen 7 4800H",
        RAM: "16GB DDR4",
        Storage: "1TB SSD",
        Display: "15.6-inch FHD IPS Display",
        Graphics: "NVIDIA GeForce GTX 1660 Ti 6GB",
        OperatingSystem: "Windows 10 Home"
    }
  },
  { 
      name: "Lenovo IdeaPad S340", 
      price: "₹52,990", 
      image: "Img/Lenovos340.jpg", 
      specifications: {
          Processor: "Intel Core i5-1035G1",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
          Display: "14-inch FHD IPS Display",
          Graphics: "Integrated Intel UHD Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },

  { 
      name: "Asus ZenBook 14", 
      price: "₹65,990", 
      image: "Img/AsusZenbook14.jpg", 
      specifications: {
          Processor: "Intel Core i7-1165G7",
          RAM: "16GB LPDDR4X",
          Storage: "512GB SSD",
          Display: "14-inch FHD IPS Display",
          Graphics: "Integrated Intel Iris Xe Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "HP 15s", 
      price: "₹72,990", 
      image: "Img/Hp15s.jpg", 
      specifications: {
          Processor: "Intel Core i7-1165G7",
          RAM: "16GB DDR4",
          Storage: "1TB SSD",
          Display: "15.6-inch FHD IPS Display",
          Graphics: "Integrated Intel Iris Xe Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },
  { 
      name: "Dell Vostro 15", 
      price: "₹89,990", 
      image: "Img/DellVostro3500.jpg", 
      specifications: {
          Processor: "Intel Core i5-1135G7",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
          Display: "15.6-inch FHD IPS Display",
          Graphics: "Integrated Intel Iris Xe Graphics",
          OperatingSystem: "Windows 10 Home"
      }
  },

  ];



 // Calculate total number of pages
    const totalPages = Math.ceil(totalProductsData.length / productsPerPage);

    // Function to display products for the current page
function displayProducts(page) {
    productsContainer.innerHTML = ""; // Clear previous products

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentPageProducts = totalProductsData.slice(startIndex, endIndex);

    currentPageProducts.forEach(product => {
        // Creating product elements
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ${product.price}`;

        const productSpecifications = document.createElement("ul");
        for (const [specName, specValue] of Object.entries(product.specifications)) {
            const specItem = document.createElement("li");
            specItem.textContent = `${specName}: ${specValue}`;
            productSpecifications.appendChild(specItem);
        }

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productSpecifications);

        productsContainer.appendChild(productCard);
    });

    // Disable/Enable prev/next buttons based on current page...
    prevPageBtn.disabled = page === 1;
    nextPageBtn.disabled = page === totalPages;
}


    // Initial display of products
    displayProducts(currentPage);

    // Event listener for next page button
    nextPageBtn.addEventListener("click", function () {
        currentPage++;
        displayProducts(currentPage);
    });

    // Event listener for previous page button
    prevPageBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
        }
    });
});

