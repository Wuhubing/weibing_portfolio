import { analytics, db } from './config';
import { logEvent } from 'firebase/analytics';
import { collection, addDoc } from 'firebase/firestore';

interface GoogleTagManager {
  dataLayer?: {
    get(key: string): any;
  };
}

interface WindowWithGTM extends Window {
  google_tag_manager?: Record<string, GoogleTagManager>;
}

export const logPageVisit = async (page: string) => {
    console.group('Page Visit Logging'); // 创建一个日志组
    try {
      console.log('Starting to log page visit for:', page);
      console.log('Current URL:', window.location.href);
      console.log('Document Title:', document.title);
  
      // 检查 Firebase 配置
      console.log('Checking Firebase configuration...');
      console.log('Analytics instance:', analytics);
      console.log('Database instance:', db);
  
      // 记录到 Analytics
      console.log('Attempting to log Analytics event...');
      await logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
      console.log('✅ Analytics event logged successfully');
  
      // 获取 measurementId
      const measurementId = analytics.app.options.measurementId || '';
      console.log('MeasurementId:', measurementId);
      
      // 获取地理位置数据
      const win = window as WindowWithGTM;
      const analyticsLocation = win.google_tag_manager?.[measurementId]?.dataLayer?.get('user_location');
      console.log('Location data:', analyticsLocation);
      
      // 记录到 Firestore
      console.log('Preparing Firestore document...');
      const visitData = {
        timestamp: new Date(),
        page,
        language: navigator.language,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        platform: navigator.platform,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        region: analyticsLocation?.region || 'Unknown',
        country: analyticsLocation?.country || 'Unknown'
      };
      console.log('Visit data to be stored:', visitData);
  
      const docRef = await addDoc(collection(db, "visits"), visitData);
      console.log('✅ Visit logged to Firestore with ID:', docRef.id);
  
    } catch (error) {
      console.error('❌ Failed to log visit:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
    } finally {
      console.groupEnd(); // 结束日志组
    }
  };