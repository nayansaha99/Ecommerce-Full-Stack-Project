import React from 'react';

const AddedCart = () => {
    return (
        <div>
            <div class="bg-gray-100 p-4 md:p-6">

                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">


                    <div class="flex-1 bg-white p-4 md:p-5 rounded-md shadow-sm flex flex-col md:flex-row gap-4">

                        {/* <img
                            src="https://via.placeholder.com/120"
                            class="w-24 h-24 md:w-28 md:h-28 object-contain mx-auto md:mx-0"
                        /> */}


                        <div class="flex flex-col gap-1 text-center md:text-left">


                            <div class="flex items-center justify-center md:justify-start gap-2 text-red-700 font-semibold">
                                <span class="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                Your Amazon Cart is empty
                            </div>

                            <p class="text-sm text-gray-700">
                                <span class="font-medium">Color:</span> Porcelain Band with Polished Silver Case
                            </p>

                            <p class="text-sm text-gray-700">
                                <span class="font-medium">Size:</span> 45mm
                            </p>

                            <p class="text-sm text-gray-700">
                                <span class="font-medium">Style:</span> LTE
                            </p>

                        </div>
                    </div>


                    <div class="w-full lg:w-[320px] bg-white p-4 md:p-5 rounded-md shadow-sm h-fit">


                        <h2 class="text-base md:text-lg font-semibold">
                            Cart Subtotal:
                            <span class="font-bold">$621<sup class="text-xs">53</sup></span>
                        </h2>


                        <button class="w-full mt-4 bg-blue-600 hover:bg-blue-600 text-white font-medium py-2 rounded-full text-sm md:text-base">
                            Proceed to checkout (0 items)
                        </button>


                        <button class="w-full mt-3 border border-gray-400 text-black py-2 rounded-full hover:bg-gray-100 text-sm md:text-base">
                            Go to Cart
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddedCart;