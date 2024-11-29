// Q1: Write a program of a basic mark sheet using JavaScript involves let, const variables to
// store marks for different subjects and then calculating the total marks, percentage, and grade
// based on those marks. Using template literals and variable using let and const and final
// output is shown in document.write().



const english = +prompt("Enter your english marks No:");
const math = +prompt("Enter your math marks No:");
const urdu = +prompt("Enter your urdu marks No:");
const computer = +prompt("Enter your computer marks No:");
const physics = +prompt("Enter your physics marks No:");

const totalMarks = 500;
const ObtaindMarks = english + math + urdu + computer + physics

const percentage = ((ObtaindMarks/totalMarks)*100).toFixed(0)

let grade = percentage >= 90 && percentage <= 100 ? "A+" : 
            percentage >= 80 && percentage <= 89  ? "A"  :
            percentage >= 70 && percentage <= 79  ? "B"  :
            percentage >= 60 && percentage <= 69  ? "C"  :
            percentage >= 50 && percentage <= 59  ? "D"  :
            percentage >= 34 && percentage <= 49  ? "Pass"  :
            percentage >= 0 && percentage <= 39  ? "Fail"  : "Invalid Percantage!"

const sheets = document.getElementById("sheets")
sheets.innerHTML = (
    `
    <table border="1" style="border-collapse: collapse; width:80%; margin:0 auto; ">
    <tr>
    <th style="padding:15px; width:100px;" >Urdu</th>
    <th style="padding:15px; width:100px;" >English</th>
    <th style="padding:15px; width:100px;" >Math</th>
    <th style="padding:15px; width:100px;" >Computer</th>
    <th style="padding:15px; width:100px;" >Physics</th>
    <th style="padding:15px; width:100px;" >Total Marks</th>
    <th style="padding:15px; width:100px;" >Obtaind Marks</th>
    </tr>
    <tr>
    <td style="padding:15px; width:100px;" >${urdu}</td>
    <td style="padding:15px; width:100px;" >${english}</td>
    <td style="padding:15px; width:100px;" >${math}</td>
    <td style="padding:15px; width:100px;" >${computer}</td>
    <td style="padding:15px; width:100px;" >${physics}</td>
    <td style="padding:15px; width:100px;" >${totalMarks}</td>
    <td style="padding:15px; width:100px;" >${ObtaindMarks}</td>
    </tr>
    <tr>
    <th style="padding:15px; width:100px;" colspan="2">Percentage</th>
    <th style="padding:15px; width:100px;">${percentage}%</th>
    <th style="padding:15px; width:100px;" colspan="2">Grade</th>
    <th style="padding:15px; width:100px;" colspan="2">${grade}</th>
    </tr>
    </table>
    `
)


// Q2: Create a mobile brand and model filtering app with filter mobile brand and then second
// dropdown have same brand model in second dropdown and a single search button when
// click the selected brand and model have shown in html body



