import React from 'react';
import { Box, Text, ScrollView, VStack, Input, Icon, Image, Pressable, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { kendaraan } from '../data/kendaraan';  // Assuming you have a kendaraan data file
import KendaraanCard from '../components/KendaraanCard';  // Assuming you have a KendaraanCard component

const BerandaScreen = ({ navigation }) => {
  return (
    <ScrollView bg="white">
      <VStack space={4} p={4}>
        {/* Header Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Vehicle Rental
          </Text>
          <Text fontSize="sm" color="gray.500">
            Find and rent your vehicle here
          </Text>
        </Box>

        {/* Search Bar */}
        <Input
          placeholder="Search vehicles..."
          variant="filled"
          width="100%"
          borderRadius="10"
          py="3"
          px="2"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />

        {/* Promo Button Below Search */}
        <Box mb={4}>
          <Button
            onPress={() => navigation.navigate('PromoDetailScreen')} // Navigate to PromoDetailScreen
            size="sm"
            colorScheme="emerald"
            leftIcon={<MaterialIcons name="local-offer" size={20} color="white" />}
          >
            Promo
          </Button>
        </Box>

        {/* Vehicle List */}
        <VStack space={3}>
          {kendaraan.map((item) => (
            <KendaraanCard
              key={item.id}
              kendaraan={item}
              onPress={() => navigation.navigate('Detail', { kendaraan: item })}
            />
          ))}
        </VStack>

        {/* Customer Service Section */}
        <Box alignItems="center" mt={6}>
          <Pressable
            onPress={() => navigation.navigate('CustomerSupportChatScreen')} // Ensure the navigation works
            bg="emerald.600"
            p={4}
            rounded="md"
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Customer-service-icon.svg',
              }}
              alt="Customer Service"
              size="xl"
              borderRadius={10}
            />
          </Pressable>
          <Text mt={2} fontSize="md" fontWeight="medium" color="emerald.600">
            Hubungi Customer Service
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default BerandaScreen;
