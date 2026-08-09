export const WHATSAPP_NUMBER = '918838810132';
export const PHONE_NUMBER = '+91 88388 10132';
export const PHONE_NUMBER_2 = '+91 80723 71102';
export const EMAIL = 'Fastfixdoorstep@gmail.com';
export const ADDRESS = 'No 43, Subbulakshmi Nagar, Kundrathur, Chennai - 600069.';
export const BUSINESS_HOURS = 'Mon – Sat: 9:00 AM – 7:00 PM';
export const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/search/Kundrathur+Chennai';
export const GOOGLE_REVIEWS_LINK = 'https://www.google.com/maps/search/Star+Computer+Kundrathur';
export const LOCATIONS = ['Kundrathur', 'Porur', 'Pallavaram', 'Chromepet', 'Tambaram'];

// Full doorstep service coverage with approx. distance from our Kundrathur base
export const SERVICE_AREAS = [
  { name: 'Kundrathur', distance: '0 km' },
  { name: 'Mangadu', distance: '~4 km' },
  { name: 'Kovur', distance: '~4 km' },
  { name: 'Anakaputhur', distance: '~5 km' },
  { name: 'Thirumudivakkam', distance: '~5 km' },
  { name: 'Pammal', distance: '~6 km' },
  { name: 'Pallavaram', distance: '~7 km' },
  { name: 'Chromepet', distance: '~8 km' },
  { name: 'Porur', distance: '~8 km' },
  { name: 'Poonamallee', distance: '~8 km' },
];

export const products = [
  {
    id: 'new-laptops',
    title: 'New Laptops',
    badge: 'NEW',
    badgeColor: 'primary',
    description: 'Latest laptops from top brands — HP, Dell, Lenovo, Asus — with manufacturer warranty and free setup.',
    priceRange: '1 Years Warranty',
    image: 'https://images.unsplash.com/photo-1573496799175-606e47a7d4f6',
    alt: 'Modern silver laptop open on white desk in bright office environment',
    features: ['1-year manufacturer warranty', 'Free Windows setup', 'Antivirus included', 'EMI available'],
    slug: 'new-laptops',
  },
  {
    id: 'used-laptops',
    title: 'Second-Hand Laptops',
    badge: 'TESTED',
    badgeColor: 'accent',
    description: 'Quality-checked refurbished laptops (5th to 12th Gen available) with 3-month warranty. All units cleaned, upgraded, and tested.',
    priceRange: 'Starts from ₹7,999 (3 to 6 Month Warranty)',
    image: 'https://images.unsplash.com/photo-1702726001096-096efcf640b8',
    alt: 'Refurbished laptop with glowing screen on dark desk in dim lighting',
    features: ['5th to 12th Gen available', '3-month store warranty', 'Quality-check certified', 'SSD upgraded', 'Affordable pricing'],
    slug: 'used-laptops',
  },
  {
    id: 'new-desktops',
    title: 'New Desktops',
    badge: 'NEW',
    badgeColor: 'primary',
    description: 'Custom PC builds and branded desktops for home, office, and gaming. Built to your exact specs.',
    priceRange: 'Starts from ₹12,000 (1 Year Warranty)',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f50baeee-1784565323384.png',
    alt: 'New gaming desktop computer tower with colorful LED lighting in dark room',
    features: ['Custom PC builds', 'Branded systems', 'Gaming rigs available', '1-year warranty'],
    slug: 'new-desktops',
  },
  {
    id: 'used-desktops',
    title: 'Second-Hand Desktops',
    badge: 'TESTED',
    badgeColor: 'accent',
    description: 'Reliable refurbished desktop systems at affordable prices. Ideal for home and small office use.',
    priceRange: 'Starts from ₹6,999 (3 to 6 Month Warranty)',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11dcbafcf-1772789832580.png',
    alt: 'Desktop computer setup with monitor keyboard and mouse on clean office desk in bright room',
    features: ['3-month warranty', 'Tested & cleaned', 'Ready to use', 'Best value'],
    slug: 'used-desktops',
  },
];

// Accessories / upgrades sold alongside computers (shown in the sales section)
export const accessories = ['Monitor', 'SSD', 'RAM', 'Keyboard & Mouse', 'Cabinet & SMPS', 'UPS', 'Webcam', 'Speakers'];

// Full doorstep service list (used on the dedicated Doorstep Service section)
export const doorstepServicesList = [
  'Desktop & Laptop Service',
  'Windows Installation',
  'Software Installation',
  'SSD / RAM Upgrade',
  'Laptop & Desktop Repair',
  'Keyboard / Screen Replacement',
  'Virus & Performance Issues',
  'Data Backup & Transfer',
  'Wi-Fi / Printer Setup',
  'New & Used Computer Sales',
];

