import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductInfo, ProductDetail } from '../components/ProductDetail';
import { getProductIdFromParams } from '../utils/productRouting';

const DetailProduct = () => {
  const params = useParams();
  const productId = params.id ? getProductIdFromParams(params) : null;

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Product List', href: '/products/view' },
    { label: 'Product Detail', href: null },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Product Info - Images and Details */}
        <ProductInfo productId={productId} />

        {/* Product Detail - Description Tabs */}
        <ProductDetail productId={productId} />
      </div>
    </Layout>
  );
};

export default DetailProduct;
