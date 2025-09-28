import React from 'react';

const categories = [
  {
    name: 'Fruits & Vegetables',
    image: 'https://s3-alpha-sig.figma.com/img/a43a/4119/13df4ee38bfada97e84648233eeabb36?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V-VXVQ4wGlsdnAbzIyi7LgMGgSKMrnsC~ilqDfz2nxPz9lIEvT6xL6gK7PhVcJZmJs5EombDn9VAOHG57jASv1DzdZ~C2NDFt7XXhPb63E9lm5gaXWNum7TZHAcFSlPD0b9d3pvO0f~1rtU3xgpCc4ys22l55o-SxuZ3NJu9sPRc6viHjMVFDVSF~iX-lXN5iJCtBSFzuzYhWUz9laigXhGQRseedJ7ZtYFAew9yfTmVbS-Kt0VDnK5As6UKb1IfCWx4~cJrrTQdmMC~a1GTAzHZNBA62yhrrUkzI0WV48-xc4F8fNX5ZKcc~z2tptgq8L8IxQKtVjI1WF9n3oH0hw__',
  },
  {
    name: 'Baby & Pregnancy',
    image: 'https://s3-alpha-sig.figma.com/img/b41b/6e91/5e12445f7a0453d838ab39af8172e17a?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YiIwHZEf9CzYGo0ryCXRip43QplSXZ34FXqOnUpVQrqzSTSB2hvQBp6w4gXmb3slhN6he7udIBL8DVKJuPAqEh1I9CI9epq7OzCfSUTC3DZfq6T2Taw0DuHYGewRXZEVZvXSGYNfEigDYLmB71mEgjXN3tcSkzPZXENip-qNErf5j746SzSIJn7lMY5Dd8rSQ4~OTCV9axAFRshEPAOrFjNKqG8~UkferdX-by-e0Wm8vfaczO6I5otVYy0Bi9gWtf647NR9yWOFX8oCIqZP2xOH5ROv2K09LgkC2uPeUpctbI3KHO~Ch8mgTmHkVJOBIf-1nQayztS65PxDoFSvjA__',
  },
  {
    name: 'Beverages',
    image: 'https://s3-alpha-sig.figma.com/img/cc5f/a0ca/c7f1daa061e8930add636c5802bf04a6?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TJJb1PmVmA7m15JvOZzYkGlqylkVJjHe4Xy6~cV~apb3Fz4EeuYHMvAHCrZTQKu8mjtf4M5CyLeuufknDJBckS-stOHH3MhGEV7iKvsj0TjE4Rt3imS6GBsx33viFBCi7DA9OYQ98qIWZb3ohErK4XkEnGgPTTCP~CFUjIZAzHuZ6~LKLOTVrMPMUFjAHuTaI48riHtJO~E3yW4BdwizadUaJmx56kdFfapSJI~GRoqeuppd3C7PemaqHXePonwB6oP2OfpEAMMkth75HiOBkDWVyV5tiJwXkXQPRLBMAkCi4MnQMWvkI936MS0JDJ0GOd-gs0ZSJD59c~IVi7v7~A__',
  },
  {
    name: 'Meats & Seafood',
    image: 'https://s3-alpha-sig.figma.com/img/e375/6af3/7829c4f8721a451f1bb947155d23da19?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n55QDVWJJrgz31O3nploMXJVHdDztpSqZrxdw0bXbcYs618IXRdKXvLPaEoWypB7pvvXpggpypI0fMsfY-GKUsIBiol~wD1PuRBAXsvkdjlhJHXAcb9~ePAlWQ~EAHp7aY4BkIicwTAMZXtvlQU4FtOIhRMAhpgpH7VCw4jTkoC2Y-uaQVcfxqWVXQbPy8CJHdOe3ooI~sOlHCYKwzo19DydK~E-axl7UIhfA8qCfEYiR6zckqhnIvoqonxrJLJqBlFdM5C6XixL1nFR3r9CPfb8WkyB36PZuCuOT~bU1jq9yRufVHqTDlmk-dj1qjo4kyCqdBy8O-C0jSX-0755rA__',
  },
  {
    name: 'Biscuits & Snacks',
    image: 'https://s3-alpha-sig.figma.com/img/674c/4135/2ed94caa55c979a12a918bb0fd226a74?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KOjlhElC5BInyjKymzrVHhlJdjGd9aI08MHx2qHlFvXY~Zc6YCziK3Y8Wo~~lKDBoZEpFkNiXYLIRgTVnxEETpzznDmIQcJBRy~4WEzl4Yiq7wUkGwqX3ShqnfXHzqQqh5nCUugnaed7XlRAUReUiJBoN3GTDVn7oUEi9-Dfh8f2zK4Vz7viP2SzNl23ijnPBI1DQrogn2fcbp42DK5oZZIj8kF8a2n0IH6s85r5BnYb1dpY0mXJOh~oxjTf~rmfoYlKTa4Z-iRiYnFcxeytU~upD9-yWO1igEaO79sXeKnM6QMRC25VLAsBfbV9gVXgLGYEgbxkK7CBFriKaug58Q__',
  },
  {
    name: 'Breads & Bakery',
    image: 'https://s3-alpha-sig.figma.com/img/6fe3/67df/44be35b4bc9320ab29ea22716adc1950?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SycRDziE~RRJbEIqA9xvo0WvA484NaJx2skYVlUMtBOBEkXJ5am~boYyF-CDhpUnCbwt7XQ7QfdeNSE9216XPoaoO974rholLGJPCQ7o3veUfKTWwBQGEiJyCo9hwMVWovAM7RCKRyoqCqXS2cr9IfW0yxE99U5sfC-K6sMTMeJWZDKMlkymaGIPxAS5gTRaF6gInxU2rS3RuhNtEPJSuGYapnosQwRdzRytnynVzqHLhR8pPT53JRawPByKWSXWuyrV-eCUWDqaHIbuX34mRWOfAzenDSZzmcTz8K-AqaLIT3mnRIty0Rveg2WD9wqRqmGQ3tI9tUCKVZCqtOfqxQ__',
  },
  {
    name: 'Breakfast & Dairy',
    image: 'https://s3-alpha-sig.figma.com/img/9917/a982/e1e2606c7d4ab3ac71574cae29e4fb46?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fQAbv2Ht8uqnU5mrO-hPwCozxHzlULXoiy51LjMmgBD3CSoH142WMr4ZOAlb6gRfczkBOQ8XjRI15410xV80E9jy1Bq-AiNQcg7FB9yiv0fcc95UNNSdiFiwVEbTf-2olgk0hkahz2Zc-99UVHyBb2lp8kIdIxQAtyAtv-FTcgAcJStVZtDaj3qZwQSqURtHlKYT1bgh-l~3kcqiNp2jzKEBFHpFnsTuhX0Pod~UOySS49hVlggq-AkB25MgNv0G8dWzxVnbS4V7kCSq5zzptt-l~A5al~WVGcDAXOj2tm6cpI-kEEet2s3-PTig1tkmM6Ovetuzu~DPvOA5U1MEbw__',
  },
  {
    name: 'Frozen Foods',
    image: 'https://s3-alpha-sig.figma.com/img/c253/003d/ed6b74e0eaf75f8b3cf0811c27d58923?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2IA27roBopDf3WuFqaHbrYxD-d3HpB9HvrNEcxE3wPS81D-aXcxf4hm~Hq7u7k5o8qJov3TUvDg3KyUh6MpNuDz0tnr1gPPTNT7Zac0GyiCnBYZz-vu~y5B03iKEngRaKMMC2kTyamubzh-SjxzKceWunvHCutuid6RQHgJO~G1u562GR1Oie8DcgVhEqpR16IsigfrtemZoum07K32MyDc7AgnMq~ynCqBLC6gOW~U0scQE2FzGAbRbKevQtnmxF84tizuT2b~F3dGpHnGIwCH1hjv6k1FzBSf29WrSXQHbqiHlusfjnJ9zKvUyao7NaQ0JGJL-B~jxlWenZIsVA__',
  },
  {
    name: 'Grocery & Staples',
    image: 'https://s3-alpha-sig.figma.com/img/4d77/3a49/67e6961d9db23d0d0031e7af20c3acb3?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hoPKmPB6G3g0aVl3vdAegx5AZqZUDRAqIx4SP81gb3HFxyh9wNOc3fgKQCveltWMf7yOXik69fEKHGmveRULU97KrKTwafhuT7vO2RAwtZ55hPC93e2GgEYZUQiMYpC7VB-wGxKmidhcWIP8TKMN5FZ2duG78m01B6kz3IC3oa3WH0cb4u2uiRJNfbxt48OaXCek2p7hvaKKQjLS0NBbPKVC1jA4oyKNyD7-FGecn0Mh49l1FgvXzxYGlQ-VcEeurkvXExwfzArnYUQouIPdg5MFaTMFMHyM9ogREgmTujQs8wOo8WWE5a3c1G2vcZabQ1u2aihTBY-Re0dP-mZbEw__',
  },
];

const CategoryItem = ({ name, image }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-2 flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
      <img src={image} alt={name} className="h-24 w-24 object-contain" />
    </div>
    <p className="text-sm font-bold text-gray-900">{name}</p>
  </div>
);

export default function CategoryList() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold">Shop by Category</h2>
          <p className="text-sm text-gray-500">Top-quality products at the best prices</p>
        </div>
        <a href="#" className="rounded-full border border-gray-200 px-3 py-1 text-xs font-bold">View All</a>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
        {categories.map((category) => (
          <CategoryItem key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}
