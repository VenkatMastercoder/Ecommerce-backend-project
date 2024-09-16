-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_orignal_price" TEXT NOT NULL,
    "product_discout_price" TEXT NOT NULL,
    "product_image_url" JSONB NOT NULL,
    "product_details" JSONB NOT NULL,
    "product_information" TEXT NOT NULL,
    "product_rating" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
