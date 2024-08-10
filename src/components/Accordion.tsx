import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {normalize} from '../styles';

const Accordion = ({
  title,
  children,
  headerColor = null,
}: {
  title: string;
  children: React.ReactNode;
  headerColor: null | string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={[
          styles.titleContainer,
          headerColor ? {backgroundColor: headerColor} : {},
        ]}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          style={
            !expanded
              ? {transform: 'rotate(270deg)'}
              : {transform: 'rotate(90deg)'}
          }
          name="chevron-right"
          color={'#fff'}
          size={30}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={[styles.contentContainer]}>
          <View style={styles.content}>{children}</View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#F0F0F0', // Background color of the accordion
  },
  titleContainer: {
    backgroundColor: '#007AFF', // Header background color
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF', // Header text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    overflow: 'visible',
    height: 'auto',
    borderBottomRightRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
  },
  content: {
    padding: 15,
    backgroundColor: '#FFFFFF', // Content background color
    borderBottomRightRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
  },
});

export default Accordion;
