import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CustomRadio.style';

interface CustomRadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ label, value, selectedValue, onSelect }) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity
      style={styles.radioContainer}
      onPress={() => onSelect(value)}
    >
      <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
        {isSelected && <View style={styles.selectedDot} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
