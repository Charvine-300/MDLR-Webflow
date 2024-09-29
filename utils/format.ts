export const formatCurrency = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

    return formattedPrice;
}
