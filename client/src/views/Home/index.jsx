import React from 'react';
import Description from '../../components/Description';
import Popular from './../../components/Popular';
import Collections from './../../components/Collections';
import Colaboration from './../../components/Colaboration';
import Footer from './../../components/Footer';

export default function Home() {
  return (
    <div>
      <Description />
      <Popular />
      <Collections />
      <Colaboration />
      <Footer />
    </div>
  );
}
