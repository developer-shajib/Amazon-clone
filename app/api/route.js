import mongoDBConnect from '@/lib/db/db';
import data from '@/lib/data';
import Product from '@/models/productModels';
import { NextResponse } from 'next/server.js';

export const GET = async () => {
  try {
    const { products } = data;
    await mongoDBConnect();

    // await User.deleteMany();
    // const createdUser = await User.insertMany(users);

    // await Setting.deleteMany();
    // const createdSetting = await Setting.insertMany(settings);

    // await WebPage.deleteMany();
    // await WebPage.insertMany(webPages);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products.map((x) => ({ ...x, _id: undefined })));

    console.log({ createdProducts, message: 'Seeded database successfully' });

    process.exit(0);

    return NextResponse.json({ message: 'Users fetched successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
