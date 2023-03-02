import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CustomerForm from '../components/CustomerForm';

export default function Success() {
  return (
    <>
      <Header />
      <Navigation title="CADASTRO" />
      <CustomerForm />
      <Footer />
    </>
  );
}