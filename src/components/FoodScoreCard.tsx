import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThemedBox from './ThemedBox';
import {normalize} from '../styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FoodScoreCard({score}: {score: number}) {

  const getFoodScoreConfig = (score: number) => {
    if (score >= 0 && score <= 30) {
      return {
        color: '#FFC107',
        text: 'Not Ideal',
		icon: 'warning',
      };
    } else if (score >= 40 && score <= 70) {
      return {
        color: '#4CAF50',
        text: 'Good',
		icon: 'check-circle',
      };
    } else {
      return {
        color: '#F44336',
        text: 'Bad',
		icon: 'error'
      };
    }
  };

  const {color, text, icon} = getFoodScoreConfig(score);
  return (
    <ThemedBox style={styles.container}>
      <AnimatedCircularProgress
        size={100}
        width={15}
        fill={100}
        tintColor={color}
        fill={score}
        prefill={0}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#E4E7EB">
        {fill => <Text style={[styles.scoreText, {color: color}]}>{score}</Text>}
      </AnimatedCircularProgress>

      <View style={[styles.badge, {backgroundColor: color}]}>
		<Icon name={icon} size={20} color="white" />
        <Text style={styles.badgeText}>{text}</Text>
      </View>
    </ThemedBox>
  );
}

export default FoodScoreCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  badge: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
