'use client';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { APP_NAME } from '@/lib/constants';

export default function Footer() {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const {
  //     setting: { site, availableCurrencies, currency },
  //     setCurrency
  //   } = useSettingStore();
  //   const { locales } = i18n;

  //   const locale = useLocale();
  //   const t = useTranslations();
  return (
    <>
      <footer className='bg-black Itext-white underline-link'>
        <div className='w-full'>
          <Button
            variant='ghost'
            className='bg-gray-800 w-full rounded-none'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp className='mr-2 h-4 w-4' />
            Back to top
          </Button>
        </div>

        <div className='p-4'>
          <div className='flex justify-center gap-3 text-sm text-gray-400'>
            <Link href='/page/conditions-of-use'>Conditions of Use</Link>
            <Link href='/page/privacy-policy'> Privacy Notice</Link>
            <Link href='/page/help'>Help</Link>
          </div>
          <div className='flex justify-center text-sm text-gray-400'>
            <p> 2000-2024, {APP_NAME}, Inc. or its affiliates</p>{' '}
          </div>
          <div className='mt-8 flex justify-center text-sm text-gray-400'> 123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890</div>
        </div>
      </footer>
    </>
  );
}
