import AdminPanel from '../components/AdminPanel';
import Header from '../components/Header';
import Navigation from "../components/Navigation";

export default function Admin() {
  return (
    <>
      <Header isAdmin={true} />
      <Navigation title="PRODUTOS" />
      <AdminPanel />
    </>
  );
}
