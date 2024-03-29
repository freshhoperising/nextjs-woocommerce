import DocPageLayout from '@/components/layout/doc-page-layout';

export const metadata = {
  title: 'Refund Policy',
  description:
    'Next Woo is a headless eCommerce application with Next.js(React) and WooCommerce',
};

export default async function Page() {
  return <DocPageLayout title="Refund Policy" slug="refund-policy" />;
}
