import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThemedBox from './ThemedBox';
import {normalize} from '../styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FoodScoreCard({score}: {score: number}) {
  const getFoodScoreConfig = (score: number) => {
    if (score >= 0 && score < 39) {
      return {
        color: '#de3b40',
        text: 'Poor Choice',
		icon: 'heart-broken',
      };
    } else if (score >= 40 && score <= 74) {
      return {
        color: '#EFB034FF',
        text: 'Not Ideal',
		icon: 'heart-broken',
      };
    } else {
      return {
        color: '#34C759',
        text: 'Good Choice',
		icon: 'heart',
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
		{/* <Icon name={icon} size={20} color="white" /> */}
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
	maxHeight: 24,
    paddingHorizontal: 20,
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
 