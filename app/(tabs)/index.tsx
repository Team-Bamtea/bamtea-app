import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      
      {/* Background Image */}
      <Image
        source={require('@/assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Top Cards Section */}
        <View style={styles.cardsSection}>
          {/* Consultation Reminder Card */}
          <View style={styles.reminderCard}>
            <View style={styles.timeRow}>
              <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                <Path
                  d="M7 0C3.134 0 0 3.134 0 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12.6c-3.087 0-5.6-2.513-5.6-5.6S3.913 1.4 7 1.4s5.6 2.513 5.6 5.6-2.513 5.6-5.6 5.6z"
                  fill="#828282"
                />
                <Path
                  d="M7.7 3.5H6.3v4.2l3.5 2.1.7-1.148-2.8-1.652V3.5z"
                  fill="#828282"
                />
              </Svg>
              <Text style={styles.timeText}>17:30</Text>
            </View>
            <Text style={styles.reminderTitle}>
              "오늘 상사한테 힘들었던 순간" 양파에게 상담받기
            </Text>
            <Text style={styles.scheduleLink}>오늘 하루 일정을 확인해보세요</Text>
          </View>

          {/* Onion Level Card */}
          <View style={styles.levelCard}>
            <View style={styles.levelHeader}>
              <View style={styles.levelTitleRow}>
                <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                  <Path
                    d="M8 0C7.724 0 7.5 0.224 7.5 0.5v1.776c-1.328.226-2.5 1.026-3.276 2.224-.776-1.198-1.948-1.998-3.276-2.224V0.5C.948 0.224.724 0 .448 0S0 .224 0 .5v1.776C0 5.052 1.948 7 4.724 7c1.328 0 2.5-.776 3.276-1.974C8.776 6.224 9.948 7 11.276 7 14.052 7 16 5.052 16 2.276V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.776c-1.328.226-2.5 1.026-3.276 2.224C10.948 3.802 9.776 3.002 8.448 2.776V.5c0-.276-.224-.5-.5-.5zM4.724 6C2.5 6 .724 4.224.724 2c0-.026.002-.052.004-.078.026-.002.052-.004.078-.004 2.224 0 4 1.776 4 4 0 .026-.002.052-.004.078-.026.002-.052.004-.078.004zm6.552 0c-.026 0-.052-.002-.078-.004C11.2 5.97 11.2 5.944 11.2 5.918c0-2.224 1.776-4 4-4 .026 0 .052.002.078.004-.002.026-.004.052-.004.078 0 2.224-1.776 4-4 4z"
                    fill="#4F9B51"
                  />
                </Svg>
                <Text style={styles.levelText}>양파 Lv.1</Text>
              </View>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                  fill="#F2994A"
                />
                <Path
                  d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                  fill="#F2994A"
                />
              </Svg>
              <Text style={styles.actionButtonText}>양파 상담</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                  fill="#56CCF2"
                />
                <Path d="M14 2v6h6" fill="#56CCF2" />
              </Svg>
              <Text style={styles.actionButtonText}>번아웃 테스트</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Onion Character */}
        <View style={styles.characterSection}>
          <Image
            source={require('@/assets/images/onion-character.png')}
            style={styles.onionImage}
            resizeMode="contain"
          />
          
          {/* Speech Bubble */}
          <View style={styles.speechBubble}>
            <Text style={styles.speechText}>"힘내요... 우리 같이 해봐요"</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardsSection: {
    gap: 10,
  },
  reminderCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1D1D1D',
    padding: 20,
    gap: 12,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: '500',
    color: '#828282',
  },
  reminderTitle: {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1D',
    lineHeight: 24,
  },
  scheduleLink: {
    fontFamily: 'Pretendard',
    fontSize: 12,
    fontWeight: '400',
    color: '#BDBDBD',
    textDecorationLine: 'underline',
  },
  levelCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1D1D1D',
    padding: 20,
    gap: 12,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  levelTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  levelText: {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: '500',
    color: '#1D1D1D',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '30%',
    backgroundColor: '#4F9B51',
    borderRadius: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1D1D1D',
    paddingVertical: 11,
    paddingHorizontal: 10,
  },
  actionButtonText: {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: '500',
    color: '#1D1D1D',
  },
  characterSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  onionImage: {
    width: 320,
    height: 320,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.9,
    elevation: 10,
  },
  speechBubble: {
    position: 'absolute',
    top: -40,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#828282',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  speechText: {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
