import React from 'react';
import TopBar from '../components/TopBar.jsx';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import PromoBanner from '../components/PromoBanner.jsx';
import ProductCard from '../components/ProductCard.jsx';
import FeaturesRow from '../components/FeaturesRow.jsx';

// Figma-hosted banners
const banner1 = "https://s3-alpha-sig.figma.com/img/7ac8/3d91/a514414092bc8acdb6b985c046f78c8b?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CI~ZZRfKg3aG~wfun-acaicE7RV9F22-m4kisJ3FWlKkk9aw82HZ57Okee95QGAuUDBmdwrdZ7G6BIWx64qHnp3VQCR0HUU-UcM5u1lbWyIukQjmV7ttwNBpM5j-ujO2EgaJu~6qER0ZNgbLjZ65h4j49cNJJzoAzZWRNwH9nqDp5IqSUP~hFHBwq3BOlikxPMziyg1WQGOBAGkjapnQD22J~7V8nYoxjnqvxu3ZfJRXAGVWhHh~SmiHWQrJZ91qWF2XdoESHgyFMfR9Km2Nem4tt4ni-YekemzshvkvQ-sJZ5NiUglVG6MqYIoe239uoUocsQadGy9K4GKKt2FaQ__";
const banner2 = "https://s3-alpha-sig.figma.com/img/52a5/598c/dc9f0e5287886d404e631ad26d9c2267?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KrYwi3uHs0QSMsLm3jcUbIedP784LrfWK2euqZiC5KfFoVubBKXRkDMRtPR9L~NSmKPMu5o97pDdV6ilyKDezcRNZIhYcZ6WMDUvXrO4PGJC6dgWRSKksY1ZAztRzjtRycOB2xS9TRKg1QyR-OIjX6B7nL8DpU2~Dc4ITD8GZQ5GngWkyJ5~P~VscCrSVNonNMeF2mYYoRMk2xEsnYHCInt2cpScMF1eMm4KRCz2ayooVraqwEnOdtM4SM~rA-gZQz-DSwqqWhLAaWugd20gEdOmnMKhCt8in5XmEi2Oxkr1YhNMhN9QaXCecvv7QJbtNGTtQrK4-Tp68XA3w2~SSQ__";
const banner3 = "https://s3-alpha-sig.figma.com/img/d1db/6d41/177a2765693c84287cbf2f8a3ee1d76a?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tyz-pFoJ11WxnvNkfRZyDR0uPIg2lAD-E4M1HYdGHgD4E3l3Lm7EBc8QDQKOdV~DV~gytTA6agrNNF-tRkJOlO0C5X7Y8pttn8SaiyuJeH4tqwdiWIK~lFpiDkYp9WOsH4pQfbtVKFJqYZLczYn4wyYlwwSpt5O43hgMXt1cd2TkXWIeNV43dgLcB2EMmnVWTa1WrxKKpulikwkTjm8jaA78dOnreQFkqDmKD16z4G4-NTSFmhc6qpGUNddHBzKmkDQQIYXDDqPS--b1Ix6wYMP8l-o9CljGIOYD55ehsBEZlWnjTxAn3qlE8UCpPwTk7laJcOH2HrdsVAqTLu2hYg__";
// Additional banners for the second BannerList (Figma images)
const banner4 = "https://s3-alpha-sig.figma.com/img/21b6/bd03/5eea28c5e0ed5e3d72ca77de10fb670f?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mz2eAA2QWy~sc1NVhYef01SxAM3J8PhFMj7YxekvihuhztoOvn49qgyIPCWIs~8H~u5BQOceSiy7JsBZMxhR~CtVPILmLU~AS3bVF6-DX31FJCV3Y2a05WH5XfvcFaX~dBzavMRszLkjUh48VIkBlEqV2fjlxVOB2tT1g~YY1~xvv0sooU7dHj9EpJLjDVZ68~kWpCaQDdxsy93GiWm1bLW8sLrq48OQoSfz-fdXeKyoo71A2H5ntmZKLQ4B7qAjlaRZD5CR-FSRzO1-DoSG-NFHOpZc18hPI~uBr0aK8tJfpudcSLH4QE~YkA7xS6we1wcGOC1Eq6OcCHyWTqfvlg__";
const banner5 = "https://s3-alpha-sig.figma.com/img/028b/d3e0/be09d11eecbcaed8a6f29bd45634036d?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U9zs8fAWL3Sp1HCw8davVcXjfYV7T5vlkB2x00Bh6h27nihrqQ9m5nchGQCimW6mmBWJv19gQorn-4LTCbLjOVwJT68cja-v5LboKDQJCRiEq6YBcgpCFdcyI9hRj5xLBPJOFk0Xyu2nZHS3V30nR6sy0SmrKMNNGd3c4Vd0UkueaX6-NqPHg1TYRbxyUDM4XE6vze8aYrYEfmZHYkvxghk1OAlUz3oLun7GEg~sML5JabOrbbPKUu5WoT-XnRcWPY12JcF8pKTUaVajb~gHhiVfIqweWo3XnGm4hLEa4Xi2VOnYzLh5gF46z-ODWPrRFwJM6jl4JASA0SqUAKMIBg__";
const banner6 = "https://s3-alpha-sig.figma.com/img/0bee/bf5a/c8c4cc9b06e74bc6f266d91a07b3a6d6?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eUXKy~gtVsyXRiJfRSlMMZb6wdWMM~XfHIoqsSJZnDlG9eW9-RXDNfFhlW84mJ7zkzwqU7qKgBiNvGgS4BgBq8H3yUWDObqDqKe5LNIiCmmkiBPUgJGpHf87IrTMft1v-wkxHQWC2jx0ZVP6p86TJYhq0V0cDZOWOr6aFqkn56enlv9X-6KRztoiag0hsBJBFPOgYhSnekiRYEhOWWCzQ9tnaZ~FLi-0ylGg7oF-MOtokckhoJY0B3uhEVH9R0uRfL7yfyguOMcFtHIxb0T8c-bpxk3-accd3NBZjwIK5pB7xrvWgsLXzvMNH9k~jt-tlNi6XVIBJMwPVDBeFM~73A__";

