import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoachingPage from './CoachingPage';
import ContactUs from './ContactUs';
import LaneRentals from './LaneRentals';
import SpecialEvents from './SpecialEvents';
import SummerCamp from './SummerCamp';
import RegistrationPage from './RegistrationPage';
import RegistrationFormPage from './RegistrationFormPage';
import StorePage from './StorePage';
import GalleryPage from './GalleryPage';
import OurTeamPage from './OurTeamPage';
import BookALanePage from './BookALanePage';
import PitchDateSelectionPage from './PitchDateSelectionPage';
import TimeSlotSelectionPage from './TimeSlotSelectionPage';
import SelectionSummaryPage from './SelectionSummaryPage';
import SelectCentrePage from './SelectCentrePage';
import TermsAndConditionsPage from './TermsAndConditionsPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import DurationSelectionPage from './DurationSelectionPage';

export default function App() {
  const getPage = () => {
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#coaching') return 'coaching';
    if (window.location.hash === '#contact') return 'contact';
    if (window.location.hash === '#store') return 'store';
    if (window.location.hash === '#gallery') return 'gallery';
    if (window.location.hash === '#lane-rentals') return 'lane-rentals';
    if (window.location.hash === '#select-centre' || window.location.hash === '#centre') return 'select-centre';
    if (window.location.hash === '#book-a-lane' || window.location.hash === '#book-lane' || window.location.hash === '#book') return 'book-a-lane';
    if (window.location.hash === '#book-box-cricket') return 'book-box-cricket';
    if (window.location.hash === '#book-standard-lane') return 'book-standard-lane';
    if (window.location.hash === '#book-bowling-machine') return 'book-bowling-machine';
    if (window.location.hash.startsWith('#select-duration')) return 'select-duration';
    if (window.location.hash.startsWith('#select-time-slot')) return 'select-time-slot';
    if (window.location.hash.startsWith('#selection-summary')) return 'selection-summary';
    if (window.location.hash === '#terms-and-conditions' || window.location.hash === '#terms' || window.location.hash === '#terms-conditions') return 'terms-and-conditions';
    if (window.location.hash === '#privacy-policy' || window.location.hash === '#privacy') return 'privacy-policy';
    if (window.location.hash === '#special-events') return 'special-events';
    if (window.location.hash === '#summer-camp') return 'summer-camp';
    if (window.location.hash === '#registration') return 'registration';
    if (window.location.hash === '#registration-form') return 'registration-form';
    if (
      window.location.hash === '#our-team' ||
      window.location.hash === '#team' ||
      window.location.hash === '#coaches' ||
      window.location.hash === '#ourteam'
    ) return 'our-team';
    return 'home';
  };

  const [page, setPage] = useState(getPage);

  const resetTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    resetTop();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage());
      resetTop();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    resetTop();
  }, [page]);

  if (page === 'about') return <AboutPage />;
  if (page === 'coaching') return <CoachingPage />;
  if (page === 'contact') return <ContactUs />;
  if (page === 'store') return <StorePage />;
  if (page === 'gallery') return <GalleryPage />;
  if (page === 'lane-rentals') return <LaneRentals />;
  if (page === 'select-centre') return <SelectCentrePage />;
  if (page === 'book-a-lane') return <BookALanePage />;
  if (page === 'book-box-cricket') return <PitchDateSelectionPage pitchType="box-cricket" />;
  if (page === 'book-standard-lane') return <PitchDateSelectionPage pitchType="lane-standard" />;
  if (page === 'book-bowling-machine') return <PitchDateSelectionPage pitchType="lane-bowling-machine" />;
  if (page === 'select-duration') {
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    const pitch = params.get('pitch') || 'lane-standard';
    const date = params.get('date') ? decodeURIComponent(params.get('date')) : 'Friday 4th September';
    return <DurationSelectionPage pitchType={pitch} selectedDateStr={date} />;
  }
  if (page === 'select-time-slot') {
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    const pitch = params.get('pitch') || 'lane-standard';
    const date = params.get('date') ? decodeURIComponent(params.get('date')) : 'Friday 4th September';
    const duration = params.get('duration') || '120';
    return <TimeSlotSelectionPage pitchType={pitch} selectedDateStr={date} duration={duration} />;
  }
  if (page === 'selection-summary') {
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    const pitch = params.get('pitch') || 'box-cricket';
    const date = params.get('date') ? decodeURIComponent(params.get('date')) : 'Sunday 6th September';
    const time = params.get('time') ? decodeURIComponent(params.get('time')) : '5:00AM - 7:00AM';
    const price = params.get('price') ? decodeURIComponent(params.get('price')) : '$200.00';
    return (
      <SelectionSummaryPage
        pitchType={pitch}
        selectedDateStr={date}
        selectedTimeStr={time}
        priceStr={price}
      />
    );
  }
  if (page === 'terms-and-conditions') return <TermsAndConditionsPage />;
  if (page === 'privacy-policy') return <PrivacyPolicyPage />;
  if (page === 'special-events') return <SpecialEvents />;
  if (page === 'summer-camp') return <SummerCamp />;
  if (page === 'registration') return <RegistrationPage />;
  if (page === 'registration-form') return <RegistrationFormPage />;
  if (page === 'our-team') return <OurTeamPage />;
  return <HomePage />;
}

