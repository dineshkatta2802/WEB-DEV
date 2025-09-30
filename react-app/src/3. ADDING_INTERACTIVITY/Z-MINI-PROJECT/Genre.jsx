export const Genre = [
{
    id: 0,
    Fashion: {
        Clothing: ["Mens", "Womens", "Kids", "Ethnic", "Western"],
        Footwear: ["Shoes", "Sneakers", "Sandals"],
        Accessories: ["Bags", "Belts", "Wallets", "Watches", "Sunglasses"],
        Jewellery: ["Gold", "Silver", "Artificial", "Luxury"],
    },
},
{
    id: 1,
    Electronics: {
        Mobiles: ["Smartphones", "Tablets", "Accessories"],
        Computers: ["Laptops", "Desktops", "Monitors", "Components"],
        Audio: ["Headphones", "Speakers", "Earbuds"],
        Cameras: ["DSLR", "Mirrorless", "Action Cameras"],
        HomeAppliances: ["Fridge", "AC", "Washing Machine", "Microwave"],
        KitchenAppliances: ["Mixer", "Oven", "Coffee Maker"],
    },
},
{
    id: 2,
    Living: {
        Furniture: ["Beds", "Sofas", "Chairs", "Tables", "Wardrobes"],
        Kitchenware: ["Cookware", "Utensils", "Storage"],
        Decor: ["Lighting", "Wall Art", "Carpets", "Curtains"],
        Gardening: ["Plants", "Tools", "Outdoor Furniture"],
    },
},
{
    id: 3,
    Grocery: {
        FreshProduce: ["Fruits", "Vegetables", "Dairy"],
        PackagedFood: ["Snacks", "Frozen Food", "Instant Food"],
        Beverages: ["Tea", "Coffee", "Juices", "Soft Drinks"],
        Gourmet: ["Organic Food", "Imported Goods"],
    },
},
{
    id: 4,
    Health: {
        Skincare: ["Creams", "Lotions", "Facewash"],
        Haircare: ["Shampoo", "Conditioner", "Hair Oil"],
        Grooming: ["Razors", "Trimmers", "Perfumes"],
        Fitness: ["Treadmills", "Dumbbells", "Yoga Mats"],
        Supplements: ["Vitamins", "Protein", "Ayurvedic"],
        Medicines: ["OTC", "Prescription", "Healthcare Devices"],
    },
},
{
    id: 5,
    Stationery: {
        Books: ["Academic", "Novels", "Magazines"],
        Stationery: ["Pens", "Notebooks", "Files"],
        ArtAndCraft: ["Paints", "Brushes", "DIY Kits"],
        Ebooks: ["PDFs", "Online Courses", "Digital Content"],
    },
},
{
    id: 6,
    Kids: {
        BabyCare: ["Diapers", "Feeding Bottles", "Skin Care"],
        Toys: ["Educational", "Action Figures", "Board Games"],
        KidsFashion: ["Clothing", "Footwear", "Accessories"],
        BabyGear: ["Strollers", "Cribs", "Car Seats"],
    },
},
{
    id: 7,
    Sports: {
        Sportswear: ["Jerseys", "Shorts", "Shoes"],
        Indoor: ["Table Tennis", "Carrom", "Chess"],
        Outdoor: ["Cricket", "Football", "Badminton"],
        Adventure: ["Camping", "Hiking Gear", "Cycling"],
        FitnessAccessories: ["Skipping Rope", "Resistance Bands"],
    },
},
{
    id: 8,
    Automotive: {
        CarAccessories: ["Seat Covers", "Mats", "Covers"],
        BikeAccessories: ["Helmets", "Jackets", "Spare Parts"],
        Tools: ["Wrenches", "Jacks", "Repair Kits"],
        TyresAndLubricants: ["Tyres", "Engine Oil", "Coolants"],
    },
},
{
    id: 9,
    Pets: {
        Food: ["Dog Food", "Cat Food", "Bird Food"],
        Toys: ["Balls", "Chew Toys", "Scratchers"],
        Grooming: ["Shampoos", "Brushes", "Nail Clippers"],
        Health: ["Supplements", "Veterinary Products"],
    },
},
{
    id: 10,
    LuxuryItems: {
        DesignerWear: ["High Fashion", "Luxury Brands"],
        Watches: ["Smart Watches", "Premium Watches"],
        Jewellery: ["Diamond", "Gold", "Platinum"],
        Collectibles: ["Antiques", "Paintings", "Limited Editions"],
    },
},
{
    id: 11,
    Digital: {
        Software: ["Antivirus", "Office Tools", "Design Software"],
        Subscriptions: ["Streaming", "Music", "E-learning"],
        Travel: ["Flights", "Hotels", "Experiences"],
        Rentals: ["Furniture", "Vehicles", "Property"],
        FreelanceServices: ["Consulting", "Repair", "Online Support"],
    },
    },
];

    // //Lets get an array of the MainKeys that you want to display by .map() method in array
    // const Keys = Genre.map((data) => Object.keys(data).find((res) => res !== 'id'));
    // console.log(Keys);//This is a Mainkeys array
    // let MainKey = Keys[0];

    // // Lets get the subkeys of the Genre 
    // const SubKeys = Object.keys(Genre[0][MainKey]);
    // console.log(SubKeys);
    
    // for(let i=0 ;i<=SubKeys.length;i++){
    //     const InnerSubCategory = Object.values(Genre[0][MainKey])[1];
    //     console.log(InnerSubCategory);
    // }