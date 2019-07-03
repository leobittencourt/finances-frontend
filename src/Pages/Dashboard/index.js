import React, { useEffect } from 'react';
import { SEO } from 'Utils';
import { Container } from './styles';
import Title from 'Components/Title';
import ReportsBox from 'Components/ReportsBox';

function Dashboard() {
  useEffect(() => {
    SEO.changeDocumentTitle('Dashboard');
  });

  const data = [
    {
      label: 'Receita',
      value: 10000,
      styles: {
        boxBackgroundColor: 'green',
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Despesas',
      value: 3500,
      styles: {
        boxBackgroundColor: 'red',
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Líquido',
      value: 6500,
      styles: {
        boxBackgroundColor: 'dodgerblue',
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    },
    {
      label: 'Investimento',
      value: 150000,
      styles: {
        boxBackgroundColor: 'coral',
        valueTextColor: '#ffffff',
        labelTextColor: '#ffffff'
      }
    }
  ];

  return (
    <Container>
      <Title>Dashboard</Title>
      <ReportsBox data={data} />
    </Container>
  );
}

export default Dashboard;
