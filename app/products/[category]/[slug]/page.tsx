import { notFound } from "next/navigation";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
    return products.map(({ category, slug }) => ({ category, slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<React.JSX.Element> {
    const { category, slug } = await params;
    const product = getProduct(category, slug);
    if (!product) notFound();
    return <ProductPage product={product} />;
}
