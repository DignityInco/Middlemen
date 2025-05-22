import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ['Popular', 'Close to You', 'Ratings', 'Categories'];

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <View className="mb-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setActiveFilter(filter)}
            className={`mr-3 px-4 py-2 rounded-full ${
              activeFilter === filter ? 'bg-green-600' : 'bg-gray-100'
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                activeFilter === filter ? 'text-white' : 'text-gray-800'
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterBar;
// This component is a filter bar that allows users to select different filters for displaying content.
// It uses a horizontal scroll view to display the filter options and highlights the active filter.