import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const getOrCreateVisitorId = (): string => {
  let visitorId = localStorage.getItem('visitor_id');
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('visitor_id', visitorId);
  }
  return visitorId;
};

const getOrCreateSessionId = (): string => {
  const sessionKey = 'session_id';
  const sessionTimeKey = 'session_time';
  const sessionTimeout = 30 * 60 * 1000;

  let sessionId = sessionStorage.getItem(sessionKey);
  const sessionTime = sessionStorage.getItem(sessionTimeKey);

  const now = Date.now();

  if (!sessionId || !sessionTime || now - parseInt(sessionTime) > sessionTimeout) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(sessionKey, sessionId);
  }

  sessionStorage.setItem(sessionTimeKey, now.toString());

  return sessionId;
};

export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const visitorId = getOrCreateVisitorId();
        const sessionId = getOrCreateSessionId();

        await supabase.from('page_views').insert({
          page_path: location.pathname,
          page_title: document.title,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          session_id: sessionId,
          visitor_id: visitorId,
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [location.pathname]);
};

export const useAnalytics = () => {
  const trackEvent = useCallback(async (
    eventName: string,
    eventCategory: string = 'general',
    eventData: Record<string, any> = {}
  ) => {
    try {
      const visitorId = getOrCreateVisitorId();
      const sessionId = getOrCreateSessionId();

      await supabase.from('events').insert({
        event_name: eventName,
        event_category: eventCategory,
        event_data: eventData,
        page_path: window.location.pathname,
        session_id: sessionId,
        visitor_id: visitorId,
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }, []);

  return { trackEvent };
};
