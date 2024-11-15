import React from 'react';
import { Box, Text, VStack, HStack, Icon, ScrollView, Avatar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewList({ route }) {
  // Dummy data for reviews
  const reviews = [
    {
      id: '1',
      name: 'John Doe',
      rating: 5,
      comment: 'Kendaraan sangat nyaman dan bersih. Pelayanan luar biasa!',
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 4,
      comment: 'Pengalaman menyewa kendaraan yang menyenangkan, sangat direkomendasikan.',
    },
    {
      id: '3',
      name: 'Mark Wilson',
      rating: 4,
      comment: 'Harga terjangkau dan kendaraan dalam kondisi baik.',
    },
    {
      id: '4',
      name: 'Alice Brown',
      rating: 3,
      comment: 'Kendaraan cukup baik, namun sedikit kurang bersih di dalam.',
    },
    {
      id: '5',
      name: 'Tom Hanks',
      rating: 5,
      comment: 'Sangat puas dengan layanan dan kualitas kendaraan. Pasti akan sewa lagi!',
    },
  ];

  // If reviews are not passed or are empty, show a message
  if (!reviews || reviews.length === 0) {
    return (
      <Box flex={1} safeArea p={4}>
        <Text fontSize="lg" color="gray.500">No reviews available</Text>
      </Box>
    );
  }

  const renderReview = (review) => (
    <Box key={review.id} bg="gray.50" p={4} rounded="md" mb={4} shadow={2}>
      <HStack space={3} alignItems="center">
        {/* Avatar or User Icon */}
        <Avatar size="md" source={{ uri: `https://ui-avatars.com/api/?name=${review.name}` }} />

        <VStack>
          <Text fontWeight="bold" fontSize="lg">{review.name}</Text>
          <HStack space={1}>
            {/* Render star rating */}
            {[...Array(review.rating)].map((_, index) => (
              <Icon key={index} as={<MaterialIcons name="star" />} size="4" color="yellow.400" />
            ))}
          </HStack>
        </VStack>
      </HStack>

      {/* Review Comment */}
      <Text mt={2} color="gray.700" fontSize="md">{review.comment}</Text>
    </Box>
  );

  return (
    <ScrollView flex={1} safeArea p={4}>
      <VStack space={4}>
        {/* Render all reviews */}
        {reviews.map(renderReview)}
      </VStack>
    </ScrollView>
  );
}
