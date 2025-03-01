import { cwd } from 'process';
import data from '../data';
import { loadEnvConfig } from '@next/env';
import mongoDBConnect from './db';
import Product from '@/models/productModels';

loadEnvConfig(cwd());

const main = async () => {
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

    // await Review.deleteMany();
    // const rws = [];
    // for (let i = 0; i < createdProducts.length; i++) {
    //   let x = 0;
    //   const { ratingDistribution } = createdProducts[i];
    //   for (let j = 0; j < ratingDistribution.length; j++) {
    //     for (let k = 0; k < ratingDistribution[j].count; k++) {
    //       x++;
    //       rws.push({
    //         ...reviews.filter((x) => x.rating === j + 1)[x % reviews.filter((x) => x.rating === j + 1).length],
    //         isVerifiedPurchase: true,
    //         product: createdProducts[i]._id,
    //         user: createdUser[x % createdUser.length]._id,
    //         updatedAt: Date.now(),
    //         createdAt: Date.now()
    //       });
    //     }
    //   }
    // }
    // const createdReviews = await Review.insertMany(rws);

    // await Order.deleteMany();
    // const orders = [];
    // for (let i = 0; i < 200; i++) {
    //   orders.push(
    //     await generateOrder(
    //       i,
    //       createdUser.map((x) => x._id),
    //       createdProducts.map((x) => x._id)
    //     )
    //   );
    // }
    // const createdOrders = await Order.insertMany(orders);
    // console.log({
    //   createdUser,
    //   createdProducts,
    //   createdReviews,
    //   createdOrders,
    //   createdSetting,
    //   message: 'Seeded database successfully'
    // });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};
