import { db } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IProduct;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProductBySlug(req, res);

        default:
            return res
                .status(400)
                .json({ message: 'Invalid request method. Use GET instead' });
    }
}

const getProductBySlug = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    try {
        await db.connect();
        const { slug } = req.query;
        const product = await Product.findOne({ slug }).lean();
        await db.disconnect();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(product);
    } catch (error) {
        console.log('Error getting product by slug', error);
        res.status(500).json({
            message: `Something went wrong by getting product by slug `,
        });
    }
};
