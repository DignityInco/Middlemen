import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, MapPin } from 'lucide-react-native';

const recentProduce = [
  {
    id: 'yam123',
    name: 'Yam (white)',
    farmer: 'Okoro Farms',
    price: '₦300/kg',
    cataloguedAt: '2 days ago',
    image: require('../../../assets/sample/yam.jpg'),
  },
  {
    id: 'rice001',
    name: 'Brown Rice',
    farmer: 'Mai Grains',
    price: '₦900/bag',
    cataloguedAt: '5 days ago',
    image: require('../../../assets/sample/rice.jpg'),
  },
];

export default function AddToCatalogue() {
  const [selectedFarm, setSelectedFarm] = useState(null);

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6">
      {/* 1. Header */}
      <Text className="text-2xl font-semibold text-green-700 mb-4">Add to Catalogue</Text>

      {/* 2. Recently Catalogued Produce */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-2">Recently Catalogued (Nearby)</Text>
        {/* Placeholder for now */}
        <View className="bg-gray-50 py-4 px-3 rounded-xl shadow-sm">
          <Text className="text-gray-500">Loading nearby catalogues...</Text>
        </View>
      </View>

      {/* 3. Your Catalogue Summary */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-2">Your Catalogue</Text>
        {/* Placeholder */}
        <View className="bg-gray-100 rounded-xl p-4">
          <Text className="text-gray-500">No commodities yet. Start adding below.</Text>
        </View>
      </View>

      {/* 4. Add to Catalogue Button */}
      <TouchableOpacity className="bg-green-600 py-4 rounded-xl mb-8">
        <Text className="text-white font-bold text-center">+ Add New Commodity</Text>
      </TouchableOpacity>

      {/* 5. Farm Information Section */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">Farm Information</Text>
        
        {/* Add New Location */}
        <TouchableOpacity className="flex-row items-center mb-4">
          <MapPin color="#10b981" />
          <Text className="ml-2 text-green-600 font-semibold">Add New Farm Location</Text>
        </TouchableOpacity>

        {/* Farm List - Placeholder for now */}
        <View className="bg-gray-50 rounded-xl p-4">
          <Text className="text-gray-500">No farms added yet.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
// This screen allows farmers to add new commodities to their catalogue.
// It includes sections for recently catalogued produce, a summary of the user's catalogue, and farm information.