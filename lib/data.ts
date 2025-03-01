const data = {
  carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=Shoes'
    },
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner2.jpg',
      url: '/search?category=T-Shirts'
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/banner3.jpg',
      url: '/search?category=Wrist Watches'
    }
  ],

  headerMenu: [
    { name: "Today's Deals", href: '/search?tag=todays-deals' },
    { name: 'New Arrivals', href: '/search?tag=new-arrivals' },
    { name: 'Featured Products', href: '/search?tag=featured-products' },
    { name: 'Best Sellers', href: '/search?tag=best-sellers' },
    { name: 'Browser History', href: '/search?tag=browser-history' },
    { name: 'Customer Service', href: '/search?tag=customer-service' },
    { name: 'About Us', href: '/search?tag=about-us' },
    { name: 'Help', href: '/search?tag=help' }
  ]
};

export default data;
