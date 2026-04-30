-- CreateTable
CREATE TABLE
    `brands` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `brandName` VARCHAR(50) NOT NULL,
        `brandImg` VARCHAR(300) NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `brands_brandName_key` (`brandName`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `categories` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `categoryName` VARCHAR(50) NOT NULL,
        `categoryImg` VARCHAR(300) NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `categories_categoryName_key` (`categoryName`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `products` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(200) NOT NULL,
        `short_des` VARCHAR(500) NOT NULL,
        `price` DOUBLE NOT NULL,
        `discount` BOOLEAN NOT NULL,
        `discount_price` DOUBLE NOT NULL,
        `image` VARCHAR(200) NOT NULL,
        `stock` BOOLEAN NOT NULL,
        `star` DOUBLE NOT NULL,
        `remark` ENUM (
            'popular',
            'new',
            'top',
            'special',
            'trending',
            'regular'
        ) NOT NULL,
        `category_id` INTEGER NOT NULL,
        `brand_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `product_details` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `img1` VARCHAR(200) NOT NULL,
        `img2` VARCHAR(200) NOT NULL,
        `img3` VARCHAR(200) NOT NULL,
        `img4` VARCHAR(200) NOT NULL,
        `img5` VARCHAR(200) NOT NULL,
        `img6` VARCHAR(200) NOT NULL,
        `img7` VARCHAR(200) NOT NULL,
        `img8` VARCHAR(200) NOT NULL,
        `des` LONGTEXT NOT NULL,
        `color` VARCHAR(200) NOT NULL,
        `size` VARCHAR(200) NOT NULL,
        `product_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `product_details_product_id_key` (`product_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `product_sliders` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(200) NOT NULL,
        `short_des` VARCHAR(500) NOT NULL,
        `price` VARCHAR(100) NOT NULL,
        `image` VARCHAR(200) NOT NULL,
        `product_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `product_sliders_product_id_key` (`product_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `users` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(191) NOT NULL,
        `password` VARCHAR(100) NOT NULL,
        `otp` VARCHAR(10) NOT NULL,
        `role` VARCHAR(50) NOT NULL DEFAULT 'user',
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `users_email_key` (`email`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `customer_profiles` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `cus_name` VARCHAR(100) NOT NULL,
        `cus_add` VARCHAR(500) NOT NULL,
        `cus_city` VARCHAR(50) NOT NULL,
        `cus_state` VARCHAR(50) NOT NULL,
        `cus_postcode` VARCHAR(50) NOT NULL,
        `cus_country` VARCHAR(50) NOT NULL,
        `cus_phone` VARCHAR(50) NOT NULL,
        `cus_fax` VARCHAR(50) NOT NULL,
        `ship_name` VARCHAR(100) NOT NULL,
        `ship_add` VARCHAR(100) NOT NULL,
        `ship_city` VARCHAR(100) NOT NULL,
        `ship_state` VARCHAR(100) NOT NULL,
        `ship_postcode` VARCHAR(100) NOT NULL,
        `ship_country` VARCHAR(100) NOT NULL,
        `ship_phone` VARCHAR(50) NOT NULL,
        `user_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        UNIQUE INDEX `customer_profiles_user_id_key` (`user_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `product_carts` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `user_id` INTEGER NOT NULL,
        `product_id` INTEGER NOT NULL,
        `color` VARCHAR(200) NOT NULL,
        `size` VARCHAR(200) NOT NULL,
        `qty` DOUBLE NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `product_wishes` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `product_id` INTEGER NOT NULL,
        `user_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `product_reviews` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `description` VARCHAR(1000) NOT NULL,
        `rating` VARCHAR(10) NOT NULL,
        `customer_id` INTEGER NOT NULL,
        `product_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `invoices` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `total` DOUBLE NOT NULL,
        `vat` DOUBLE NOT NULL,
        `payable` DOUBLE NOT NULL,
        `cus_details` VARCHAR(500) NOT NULL,
        `ship_details` VARCHAR(500) NOT NULL,
        `tran_id` VARCHAR(100) NOT NULL,
        `val_id` VARCHAR(100) NOT NULL DEFAULT '0',
        `delivery_status` ENUM ('Pending', 'Processing', 'Completed') NOT NULL,
        `payment_status` VARCHAR(255) NOT NULL,
        `user_id` INTEGER NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `invoice_products` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `invoice_id` INTEGER NOT NULL,
        `product_id` INTEGER NOT NULL,
        `user_id` INTEGER NOT NULL,
        `qty` DOUBLE NOT NULL,
        `sale_price` DOUBLE NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `policies` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `type` ENUM ('about', 'refund', 'terms', 'contact', 'complain') NOT NULL,
        `des` LONGTEXT NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `sslcommerz_accounts` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `store_id` VARCHAR(255) NOT NULL,
        `store_passwd` VARCHAR(255) NOT NULL,
        `currency` VARCHAR(255) NOT NULL,
        `success_url` VARCHAR(255) NOT NULL,
        `fail_url` VARCHAR(255) NOT NULL,
        `cancel_url` VARCHAR(255) NOT NULL,
        `ipn_url` VARCHAR(255) NOT NULL,
        `init_url` VARCHAR(255) NOT NULL,
        `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `features` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(191) NOT NULL,
        `img` VARCHAR(300) NOT NULL,
        `description` LONGTEXT NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `invoice_products`
ADD COLUMN `color` VARCHAR(50) NOT NULL,
ADD COLUMN `size` VARCHAR(50) NOT NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_sliders` ADD CONSTRAINT `product_sliders_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_profiles` ADD CONSTRAINT `customer_profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_carts` ADD CONSTRAINT `product_carts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_carts` ADD CONSTRAINT `product_carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_wishes` ADD CONSTRAINT `product_wishes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_wishes` ADD CONSTRAINT `product_wishes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_reviews` ADD CONSTRAINT `product_reviews_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customer_profiles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_reviews` ADD CONSTRAINT `product_reviews_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_products` ADD CONSTRAINT `invoice_products_invoice_id_fkey` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_products` ADD CONSTRAINT `invoice_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_products` ADD CONSTRAINT `invoice_products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Insert demo brands
INSERT INTO
    brands (brandName, brandImg)
VALUES
    ('Apple', 'https://example.com/apple.png'),
    ('Samsung', 'https://example.com/samsung.png'),
    ('Xiaomi', 'https://example.com/xiaomi.png'),
    ('OnePlus', 'https://example.com/oneplus.png');

-- Insert demo categories
INSERT INTO
    categories (categoryName, categoryImg)
VALUES
    ('Mobiles', 'https://example.com/mobiles.png'),
    ('Laptops', 'https://example.com/laptops.png'),
    ('Tablets', 'https://example.com/tablets.png'),
    (
        'Accessories',
        'https://example.com/accessories.png'
    );

-- Insert demo products
INSERT INTO
    products (
        title,
        short_des,
        price,
        discount,
        discount_price,
        image,
        stock,
        star,
        remark,
        category_id,
        brand_id
    )
VALUES
    (
        'iPhone 15 Pro',
        'Latest iPhone with A17 Pro chip',
        1299,
        true,
        1199,
        'https://example.com/iphone15pro.png',
        true,
        4.8,
        'popular',
        1,
        1
    ),
    (
        'Samsung Galaxy S24',
        'New Galaxy flagship',
        1099,
        false,
        0,
        'https://example.com/galaxyS24.png',
        true,
        4.6,
        'trending',
        1,
        2
    ),
    (
        'Xiaomi 14 Ultra',
        'Affordable flagship killer',
        899,
        true,
        799,
        'https://example.com/xiaomi14.png',
        true,
        4.5,
        'new',
        1,
        3
    ),
    (
        'OnePlus 12',
        'Smooth performance with OxygenOS',
        999,
        true,
        949,
        'https://example.com/oneplus12.png',
        true,
        4.4,
        'special',
        1,
        4
    );

-- Insert demo users
INSERT INTO
    users (email, otp, password, role)
VALUES
    ('john@example.com', '0', 'password123', 'user'),
    ('alice@example.com', '0', 'password123', 'user'),
    ('bob@example.com', '0', 'password123', 'user'),
    ('emma@example.com', '0', 'password123', 'user');

-- Insert demo customer profiles
INSERT INTO
    customer_profiles (
        cus_name,
        cus_add,
        cus_city,
        cus_state,
        cus_postcode,
        cus_country,
        cus_phone,
        cus_fax,
        ship_name,
        ship_add,
        ship_city,
        ship_state,
        ship_postcode,
        ship_country,
        ship_phone,
        user_id
    )
VALUES
    (
        'John Doe',
        '123 Main Street',
        'Tokyo',
        'Tokyo',
        '100-0001',
        'Japan',
        '09012345678',
        '123456',
        'John Doe',
        '123 Main Street',
        'Tokyo',
        'Tokyo',
        '100-0001',
        'Japan',
        '09012345678',
        1
    ),
    (
        'Alice Smith',
        '45 Queen Street',
        'London',
        'London',
        'SW1A1AA',
        'UK',
        '07123456789',
        '654321',
        'Alice Smith',
        '45 Queen Street',
        'London',
        'London',
        'SW1A1AA',
        'UK',
        '07123456789',
        2
    ),
    (
        'Bob Lee',
        '77 Orchard Road',
        'Singapore',
        'Central',
        '238895',
        'Singapore',
        '0812345678',
        '789456',
        'Bob Lee',
        '77 Orchard Road',
        'Singapore',
        'Central',
        '238895',
        'Singapore',
        '0812345678',
        3
    ),
    (
        'Emma Wilson',
        '88 Wall Street',
        'New York',
        'NY',
        '10005',
        'USA',
        '2125556789',
        '321654',
        'Emma Wilson',
        '88 Wall Street',
        'New York',
        'NY',
        '10005',
        'USA',
        '2125556789',
        4
    );

-- Insert demo product carts
INSERT INTO
    product_carts (user_id, product_id, color, size, qty)
VALUES
    (1, 1, 'Black', '128GB', 1),
    (2, 2, 'Silver', '256GB', 2),
    (3, 3, 'Blue', '512GB', 1),
    (4, 4, 'Green', '128GB', 3);

-- Insert demo product wishes
INSERT INTO
    product_wishes (user_id, product_id)
VALUES
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 1);

-- Insert demo reviews
INSERT INTO
    product_reviews (description, rating, customer_id, product_id)
VALUES
    ('Excellent phone, love it!', '5', 1, 1),
    ('Great screen and battery life.', '4', 2, 2),
    ('Value for money device.', '5', 3, 3),
    ('Fast and smooth, but expensive.', '4', 4, 4);

-- Insert demo invoices
INSERT INTO
    invoices (
        total,
        vat,
        payable,
        cus_details,
        ship_details,
        tran_id,
        val_id,
        delivery_status,
        payment_status,
        user_id
    )
VALUES
    (
        1299,
        100,
        1399,
        'John Doe, Tokyo',
        'Same as billing',
        'TXN123456',
        '0',
        'Pending',
        'Paid',
        1
    ),
    (
        2198,
        180,
        2378,
        'Alice Smith, London',
        'Same as billing',
        'TXN654321',
        '0',
        'Processing',
        'Paid',
        2
    ),
    (
        899,
        90,
        989,
        'Bob Lee, Singapore',
        'Same as billing',
        'TXN789123',
        '0',
        'Completed',
        'Paid',
        3
    ),
    (
        999,
        95,
        1094,
        'Emma Wilson, New York',
        'Same as billing',
        'TXN321987',
        '0',
        'Pending',
        'Unpaid',
        4
    );

-- Insert demo invoice products
INSERT INTO
    invoice_products (
        invoice_id,
        product_id,
        user_id,
        qty,
        sale_price,
        color,
        size
    )
VALUES
    (1, 1, 1, 1, 1299, 'Black', '128GB'),
    (2, 2, 2, 2, 1099, 'Silver', '256GB'),
    (3, 3, 3, 1, 899, 'Blue', '512GB'),
    (4, 4, 4, 1, 999, 'Green', '128GB');

-- Insert demo features
INSERT INTO
    features (name, img, description)
VALUES
    (
        'Fast Shipping',
        'https://example.com/shipping.png',
        'Get your orders delivered in 2-3 business days.'
    ),
    (
        '24/7 Support',
        'https://example.com/support.png',
        'Our team is here to help anytime.'
    ),
    (
        'Secure Payments',
        'https://example.com/secure.png',
        'All transactions are encrypted and safe.'
    ),
    (
        'Easy Returns',
        'https://example.com/returns.png',
        'Return products within 7 days hassle-free.'
    );

-- Insert demo product details
INSERT INTO
    product_details (
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        des,
        color,
        size,
        product_id
    )
VALUES
    (
        'https://example.com/iphone15-1.png',
        'https://example.com/iphone15-2.png',
        'https://example.com/iphone15-3.png',
        'https://example.com/iphone15-4.png',
        'https://example.com/iphone15-5.png',
        'https://example.com/iphone15-6.png',
        'https://example.com/iphone15-7.png',
        'https://example.com/iphone15-8.png',
        'iPhone 15 Pro full details description.',
        'Black',
        '128GB',
        1
    ),
    (
        'https://example.com/galaxyS24-1.png',
        'https://example.com/galaxyS24-2.png',
        'https://example.com/galaxyS24-3.png',
        'https://example.com/galaxyS24-4.png',
        'https://example.com/galaxyS24-5.png',
        'https://example.com/galaxyS24-6.png',
        'https://example.com/galaxyS24-7.png',
        'https://example.com/galaxyS24-8.png',
        'Samsung Galaxy S24 details and specs.',
        'Silver',
        '256GB',
        2
    ),
    (
        'https://example.com/xiaomi14-1.png',
        'https://example.com/xiaomi14-2.png',
        'https://example.com/xiaomi14-3.png',
        'https://example.com/xiaomi14-4.png',
        'https://example.com/xiaomi14-5.png',
        'https://example.com/xiaomi14-6.png',
        'https://example.com/xiaomi14-7.png',
        'https://example.com/xiaomi14-8.png',
        'Xiaomi 14 Ultra with top performance.',
        'Blue',
        '512GB',
        3
    ),
    (
        'https://example.com/oneplus12-1.png',
        'https://example.com/oneplus12-2.png',
        'https://example.com/oneplus12-3.png',
        'https://example.com/oneplus12-4.png',
        'https://example.com/oneplus12-5.png',
        'https://example.com/oneplus12-6.png',
        'https://example.com/oneplus12-7.png',
        'https://example.com/oneplus12-8.png',
        'OnePlus 12 smooth OxygenOS experience.',
        'Green',
        '128GB',
        4
    );

-- Insert demo product sliders
INSERT INTO
    product_sliders (title, short_des, price, image, product_id)
VALUES
    (
        'iPhone 15 Pro Offer',
        'Save $100 on iPhone 15 Pro',
        '1199',
        'https://example.com/slider-iphone15.png',
        1
    ),
    (
        'Galaxy S24 Launch',
        'Get the new Galaxy S24 now',
        '1099',
        'https://example.com/slider-galaxyS24.png',
        2
    ),
    (
        'Xiaomi 14 Ultra Deal',
        'Flagship killer at best price',
        '799',
        'https://example.com/slider-xiaomi14.png',
        3
    ),
    (
        'OnePlus 12 Special',
        'Performance meets elegance',
        '949',
        'https://example.com/slider-oneplus12.png',
        4
    );

-- Insert demo policies
INSERT INTO
    policies (type, des)
VALUES
    (
        'about',
        'We are a trusted e-commerce store providing the latest gadgets worldwide.'
    ),
    (
        'refund',
        'Refunds are available within 7 days of purchase under certain conditions.'
    ),
    (
        'terms',
        'By using this site, you agree to our terms and conditions.'
    ),
    (
        'contact',
        'Reach out to us at support@example.com or call +1-800-555-1234'
    );