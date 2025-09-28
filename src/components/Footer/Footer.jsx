import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const AppStore = "https://s3-alpha-sig.figma.com/img/e4f8/2b16/b3397cd170bdc09d4751bbfbcff92dda?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=efmq5ipdQyRmr5Tb3IZc6c9YNmtpwnm3w2NG6fC-XMYt86Y9WoYUyf2jGSdu3VxK8SzdBrrod0YjqVG5Y1laMg2pRSoqfUDCRmIEOUo09EYf6kO46iBpin2YAvnb-pU0YYGuHvU71eT03M7LvWupU~C~RsuEdONe-nksq3zEaLNYbBnZHxOJlmFbYHRyfetDLVcbiffTWMEKLS3MXD2Idiiu12NxRDjHPz~0cwa88okI61iOn-~Fbh9gq4yyIiOh2T7Qf6CKyfRLjPcpWDBt5pASu9BYODtKztEGDsQ1PRTMA1A1Hr~ewjGd-WDuItMzidGsTDw9nMGftIB0H9vqpg__";
const GooglePlay = "https://s3-alpha-sig.figma.com/img/b500/cd0f/cbcc75607be601c5da1b99059288e2bd?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pumS7ej01jPAUqhWy0uMaE0Yllcm6nTnv2nAtSeukW8XK4JCFCxYbXp34DXV0IwO1QychgNJl7iQJ2I7feU0UWusbEgUoQpZqjvVVSNa0U5QtutVhkfQxM7V1dWPgE8l0N3W4swEGRIEwasckUn0TBOD4umQ-9LGqM0LLKAO7E0rvkzfJO7ADErghFTuVaK5GnzYpWqlKqJZtKu0JAMBPjvuLFD5ThE76xdHP5mj1tP7vGQXH5YLFErSevtZOBKVhEak8owf5Eq7Z6qwzt2XbvLwLEQzpWus8VqGl1K~K80eeCPoF0e4VUO6fDK8tCCu~5AYV1degcTPLfehlicH0Q__";

const paymentMethods = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqz0qtXghh1ZHImnO8LmHcfMqTz6c0VILSQ&s", // Visa
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlxmaeHpkOZde33aU6LX6ejwcKb7jGVPV5w&s", // Mastercard
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8JVbvp2ePvUpoJypl35abos3dMg7fg5N5g&s", // Paypal
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        {/* Newsletter */}
        <div className="flex flex-col items-center justify-between rounded-lg bg-white p-8 md:flex-row">
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <h2 className="text-2xl font-bold">Join our newsletter for £10 offs</h2>
            <p className="mt-2 text-sm text-gray-500">Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!</p>
          </div>
          <div className="w-full max-w-md">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button type="submit" className="rounded-r-lg bg-purple-600 px-6 py-2 font-bold text-white">
                SEND
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing you agree to our <a href="#" className="text-purple-600">Terms & Conditions</a> and <a href="#" className="text-purple-600">Privacy & Cookies Policy.</a>
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-gray-200 pt-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold">Do You Need Help?</h3>
            <p className="mt-4 text-sm text-gray-500">Contact Us</p>
            <div className="mt-4 flex items-center">
              <Phone size={24} className="text-purple-600" />
              <div className="ml-4">
                <p className="text-xs text-gray-500">Monday-Friday: 08am-9pm</p>
                <p className="font-bold">0 800 300-353</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <Mail size={24} className="text-purple-600" />
              <div className="ml-4">
                <p className="text-xs text-gray-500">Need help with your order?</p>
                <p className="font-semibold">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkColumn title="Make Money with Us" links={['Sell on Grogin', 'Sell Your Services on Grogin', 'Sell on Grogin Business', 'Sell Your Apps on Grogin', 'Become an Affilate', 'Advertise Your Products', 'Sell-Publish with Us', 'Become an Blowwe Vendor']} />
          <FooterLinkColumn title="Let Us Help You" links={['Accessibility Statement', 'Your Orders', 'Returns & Replacements', 'Shipping Rates & Policies', 'Refund and Returns Policy', 'Privacy Policy', 'Terms and Conditions', 'Cookie Settings', 'Help Center']} />
          <FooterLinkColumn title="Get to Know Us" links={['Careers for Grogin', 'About Grogin', 'Inverstor Relations', 'Grogin Devices', 'Customer reviews', 'Social Responsibility', 'Store Locations']} />

          {/* App Download */}
          <div>
            <h3 className="font-bold">Download our app</h3>
            <div className="mt-4 flex items-center">
              <a href="#"><img src={AppStore} alt="App Store" className="h-10" /></a>
              <div className="ml-2">
                <p className="text-xs text-gray-500">Download App Get</p>
                <p className="text-xs text-gray-500">-10% Discount</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <a href="#"><img src={GooglePlay} alt="Google Play" className="h-10" /></a>
              <div className="ml-2">
                <p className="text-xs text-gray-500">Download App Get</p>
                <p className="text-xs text-gray-500">-20% Discount</p>
              </div>
            </div>
            <h3 className="mt-6 font-regular text-sm">Follow us on social media:</h3>
            <div className="mt-2 flex space-x-2">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              {/* <SocialIcon icon={<Pinterest size={20} />} /> */}
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between px-4 py-4 sm:flex-row">
          <p className="text-center text-xs text-gray-500 sm:text-left">
            Copyright 2025 © Shopstore WooCommerce WordPress Theme. All right reserved. Powered by <a href="#" className="font-semibold text-purple-600">BlackRise Themes.</a>
          </p>
          <div className="my-4 flex items-center space-x-4 sm:my-0">
            {paymentMethods.map((src, i) => (
              <img key={i} src={src} alt="Payment method" className="h-5" />
            ))}
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#" className="underline">Terms and Conditions</a>
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Order Tracking</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="font-bold">{title}</h3>
    <ul className="mt-4 space-y-2">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" className="text-sm text-gray-600 hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white">
    {icon}
  </a>
);

export default Footer;
