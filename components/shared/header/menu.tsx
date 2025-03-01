import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link
          className='flex items-center header-button'
          href='/signin'>
          Hello, Sign in
        </Link>
        <Link
          className='header-button'
          href='/cart'>
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
            <span className='text-sm font-bold'>Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
