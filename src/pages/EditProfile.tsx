import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import EditProfile from '../components/EditProfile';

export default function Success() {
  return (
    <>
      <Header />
      <Navigation title="ATUALIZAR CONTA" />
      <EditProfile />
      <Footer />
    </>
  );
}