// Services shown as icon cards (Services section + Services page)
// Prices sourced from the FastFix "Services & Starting Prices" flyer
export const services = [
  { id: 'general-service', title: 'General Service (Cleaning)', icon: 'SparklesIcon', emoji: '🧹', description: 'Complete internal & external cleaning, thermal paste replacement, and dust removal for smoother performance.', time: 'Same day', originalPrice: '₹599', price: '₹499' },
  { id: 'windows-installation', title: 'OS Installation (Windows)', icon: 'WindowIcon', emoji: '🪟', description: 'Fresh Windows 10/11 installation with all drivers and essential software configured.', time: '1–2 hours', originalPrice: '₹899', price: '₹749' },
  { id: 'software-installation', title: 'Software Installation', icon: 'ComputerDesktopIcon', emoji: '📀', description: 'Installation of MS Office, antivirus, drivers, and any software you need — done safely and quickly.', time: '1 hour', originalPrice: '₹799', price: '₹649' },
  { id: 'virus-removal', title: 'Virus Removal', icon: 'ShieldCheckIcon', emoji: '🛡️', description: 'Complete malware, virus & adware removal along with system performance optimization.', time: '1–2 hours', originalPrice: '₹499', price: '₹399' },
  { id: 'ssd-hdd-upgrade', title: 'Hard Disk / SSD Upgrade', icon: 'CircleStackIcon', emoji: '💾', description: 'Upgrade to a faster SSD or higher-capacity HDD with complete data transfer included.', time: '2–3 hours', originalPrice: '₹1,299', price: '₹1,049' },
  { id: 'ram-upgrade', title: 'RAM Upgrade', icon: 'CpuChipIcon', emoji: '⚡', description: 'Boost your system speed and multitasking with a RAM upgrade for your laptop or desktop.', time: '30–60 mins', originalPrice: '₹799', price: '₹649' },
  { id: 'chip-level-repair', title: 'Chip Level Repair', icon: 'CpuChipIcon', emoji: '🔬', description: 'Advanced chip-level diagnosis and repair for power, charging, and display issues.', time: '1–2 days', originalPrice: '₹1,999', price: 'From ₹1,699' },
  { id: 'motherboard-repair', title: 'Motherboard Repair', icon: 'WrenchScrewdriverIcon', emoji: '🔧', description: 'Expert motherboard diagnosis and repair for no-power, no-display, and short-circuit issues.', time: '1–3 days', originalPrice: '₹2,499', price: 'From ₹2,099' },
  { id: 'data-recovery', title: 'Data Recovery', icon: 'CloudArrowUpIcon', emoji: '📁', description: 'Professional recovery of lost or deleted data from crashed hard drives, SSDs, and storage devices.', time: '1–2 days', originalPrice: '₹1,499', price: 'From ₹1,199' },
  { id: 'display-replacement', title: 'Display Replacement', icon: 'DevicePhoneMobileIcon', emoji: '🖥️', description: 'Original & compatible laptop screen replacement for all brands, with same-day service available.', time: 'Same day', originalPrice: '₹1,999', price: 'From ₹1,499' },
];

export const whyChooseUs = [
  { title: 'Doorstep Service', description: 'We come to your location', icon: 'HomeIcon' },
  { title: 'Experienced Service', description: 'Years of hands-on computer expertise', icon: 'UserGroupIcon' },
  { title: 'Genuine Parts', description: 'Original & compatible spare parts', icon: 'CpuChipIcon' },
  { title: 'Fast Response', description: 'Quick call-back & same-day visits', icon: 'BoltIcon' },
  { title: 'Transparent Pricing', description: 'No hidden charges, upfront quotes', icon: 'CurrencyRupeeIcon' },
  { title: 'Sales & Service', description: 'Everything under one roof', icon: 'ShieldCheckIcon' },
];

export const testimonials = [
  { name: 'Ramesh Kumar', location: 'Kundrathur', rating: 5, review: 'Technician came home within an hour and fixed my laptop screen. Very professional and fair pricing.' },
  { name: 'Priya Sundaram', location: 'Porur', rating: 5, review: 'Bought a second-hand desktop for my son — great condition and honest advice. Highly recommend FastFix.' },
  { name: 'Arun Prakash', location: 'Pallavaram', rating: 4, review: 'Doorstep Windows installation was quick and hassle-free. Saved me a trip to the shop.' },
  { name: 'Divya Raj', location: 'Chromepet', rating: 5, review: 'Data recovery from a crashed hard drive — they recovered everything. Excellent service!' },
  { name: 'Karthik S', location: 'Tambaram', rating: 5, review: 'Called them for a Wi-Fi setup issue, resolved same day at my office. Transparent pricing, no surprises.' },
];

export const serviceCategories = [
  'Laptop Repair',
  'Desktop Repair',
  'Screen Replacement',
  'Keyboard Replacement',
  'SSD / RAM Upgrade',
  'Windows Installation',
  'Software Installation',
  'Data Backup & Recovery',
  'Virus Removal',
  'Printer Service',
  'Wi-Fi / Network Setup',
  'General Maintenance',
  'New Laptop Purchase',
  'Used Laptop Purchase',
  'New Desktop Purchase',
  'Used Desktop Purchase',
  'Doorstep Service',
  'Other',
];