import React from 'react';
import { Box, Text, VStack, Button } from 'native-base';

const promoData = {
  title: "Special Promo: Discount 20% off",
  description: "Rent any vehicle now and get a 20% discount on the total rental price. Limited time offer, don't miss out!",
  expirationDate: "Valid until: December 31, 2024",
};

const PromoDetailScreen = () => {
  return (
    <Box flex={1} p={4}>
      <VStack space={4}>
        {/* Promo Title */}
        <Text fontSize="2xl" fontWeight="bold" color="emerald.600">
          {promoData.title}
        </Text>

        {/* Promo Description */}
        <Text fontSize="md" color="gray.700">
          {promoData.description}
        </Text>

        {/* Promo Expiration Date */}
        <Text fontSize="sm" color="gray.500">
          {promoData.expirationDate}
        </Text>

        {/* Action Button */}
        <Button
          onPress={() => alert("Promo Activated!")}
          colorScheme="emerald"
        >
          Claim Promo
        </Button>
      </VStack>
    </Box>
  );
};

export default PromoDetailScreen;
