import React, { useState } from 'react';
import { Box, VStack, Input, Button, FlatList, HStack, Text, Heading } from 'native-base';

const CustomerSupportChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Halo, ada yang bisa kami bantu?', sender: 'support' },
  ]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;

    // Tambahkan pesan pengguna ke daftar pesan
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: message, sender: 'user' },
    ]);

    // Bersihkan input
    setMessage('');

    // Respon otomatis dari dukungan (simulasi)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: 'Terima kasih telah menghubungi kami!', sender: 'support' },
      ]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <HStack
      justifyContent={item.sender === 'user' ? 'flex-end' : 'flex-start'}
      mb={2}
    >
      <Box
        bg={item.sender === 'user' ? 'emerald.600' : 'gray.200'}
        px={4}
        py={2}
        rounded="lg"
        maxWidth="80%"
      >
        <Text color={item.sender === 'user' ? 'white' : 'black'}>{item.text}</Text>
      </Box>
    </HStack>
  );

  return (
    <Box safeArea flex={1} bg="coolGray.100" p={4}>
      <Heading size="md" mb={4}>Dukungan Pelanggan</Heading>

      {/* Daftar Pesan */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        inverted
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
        mb={4}
      />

      {/* Input Pesan */}
      <VStack space={2}>
        <Input
          placeholder="Ketik pesan..."
          value={message}
          onChangeText={setMessage}
          bg="white"
          borderRadius="lg"
          px={4}
        />
        <Button colorScheme="emerald" onPress={sendMessage}>
          Kirim
        </Button>
      </VStack>
    </Box>
  );
};

export default CustomerSupportChatScreen;