export default function HomeScreen() {
  const products = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/21b6/bd03/5eea28c5e0ed5e3d72ca77de10fb670f?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mz2eAA2QWy~sc1NVhYef01SxAM3J8PhFMj7YxekvihuhztoOvn49qgyIPCWIs~8H~u5BQOceSiy7JsBZMxhR~CtVPILmLU~AS3bVF6-DX31FJCV3Y2a05WH5XfvcFaX~dBzavMRszLkjUh48VIkBlEqV2fjlxVOB2tT1g~YY1~xvv0sooU7dHj9EpJLjDVZ68~kWpCaQDdxsy93GiWm1bLW8sLrq48OQoSfz-fdXeKyoo71A2H5ntmZKLQ4B7qAjlaRZD5CR-FSRzO1-DoSG-NFHOpZc18hPI~uBr0aK8tJfpudcSLH4QE~YkA7xS6we1wcGOC1Eq6OcCHyWTqfvlg__',
      title: 'Simply Orange Pulp Free Juice – 52 fl oz',
      rating: 4.5,
      price: '$2.45',
      oldPrice: '$4.13',
      badges: [
        { text: '41%', variant: 'danger' },
      ],
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/028b/d3e0/be09d11eecbcaed8a6f29bd45634036d?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U9zs8fAWL3Sp1HCw8davVcXjfYV7T5vlkB2x00Bh6h27nihrqQ9m5nchGQCimW6mmBWJv19gQorn-4LTCbLjOVwJT68cja-v5LboKDQJCRiEq6YBcgpCFdcyI9hRj5xLBPJOFk0Xyu2nZHS3V30nR6sy0SmrKMNNGd3c4Vd0UkueaX6-NqPHg1TYRbxyUDM4XE6vze8aYrYEfmZHYkvxghk1OAlUz3oLun7GEg~sML5JabOrbbPKUu5WoT-XnRcWPY12JcF8pKTUaVajb~gHhiVfIqweWo3XnGm4hLEa4Xi2VOnYzLh5gF46z-ODWPrRFwJM6jl4JASA0SqUAKMIBg__',
      title: 'California Pizza Kitchen Margherita, Crispy Thin Crust',
      rating: 4.3,
      price: '$11.77',
      oldPrice: '$14.77',
      badges: [
        { text: 'Cold Sale', variant: 'success' },
        { text: '21%', variant: 'danger' },
      ],
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/0bee/bf5a/c8c4cc9b06e74bc6f266d91a07b3a6d6?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eUXKy~gtVsyXRiJfRSlMMZb6wdWMM~XfHIoqsSJZnDlG9eW9-RXDNfFhlW84mJ7zkzwqU7qKgBiNvGgS4BgBq8H3yUWDObqDqKe5LNIiCmmkiBPUgJGpHf87IrTMft1v-wkxHQWC2jx0ZVP6p86TJYhq0V0cDZOWOr6aFqkn56enlv9X-6KRztoiag0hsBJBFPOgYhSnekiRYEhOWWCzQ9tnaZ~FLi-0ylGg7oF-MOtokckhoJY0B3uhEVH9R0uRfL7yfyguOMcFtHIxb0T8c-bpxk3-accd3NBZjwIK5pB7xrvWgsLXzvMNH9k~jt-tlNi6XVIBJMwPVDBeFM~73A__',
      title: 'Cantaloupe Melon Fresh Organic Cut',
      rating: 3.7,
      price: '$1.25',
      oldPrice: '$2.98',
      badges: [
        { text: 'Organic', variant: 'success' },
        { text: '59%', variant: 'danger' },
      ],
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <TopBar />
      <Header />

      <main className="mx-auto max-w-[1200px] px-4">
        <div className="mt-6">
          <Hero />
        </div>

        <FeaturesRow />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <PromoBanner
            imageUrl={banner1}
            lines={["Quality eggs at an", "affordable price"]}
          />
          <PromoBanner
            imageUrl={banner2}
            lines={["Snacks that nourishes", "our mind and body"]}
          />
          <PromoBanner
            imageUrl={banner3}
            lines={["Unbeatable quality,", "unbeatable prices."]}
          />
        </div>

        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold">New Arrivals</h2>
              <p className="text-sm text-gray-500">Dont miss this opportunity at a special discount just for this week.</p>
            </div>
            <a href="#" className="rounded-full border border-gray-200 px-3 py-1 text-xs font-bold">View All</a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </section>



        {/* Featured Products */}
        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold">Featured Products</h2>
              <p className="text-sm text-gray-500">Top picks curated specially for you.</p>
            </div>
            <a href="#" className="rounded-full border border-gray-200 px-3 py-1 text-xs font-bold">View All</a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <ProductCard key={`featured-${i}`} {...p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

