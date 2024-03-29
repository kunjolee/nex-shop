import NextLink from 'next/link';

import { Box, Link, Typography } from '@mui/material';
import { ShopLayout } from '@/components/layouts';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';

const EmptyPage = () => {
    return (
        <ShopLayout
            title='Empty Cart'
            pageDescription='No articles in shopping cart'
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography>Your cart is empty</Typography>
                    <NextLink href='/'>
                        <Link
                            component='span'
                            typography='h4'
                            color='secondary'
                        >
                            Go back
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    );
};
export default EmptyPage;
