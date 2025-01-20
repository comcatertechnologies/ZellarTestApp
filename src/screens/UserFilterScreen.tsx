import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../graphql/queries';
import { styles } from './UserFilterScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomRadioButton from '../utils/reusableUIcomponent/CustomRadioButton';
import { Avatar } from 'react-native-paper';

const UserFilterScreen = () => {
  const [selectedRole, setSelectedRole] = useState<string>('ADMIN');
  const [userItems, setUserItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading, error, refetch } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {
      filter: selectedRole ? { role: { eq: selectedRole } } : undefined,
    },
    fetchPolicy: 'network-only',
  });


  const handleFilterChange = (role: string | null) => {
    setSelectedRole(role);
    refetch({
      filter: { role: { eq: role?.toUpperCase() } },
    })
      .then((result) => {
        setUserItems(result.data?.listZellerCustomers?.items || []);
      })
      .catch((err) => {
        console.error('Refetch error:', err);
      });
  };

  useEffect(() => {
    if (data?.listZellerCustomers?.items) {
      console.log('DATA', data.listZellerCustomers)
      setUserItems(data.listZellerCustomers.items);
    }
  }, [data]);

  const getInitials = (name: string): string => {
    const nameParts = name.split(' ');
    return nameParts.map((part) => part[0]).join('').toUpperCase();
  };
  
  const filteredUsers = userItems.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ? (
          <Text style={styles.errorText}>Error: {error.message}</Text>
        ) : (
          <>
            <Text style={styles.titleContainer}>User Types</Text>

            <View style={styles.radioBtnContainer}>
              <CustomRadioButton
                label="Admin"
                value="ADMIN"
                selectedValue={selectedRole}
                onSelect={handleFilterChange}
              />
              <CustomRadioButton
                label="Manager"
                value="MANAGER"
                selectedValue={selectedRole}
                onSelect={handleFilterChange}
              />
            </View>

            <Text style={styles.titleContainer}>
              {selectedRole === 'ADMIN' ? 'Admin Users' : 'Manager Users'}
            </Text>

            <TextInput
              style={styles.searchInput}
              placeholder="Search by name..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            <FlatList
              data={filteredUsers}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.userCard}>
                  <Avatar.Text
                    size={30}
                    label={getInitials(item.name)}
                    style={styles.avatar}
                  />
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                  </View>
                </View>
              )}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserFilterScreen;