const mobiles = {
    iphone: {
       
      iphone7: {
        imageURL: "https://www.favobliss.com/image/cache/catalog/apple-iphone-14-128gb-blue%20(5)-550x550.jpg",
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        model:"Iphone 7",
        brand:"iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8: {
        imageURL: "https://www.favobliss.com/image/cache/catalog/apple-iphone-14-128gb-blue%20(5)-550x550.jpg",
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        model:"Iphone 8",
        brand:"iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8plus: {
        imageURL: "https://www.favobliss.com/image/cache/catalog/apple-iphone-14-128gb-blue%20(5)-550x550.jpg",
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        model:"Iphone 8 plus",
        brand:"iphone",

        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphoneX: {
        imageURL: "https://www.favobliss.com/image/cache/catalog/apple-iphone-14-128gb-blue%20(5)-550x550.jpg",
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        model:"Iphone X",
        brand:"iphone",

        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone11: {
        imageURL: "https://www.favobliss.com/image/cache/catalog/apple-iphone-14-128gb-blue%20(5)-550x550.jpg",
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        model:"Iphone 11",
        brand:"iphone",

        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
    },
    xiomi: {
      redmiA2: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 12 Pro",
        display: {
          size: 6.73,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi10: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 8 Pro",
        display: {
          size: 5.73,
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        brand:"xiomi",

        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi11: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 14 Pro",
        display: {
          size: 6.0,
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi12: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 12 Pro",
        display: {
          size: 7.4,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        brand:"xiomi",

        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 14 Pro",
        display: {
          size: 8.03,
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13C: {
        imageURL: "https://cdn.dxomark.com/wp-content/uploads/medias/post-149039/Xiaomi-13-Ultra_featured-image-packshot-review.jpg",
        model: "Mi 14 Pro",
        display: {
          size: 8.43,
          resolution: "4200 x 1340",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 9 Gen 5",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",

        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
    },
    realme: {
      realmiNote50: {
        imageURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/realmec30.jpg?VersionId=WwKCCC6ZCNbHVkHCF5d9uUXt7ZOW3FA8&size=690:388 ",
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.5 inches",
          resolution: "FHD+ (1080 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "128GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC67: {
        imageURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/realmec30.jpg?VersionId=WwKCCC6ZCNbHVkHCF5d9uUXt7ZOW3FA8&size=690:388 ",
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.7 inches",
          resolution: "FHD+ (1280 x 2100 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "14MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 11",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC53: {
        imageURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/realmec30.jpg?VersionId=WwKCCC6ZCNbHVkHCF5d9uUXt7ZOW3FA8&size=690:388 ",
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7. 1inches",
          resolution: "FHD+ (1180 x 2500 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "128GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "18MP",
          },
        },
        battery: {
          capacity: "8000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9: {
        imageURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/realmec30.jpg?VersionId=WwKCCC6ZCNbHVkHCF5d9uUXt7ZOW3FA8&size=690:388 ",
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7.2 inches",
          resolution: "FHD+ (1180 x 2200 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "24MP",
          },
        },
        battery: {
          capacity: "10000mAh",
          fastCharging: "75W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9i: {
        imageURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/realmec30.jpg?VersionId=WwKCCC6ZCNbHVkHCF5d9uUXt7ZOW3FA8&size=690:388 ",
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.9 inches",
          resolution: "FHD+ (1480 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "512GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "2000mAh",
          fastCharging: "70W",
        },
        operatingSystem: "Android 13",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
    },
    samsung: {
      samsung_Galaxy_S24: {
        imageURL: "https://www.mega.pk/items_images/Samsung+Galaxy+S10+Single+sim+8GB+RAM+128GB+Storage+Without+Warranty+PTA+Approve+Price+in+Pakistan%2C+Specifications%2C+Features_-_19757.webp",
        brand: "Samsung",
        model: "Galaxy S24 Ultra", // Replace with specific model
  
        // Display
        displaySize: 6.8, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          specialFeatures: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        battery: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S51: {
        imageURL: "https://www.mega.pk/items_images/Samsung+Galaxy+S10+Single+sim+8GB+RAM+128GB+Storage+Without+Warranty+PTA+Approve+Price+in+Pakistan%2C+Specifications%2C+Features_-_19757.webp",
        brand: "Samsung",
        model: "Galaxy S51 Pro", // Replace with specific model
  
        // Display
        displaySize: 7.2, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 9 Gen 4", // Replace with actual processor
        memory: {
            ram: 8,
            storage: 128,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 112,
          specialFeatures: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        battery: 8000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 11",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_Prime: {
        imageURL: "https://www.mega.pk/items_images/Samsung+Galaxy+S10+Single+sim+8GB+RAM+128GB+Storage+Without+Warranty+PTA+Approve+Price+in+Pakistan%2C+Specifications%2C+Features_-_19757.webp",
        brand: "Samsung",
        model: "Galaxy Prime Ultra", // Replace with specific model
  
        // Display
        displaySize: 7.4, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 10", // Replace with actual processor
        memory: {
            ram: 4,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          specialFeatures: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        battery: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 13",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S46: {
        imageURL: "https://www.mega.pk/items_images/Samsung+Galaxy+S10+Single+sim+8GB+RAM+128GB+Storage+Without+Warranty+PTA+Approve+Price+in+Pakistan%2C+Specifications%2C+Features_-_19757.webp",
        brand: "Samsung",
        model: "Galaxy S46 Ultra", // Replace with specific model
  
        // Display
        displaySize: 5.11, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 6,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          specialFeatures: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        battery: 20000, // mAh
        fastCharging: "65W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S77: {
        imageURL: "https://www.mega.pk/items_images/Samsung+Galaxy+S10+Single+sim+8GB+RAM+128GB+Storage+Without+Warranty+PTA+Approve+Price+in+Pakistan%2C+Specifications%2C+Features_-_19757.webp",
        brand: "Samsung",
        model: "Galaxy S77 Ultra", // Replace with specific model
  
        // Display
        displaySize: 8.5, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 12 Gen 24", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 158,
          specialFeatures: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        battery: 20000, // mAh
        fastCharging: "85W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: true,
      },
    },
  };

const selectBox = document.getElementById("select")
const selectBoxOne = document.getElementById("selectOne")

const allCard = document.getElementById("bootstrap-all-cards")



let selectMobile = Object.keys(mobiles)
for(let i = 0; i < selectMobile.length; i++){
  selectBox.innerHTML += `<option value="${selectMobile[i]}">${selectMobile[i]}</option>`
  
}

function findDevice(e){
  let oneOption = Object.keys(mobiles[e.target.value])
  for(let i = 0; i < oneOption.length; i++){
      selectBoxOne.innerHTML += `<option value="${oneOption[i]}">${oneOption[i]}</option>`
  }

selectBoxOne.addEventListener("change", function(p){



document.getElementById("finding").onclick = function(){

console.log(mobiles[e.target.value][p.target.value]);

allCard.innerHTML = `
<div class="container py-4 my-4 mx-auto d-flex flex-column">
<div class="header">
<div class="row r1">
<div class="col-md-9 abc">
    <h1>${mobiles[e.target.value][p.target.value].brand}</h1>
</div>
<div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
<p class="text-right para">Based on 250 Review</p>
</div>
</div>
<div class="container-body mt-4">
<div class="row r3">
<div class="col-md-5 p-0 klo">
    <ul>
        <h3>${mobiles[e.target.value][p.target.value].model}</h3>
        <li>${mobiles[e.target.value][p.target.value].processor}</li>
        <li>${mobiles[e.target.value][p.target.value].battery}mAh Capicity</li>
        <li>12 Months Warranty</li>
        <li>EMI Starting from (On Credit Cards)</li>
        <li>Normal Delivery : 4-5 Days</li>
        <li>Express Delivery : 2-3 Days</li>
        <li>COD Available (All Over India)</li>
    </ul>
</div>
<div class="col-md-7"> <img src="${mobiles[e.target.value][p.target.value].imageURL}" width="90%" height="95%"> </div>

</div>
</div>
<div class="footer d-flex flex-column mt-5">
<div class="row r4">
<div class="col-md-2 myt des"><a href="#">Description</a></div>
<div class="col-md-2 myt "><a href="#">Review</a></div>
<div class="col-md-2 mio offset-md-4"><a href="#">ADD TO CART</a></div>
<div  class="col-md-2 myt "><button type="button" class="btn btn-outline-warning"><a  href="#">BUY NOW</a></button></div>
</div>
</div>
</div>
`


}

} ,false)
}

selectBox.addEventListener("change", findDevice, false)

