import React from 'react';
import Description from '../../components/Description';
import Popular from './../../components/Popular';
import Collections from './../../components/Collections';

export default function Home() {
  return (
    <div>
      <Description />
      <Popular />
      <Collections />
    </div>
  );
}
