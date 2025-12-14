// Define a type for a car
export interface Car {
    image: string;
    fsh: boolean;
    badge: string;
    sold: boolean;
    price: string;
    reg: string;
    year: number;
    owners: number;
    keys: number;
    miles: string;
    make: string;
    model: string;
    transmission: string;
    fuel: string;
    engine: number;
    spec: string;
    link: string;
}

// Import images
import awaiting from '$lib/assets/cars/ImagesAwaiting.jpg'
import HK16OMC from '$lib/assets/cars/HK16OMC.jpg';
import GK63FNN from '$lib/assets/cars/GK63FNN.jpg';

// Export car list
export const cars: Car[] = [
    {
        image: GK63FNN,
        fsh: false,
        badge: "Fresh Service + Brake Pads and Discs",
        sold: false,
        price: "£3,995",
        reg: "GK63 FNN",
        year: 2013,
        owners: 3,
        keys: 2,
        miles: "83,000",
        make: "Honda",
        model: "Jazz",
        transmission: "Manual",
        fuel: "Petrol",
        engine: 1.4,
        spec: "i-VTEC ES Plus",
        // link: "",
        link: "https://www.autotrader.co.uk/car-details/202512118527901"
    },
    {
        image: HK16OMC,
        fsh: true,
        badge: "New Brake Pads + Discs",
        sold: true,
        price: "£5,995",
        reg: "HK16 OMC",
        year: 2016,
        owners: 4,
        keys: 2,
        miles: "63,420",
        make: "Hyundai",
        model: "i20",
        transmission: "Manual",
        fuel: "Petrol",
        engine: 1.2,
        spec: "Blue Drive SE",
        link: "https://www.autotrader.co.uk/car-details/202511127836973"
    }
];